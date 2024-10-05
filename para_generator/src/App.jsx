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
  const [inputvalue,setInputvalue]=useState();
 
  const [para,setPara] =useState(" ");
  
    
    const arr = ['teckstack','portfolifo','groups','hackathons'];
    function generateText(){

       let newparagraph='';
       for(let i=0;i<inputvalue;i++){
        let noofwords= Math.floor(Math.random()*arr);
        newparagraph+= arr[noofwords]+'';
       }
      setPara(newparagraph);
    }
  
     return(
    <div>
      <h1> Para Generator</h1>
      <input
      type='number'
      placeholder='Enter the number of words'
      value={inputvalue}
      onChange={ (e)=> setInputvalue(e.target.value)}
      />
      <button onClick={generateText}>Generate</button>
      <p>

        {para} 
      </p>
      </div>
  )
}

export default App
