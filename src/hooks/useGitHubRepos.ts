import { useState, useEffect, useCallback } from 'react'
import type { GitHubRepo } from '../types'
import { fetchUserRepos, clearReposCache } from '../services/github'

interface UseGitHubReposState {
  repos: GitHubRepo[]
  loading: boolean
  error: string | null
}

interface UseGitHubReposReturn extends UseGitHubReposState {
  refetch: () => Promise<void>
  clearCache: () => void
}

export function useGitHubRepos(): UseGitHubReposReturn {
  const [state, setState] = useState<UseGitHubReposState>({
    repos: [],
    loading: true,
    error: null,
  })

  const fetchData = useCallback(async (signal?: AbortSignal) => {
    try {
      const repos = await fetchUserRepos()
      if (!signal?.aborted) {
        setState({ repos, loading: false, error: null })
      }
    } catch (err) {
      if (!signal?.aborted) {
        const message =
          err instanceof Error ? err.message : 'Unknown error while fetching repositories'
        setState({ repos: [], loading: false, error: message })
      }
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    const rafId = requestAnimationFrame(() => {
      fetchData(controller.signal)
    })
    return () => {
      cancelAnimationFrame(rafId)
      controller.abort()
    }
  }, [fetchData])

  const refetch = async () => {
    clearReposCache()
    setState({ repos: [], loading: true, error: null })
    await fetchData()
  }

  return {
    ...state,
    refetch,
    clearCache: clearReposCache,
  }
}
