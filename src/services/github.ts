import type { GitHubRepo } from '../types'

const GITHUB_USERNAME = 'JakubPatkowski'
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`
const CACHE_KEY = 'github_repos_cache'
const CACHE_DURATION_MS = 60 * 60 * 1000 // 1h

interface CachedData {
  repos: GitHubRepo[]
  timestamp: number
}

export async function fetchUserRepos(): Promise<GitHubRepo[]> {
  const cached = getCachedRepos()
  if (cached) return cached

  const response = await fetch(GITHUB_API_URL, {
    headers: { Accept: 'application/vnd.github.v3+json' },
  })

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error('GitHub API request limit exceeded. Please try again later.')
    }
    throw new Error(`API ERROR: ${response.status}`)
  }

  const repos: GitHubRepo[] = await response.json()

  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({ repos, timestamp: Date.now() } satisfies CachedData)
  )

  return repos
}

function getCachedRepos(): GitHubRepo[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null

    const data: CachedData = JSON.parse(raw)
    const isExpired = Date.now() - data.timestamp > CACHE_DURATION_MS

    if (isExpired) {
      localStorage.removeItem(CACHE_KEY)
      return null
    }

    return data.repos
  } catch {
    return null
  }
}

export function clearReposCache(): void {
  localStorage.removeItem(CACHE_KEY)
}

export async function fetchRepoDetails(repoName: string): Promise<GitHubRepo> {
  const response = await fetch(
    `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`,
    { headers: { Accept: 'application/vnd.github.v3+json' } }
  )

  if (!response.ok) {
    throw new Error(`Unable to fetch repository: ${repoName}`)
  }

  return response.json() as Promise<GitHubRepo>
}
