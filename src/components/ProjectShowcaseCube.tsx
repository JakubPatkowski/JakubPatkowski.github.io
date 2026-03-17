import { projects } from '@/data/projects';
import { useLanguage } from '@/i18n/LanguageContext';
import { useState, useEffect, useMemo, useRef, useCallback } from 'react'

/**
 * A 3D rotating cuboid that showcases project screenshots.
 *
 * The cuboid stretches to full container width and uses a real
 * depth (~40 % of width) so the 90° rotation looks genuinely 3D.
 *
 * Four visible faces rotate clockwise:
 *   front → right → back → left → front …
 *
 * Images use object-contain with a blurred background fill so
 * non-standard aspect ratios always look clean.
 *
 * Hidden faces are updated after each rotation so the viewer
 * never sees images swapping.
 */
export function ProjectShowcaseCube() {
  const { lang } = useLanguage()

  const allImages = useMemo(() => {
    const imgs: { src: string; title: string }[] = []
    for (const p of projects) {
      if (p.images) {
        const t = lang === 'en' && p.titleEn ? p.titleEn : p.title
        for (const img of p.images) {
          imgs.push({ src: img, title: t })
        }
      }
    }
    return imgs
  }, [lang])

  // Responsive sizing 
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [faceW, setFaceW] = useState(800)
    const faceH = Math.round(faceW * 0.5)
    // Radius of the carousel drum — distance from center to each face
    // For 4 faces: r = (faceW / 2) / tan(π/4) = faceW / 2
    const radius = Math.round(faceW / 2)

  const measure = useCallback(() => {
    if (wrapperRef.current) {
      setFaceW(wrapperRef.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  // Face image indices
  // We track which image is shown on each of the 4 faces.
  // After each 90° rotation, the face that just went "behind"
  // gets its image swapped to the next one in the queue.
  const [faces, setFaces] = useState<number[]>([0, 1, 2, 3])
  const nextImgRef = useRef(4) // next image index to assign

  const [rotation, setRotation] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Which face index (0-3) is currently showing
  // rotation=0 → face 0 (front), rotation=-90 → face 1 (right), etc.
  const currentFaceIdx = ((Math.abs(rotation) / 90) % 4)

  // Rotate every 4 s
  useEffect(() => {
    if (allImages.length < 2) return
    const timer = setInterval(() => {
      setIsAnimating(true)
      setRotation(prev => prev - 90)
    }, 4000)
    return () => clearInterval(timer)
  }, [allImages.length])

  // After animation completes, swap the image on the face that
  // is now behind the viewer (2 faces back from current).
  useEffect(() => {
    if (!isAnimating) return
    const timeout = setTimeout(() => {
      setIsAnimating(false)
      // The face that is now directly behind us:
      const behindFace = (currentFaceIdx + 2) % 4
      setFaces(prev => {
        const copy = [...prev]
        copy[behindFace] = nextImgRef.current % allImages.length
        nextImgRef.current++
        return copy
      })
    }, 1100) // just after the 1 s CSS transition
    return () => clearTimeout(timeout)
  }, [rotation]) // eslint-disable-line react-hooks/exhaustive-deps

  if (allImages.length === 0) return null

  // Face transforms — standard cuboid mapping
  const faceTransforms = [
  `rotateY(0deg)   translateZ(${radius}px)`,
  `rotateY(90deg)  translateZ(${radius}px)`,
  `rotateY(180deg) translateZ(${radius}px)`,
  `rotateY(-90deg) translateZ(${radius}px)`,
]

  return (
    <div ref={wrapperRef} className="w-full">
      {/* Perspective wrapper */}
      <div
        className="relative mx-auto"
        style={{
          perspective: `${faceW * 1.8}px`,
          width: faceW,
          height: faceH,
        }}
      >
        {/* The cuboid */}
        <div
          className="absolute w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(-${radius}px) rotateY(${rotation}deg)`,
            transition: 'transform 1s cubic-bezier(0.45, 0.05, 0.25, 1)',
          }}
        >
          {faceTransforms.map((transform, i) => {
            const imgIdx = faces[i] % allImages.length
            const img = allImages[imgIdx]

            return (
                <WideFace
                key={i}
                image={img}
                width={faceW}
                height={faceH}
                transform={transform}
                />
            )
            })}
        </div>
      </div>
    </div>
  )
}

/* 
  Wide face — front / back
  Blurred BG fill + contained image + project title overlay
*/

interface FaceProps {
  image: { src: string; title: string }
  width: number
  height: number
  transform: string
}

function WideFace({ image, width, height, transform }: FaceProps) {
  return (
    <div
      className="absolute overflow-hidden rounded-xl
                 border border-white/[0.08]"
      style={{
        width,
        height,
        left: '50%',
        top: '50%',
        marginLeft: -width / 2,
        marginTop: -height / 2,
        transform,
        backfaceVisibility: 'hidden',
      }}
    >
      {/* Blurred background fill */}
      <img
        src={image.src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-50"
      />

      {/* Dark base behind image for contrast */}
      <div className="absolute inset-0 bg-gray-900/40" />

      {/* Actual screenshot — contained */}
      <img
        src={image.src}
        alt={image.title}
        className="relative w-full h-full object-contain z-[1]"
      />

      {/* Bottom gradient with project name */}
      <div
        className="absolute inset-x-0 bottom-0 z-[2]
                    bg-gradient-to-t from-black/70 via-black/25 to-transparent
                    px-5 py-3"
      >
        <span className="text-sm font-medium text-white/90 drop-shadow-md">
          {image.title}
        </span>
      </div>
    </div>
  )
}
