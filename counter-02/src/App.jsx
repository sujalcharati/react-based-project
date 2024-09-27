import { useState } from 'react'

import './App.css'


function App(){
  const [count, setCount] = useState(0);

  return (
    <div>
       <Counter count={count} setCount={setCount} />
      
    </div>
  )
}
 
function Counter({count,setCount}){
  return <div>
    {/* {count} */}
    <Counterrender count={count}/>
    <Buttons count={count} setCount={setCount} />
  </div>

}

 function Counterrender({count}){
  return <div>
    {count}
  </div>
 }
 

function Buttons({count,setCount}){
   return <div>
  <button onClick={()=>{
    setCount(count+1)
  }}>
    increment
  </button>
  <button onClick={()=>{
   setCount(count-1)
  }}>
    Decrement
  </button>
   </div>
}
export default App
