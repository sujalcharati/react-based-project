import { useState } from 'react'

import './App.css'
import { useContext } from 'react';
import { contextcontainer } from './context';


function App(){
  const [count, setCount] = useState(0);
// wrap any components that is using teleport data inside the context provider 
  return (
    <div>
    {/* so here we teleporting count variable  */}
      <contextcontainer.Provider value={count}>
      
        <Counter  setCount={setCount} />
      </contextcontainer.Provider>
      
        
    </div>
  )
}
 // we can now see that there is no count var being passed through this Counter component and similarly we cando for the setCount as well 
function Counter({setCount}){
  return <div>
    
    <Counterrender />
    <Buttons  setCount={setCount} />
  </div>

}

 function Counterrender({}){
  const count =useContext(contextcontainer);// here it is using the usecontext for teleportation by the above provider
  return <div>
    {count}
  </div>
 }
 

function Buttons({setCount}){
  const count = useContext(contextcontainer)//here it is using the usecontext for teleportation by the above provider
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
