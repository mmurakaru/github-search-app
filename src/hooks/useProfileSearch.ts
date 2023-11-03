import { useState } from 'react'
import { getUser } from '../lib'
import { ChangeEvent } from 'react'

interface Profile {
  username: string,
  name: string
}

function useProfileSearch() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchResult, setSearchResult] = useState<Profile>()

  function searchProfile(e: ChangeEvent<HTMLInputElement>) {
    const username = e.target.value
    setSearchQuery(username)
    getUser(username)
      .then(res => res.json())
      .then(data => setSearchResult({
        username: data.login,
        name: data.name
      }))
      .catch(error => console.log(error))
  }

  return { searchResult, searchProfile, searchQuery }
}

export { useProfileSearch }