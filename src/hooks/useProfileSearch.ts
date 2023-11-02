import { useState } from 'react'
import { getUser } from '../lib'
import { ChangeEvent } from 'react'

interface Profile {
  userName: string,
  name: string
}

function useProfileSearch() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchResult, setSearchResult] = useState<Profile>()

  function searchProfile(e: ChangeEvent<HTMLInputElement>) {
    const userName = e.target.value
    setSearchQuery(userName)
    getUser(userName)
      .then(res => res.json())
      .then(data => setSearchResult({
        userName: data.login,
        name: data.name
      }))
      .catch(error => console.log(error))
  }

  return { searchResult, searchProfile, searchQuery }
}

export { useProfileSearch }