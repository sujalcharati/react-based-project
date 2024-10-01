
import { useRecoilState } from 'recoil';
import './App.css'
function App() {
  const [color,setColor]= useRecoilState('white');

  const changecolor= ()=>{
    setColor(color==='red'?'white':'red');
   }
  return (
 
      
  <div style={{background:'{ color}'}}>
    
    <div style={ { display:'flex',
      justifyContent:'center',
      alignItems:'center',
       borderRadius:'9px',
       }}>
    <button onClick={ changecolor} style={{background:'red' }}>Red </button>
    <button style={{background:'yellow'}}>Yellow </button>
    <button style={{background:'blue'}}>Blue </button>
    <button style={{ background:'pink'}}>pink </button>
    <button style={{background:'green'}}>Green </button>
    <button style={{background:'black'}}>Black </button>
    <button style={{background:'defaul'}}>default </button>
  </div>
  </div>
)
     
  
  
}



 



export default App

// import { useState, useEffect } from 'react'

// import './App.css'

// function App() {
//   const [color, setColor] = useState('')

//   useEffect(() => {
//     document.body.style.background = color;
//   }, [color])
  
//   const changeBG = (e) => {
//     setColor(e.target.innerText.toLowerCase())
//   }

//   return (
//     <div className='spanContainer'>
//       <span onClick={changeBG}>Red</span>
//       <span onClick={changeBG}>Yellow</span>
//       <span onClick={changeBG}>Purple</span>
//       <span onClick={changeBG}>Green</span>
//       <span onClick={changeBG}>Blue</span>
//       <span onClick={changeBG}>Orange</span>
//     </div>
//   )
// }

// export default App