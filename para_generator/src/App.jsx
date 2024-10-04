import { useEffect, useState } from 'react'

import './App.css'

function App() {

  return (
   
      <div>
            <Generator/>
       </div>
    
   
  )
}

function Generator(){
  const [inputvalue,setInputvalue]=useState('');
  const [para,setPara] =useState("");
  const inputchange =(e)=>{
    setInputvalue(Number(e.target.value));
  }
  const generateText= ()=>{

    useEffect(()=>{
    const newparagraph =
  
    },[para]);
  }
  return(
    <div>
      <h1> Para Generator</h1>
      <input
      type='text'
      placeholder='Enter the number of words'
      value={textsize}
      onChange={ inputchange}
      />
      <button onClick={generateText}>Generate</button>
    </div>
  )
}

export default App
