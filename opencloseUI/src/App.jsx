import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <div >
        <Accordian title=" what is web 3 brief it "  section="  decentralization, blockchain technology, and user ownership of data"/> 

        <Accordian title=" what is machine learning and its branches" 
        section=" supervised , unsupervised ,semisupervised learning "
        /> 
      </div>
    </>
  )
}

function Accordian({title,section}){ 
  const [isopen, setIsopen] = useState(false);

      return (
       <div>

           <div onClick={()=>{
            setIsopen()
           }}>
              {title}
           </div>
           <div>
              {section}
           </div>
      </div>
        
      )
}

export default App
