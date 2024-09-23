import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Buttoncomponent/>
      <div>
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}
function Buttoncomponent({count}){
  return(
    <>
         {count}
    </>
  )
}

export default App
