


const useFetch = async (url, method, auth, body) => {
  const res = await fetch(url, {
    method,
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'x-auth-token': auth
    },
    body
  })

  return res
}


export default useFetch
