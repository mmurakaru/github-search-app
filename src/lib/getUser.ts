function getUser(username: string) {
  const url = `https://api.github.com/users/${username}`
  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    }
  })
}

export { getUser }