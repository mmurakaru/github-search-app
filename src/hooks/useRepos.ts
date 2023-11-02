import { useState } from 'react'
import { getRepos } from '../lib'
import { useEffect } from 'react'

function useRepos(userName: string) {
  const [repos, setRepos] = useState<any[]>([])

  useEffect(() => {
    getRepos(userName)
      .then(res => res.json())
      .then(data => setRepos(data))
      .catch(error => console.log(error))
  }, [userName])

  return { repos }
}

export { useRepos }