import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { useState } from 'react'
import { filteratom } from './Todo/atoms/Todos';

function App() {
  const [todo,setTodo]= useRecoilState(todoatom);
  const addTodo =()=>{
     setTodo([...todo,{}]);
     setTitle('');
     setDescription('');
  }

   return (
    <RecoilRoot>
      <div>
        <TodoButton/>
        <Filterbutton/>
      </div>
    </RecoilRoot>
   )
}

function TodoButton(){
  const [title,setTitle] = useState([]);
  const [description,setDescription] = useState([]);

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
 function Filterbutton(){
const [filter,setFilter]= useRecoilState(filteratom);
  return (
    <input
    placeholder='filter'
    value={filter}
    type='text'
    onChange={(e)=>{
      setFilter(e.target.value);
    }}/>
  )
 }

export default App
