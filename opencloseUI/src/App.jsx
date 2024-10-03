import { useState } from 'react'

import './App.css'

function App() {
  
  return (
    
      <div >
        <Accordian 
        title=" What is web 3 ?"
        section="This ensures that the space between the flex items is distributed evenly. "/> 
     </div>
    
  )
}

function Accordian({title,section}){ 
  const [isopen, setIsopen] = useState(false);
  const  toggleeffect =()=>{
    
        setIsopen();
  }
      return (
        <div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width:'340px',
            
            color: 'black',
            justifyContent: 'space-evenly',
           
          }}>
            <div  style={{ marginBottom: '10px', backgroundColor: '#7cd9d5',height:'55px',}}>
              {title}
              <span style={{ color:'brown'}}>+</span>
              { 
                (
                  <div>
                   <p>{section}</p> 
                    </div>
                )
              }
            </div>
            <div style={{ marginBottom: '10px',backgroundColor: '#7cd9d5',height:'55px' }}>
              what is machine learning ?
              <span >+</span>
            </div>
            <div style={{ marginBottom: '10px',backgroundColor: '#7cd9d5' ,height:'55px'}}>
              what is artificial language ?
              <span>+</span>
            </div>
            <div style={{ marginBottom: '10px' ,backgroundColor: '#7cd9d5',height:'55px'}}>
              what is Accordian component ?
              <span>+</span>
            </div>
          </div>
        </div>
      )
}

export default App
