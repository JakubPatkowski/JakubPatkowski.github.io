import { useState, useEffect, useCallback } from 'react'

interface RotatingProjectImageProps {
  images: string[]
  alt: string
  /** Time in ms each image stays visible before fading (default: 8000) */
  interval?: number
  /** Duration of the crossfade in ms (default: 1500) */
  fadeDuration?: number
  className?: string
}

/**
 * Slow, gentle crossfade between project screenshots.
 *
 * Both the current and next image are always rendered on top of each
 * other.  The "next" image starts at opacity 0 and slowly fades in
 * over `fadeDuration` ms while the current image simultaneously fades
 * out.  This produces a seamless dissolve instead of a hard swap.
 *
 * Images use `object-cover` so non-standard aspect ratios are
 * gracefully handled — always centered and filling the frame.
 */
export function RotatingProjectImage({
  images,
  alt,
  interval = 8000,
  fadeDuration = 1500,
  className = '',
}: RotatingProjectImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1 % (images.length || 1))
  const [isFading, setIsFading] = useState(false)

  const advance = useCallback(() => {
    if (images.length <= 1) return
    // Start the crossfade
    setNextIndex((currentIndex + 1) % images.length)
    setIsFading(true)
  }, [currentIndex, images.length])

  // Auto-advance timer
  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(advance, interval)
    return () => clearInterval(timer)
  }, [advance, images.length, interval])

  // After the fade completes, swap indices and reset
  useEffect(() => {
    if (!isFading) return
    const timeout = setTimeout(() => {
      setCurrentIndex(nextIndex)
      setIsFading(false)
    }, fadeDuration)
    return () => clearTimeout(timeout)
  }, [isFading, nextIndex, fadeDuration])

  if (images.length === 0) return null

  const fadeMs = `${fadeDuration}ms`

  return (
    <div className={`relative w-full h-48 overflow-hidden bg-gray-900 ${className}`}>
      {/* Bottom layer — next image (always mounted, fades in) */}
      {images.length > 1 && (
        <img
          key={`next-${nextIndex}`}
          src={images[nextIndex]}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: isFading ? 1 : 0,
            transition: `opacity ${fadeMs} ease-in-out`,
          }}
        />
      )}

      {/* Top layer — current image (fades out during transition) */}
      <img
        key={`curr-${currentIndex}`}
        src={images[currentIndex]}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: isFading ? 0 : 1,
          transition: `opacity ${fadeMs} ease-in-out`,
          zIndex: 1,
        }}
      />

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => {
            const isActive = isFading ? i === nextIndex : i === currentIndex
            return (
              <span
                key={i}
                className="block h-1.5 rounded-full transition-all duration-500"
                style={{
                  width: isActive ? '1rem' : '0.375rem',
                  backgroundColor: isActive ? 'white' : 'rgba(255,255,255,0.45)',
                }}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}