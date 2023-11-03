import { useState, useMemo, useEffect } from 'react'
import { getRepos } from '../lib'
import * as JsSearch from 'js-search'
import { ChangeEvent } from 'react'

function useRepos(username: string) {
  const [repos, setRepos] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchResults, setSearchResults] = useState<any[]>([])

  const searchIndex = useMemo(() => {
    const dataToSearch = new JsSearch.Search(['id']);

    dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex(['id']);

    dataToSearch.addIndex('name');
    dataToSearch.addIndex('language');

    dataToSearch.addDocuments(repos);

    return dataToSearch;
  }, [repos]);

  function filterRepos(e: ChangeEvent<HTMLInputElement>) {
    const queryResult = searchIndex.search(e.target.value);
    setSearchQuery(e.target.value)
    setSearchResults(queryResult);
  }

  useEffect(() => {
    getRepos(username)
      .then(res => res.json())
      .then(data => setRepos(data))
      .catch(error => console.log(error))
  }, [username])

  return { repos, filterRepos, searchQuery, searchResults }
}

export { useRepos }