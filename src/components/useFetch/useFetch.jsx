import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [pending, setPending] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    setTimeout(()=>{
       fetch(url)
       .then(res=>{
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          )
        }
        return res.json()
    })
    .then(data=>{
        setData(data)
        setError(null)
      }).catch (err=> {
        setError(err.message)
        setData(null)
      }).finally(()=> {
        setPending(false)
      })
    
    },1000)
  },[url])
  return {data, pending, error}
}
export default useFetch