import { coloratom } from './atoms/colors/atom';
import { RecoilRoot, useRecoilState } from 'recoil';
import './App.css'
function App() {
 
  return (
 <div>
      <RecoilRoot>
         <Buttoncomponents/>
      </RecoilRoot>
  </div>
)
     
  
  
}
function Buttoncomponents(){
  const [color,setColor]= useRecoilState(coloratom);

  const redcolor = ()=>{
    setColor(color ==='red'?'white':'red');
   }
  const yellowcolor = ()=>{
    setColor(color ==='yellow'?'white':'yellow');
   }
  const bluecolor = ()=>{
    setColor(color ==='blue'?'white':'blue');
   }
  const pinkcolor = ()=>{
    setColor(color ==='pink'?'white':'pink');
   }
  const greencolor = ()=>{
    setColor(color ==='green'?'white':'green');
   }
  const blackcolor = ()=>{
    setColor(color ==='black'?'white':'black');
   }
  const defaultcolor = ()=>{
    setColor(color ==='white'?'white':'white');
   }
  return(
    <div>
      
  <div style={{backgroundColor: color, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',padding: '10px 20px', fontSize: '16px'}}>
    
    {/* <div style={ { display:'flex',
      justifyContent:'center',
      alignItems:'center',
       borderRadius:'9px',
      padding: '10px 20px',
       fontSize: '16px'
       }}> */}
    <button onClick={redcolor} style={{background:'red' }}>Red </button>
    <button onClick={yellowcolor}style={{background:'yellow'}}>Yellow </button>
    <button onClick={bluecolor}style={{background:'blue'}}>Blue </button>
    <button onClick={pinkcolor}style={{ background:'pink'}}>pink </button>
    <button onClick={greencolor}style={{background:'green'}}>Green </button>
    <button onClick={blackcolor}style={{background:'black',color:'white'}}>Black </button>
    <button onClick={defaultcolor}style={{background:'default'}}>default </button>
  </div>
  </div>
    // </div>
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