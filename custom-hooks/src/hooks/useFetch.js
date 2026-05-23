import { useState, useEffect } from 'react'


export function useFetch(url) {


  const [loading, setLoading]= useState(true);
  const [data, setData] = useState(null);
  const [error, setError]= useState(null);

  useEffect(()=>{

    let cancelled = false;

    setLoading(true)
    setError(false)

    fetch(url)
    .then(res =>{
      if(!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json();
    })
    .then(json =>{
      if(!cancelled) setData(json);
    })
    .catch(err =>{
      if(!cancelled) setError(err)
    })
  .finally(()=>{
    if(!cancelled) setLoading(false);
  })
  return ()=>{
    cancelled = true
  }
     
  },[url])

  return { data, loading, error }
}
