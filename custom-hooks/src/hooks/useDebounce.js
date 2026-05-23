import { useState, useEffect } from 'react'



export function useDebounce(value, delay = 300) {
  // TODO: implement
  const [ debounce, setDebounce] = useState(value);

  useEffect(()=>{
      
    const timerid = setTimeout(() => {
         setDebounce(value)
    }, delay);

    
    return ()=> clearTimeout(timerid)

  },[value,delay])

  return debounce
}
