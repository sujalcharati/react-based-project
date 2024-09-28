import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { useState } from 'react'

function App() {
  const addTodo =()=>{
    
  }
   return (
    <RecoilRoot>
      <div>
        <Button/>
      </div>
    </RecoilRoot>
   )
}

function Button(){
  const [title,setTitle] = useState([]);
  const [description,setDescription] = useState([]);


  // const storetodos = useRecoilValue(todoatom);
  return (
    <div>
      <div>
        <input
         type='text'
         placeholder='title'
         value={ title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}/>
       </div>
     <div>
        <input
         type='text'
         placeholder='description'
         value={description}
         onChange={(e)=>{
          setDescription(e.target.value)
         }}/>
    </div>

        <button onClick={ addTodo }>Add todo </button>
    </div>
  )
}

export default App
