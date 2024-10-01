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
  
  return(
    <div>
      <h1 style={{ backgroundColor: color,fontFamily:'sans-serif', fontWeight:'bold', fontSize:'50px',display: 'flex', justifyContent: 'center'}}>Background changer</h1>
      <div style={{backgroundColor: color, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px'}}>
        

        <button onClick={redcolor} style={{background: 'red', paddingRight: '19px', margin: '0 15px',borderRadius:'9px',height:'40px'}}>Red</button>
        <button onClick={yellowcolor} style={{background: 'yellow', margin: '0 15px',borderRadius:'9px',height:'40px'}}>Yellow</button>
        <button onClick={bluecolor} style={{background: 'blue', margin: '0 15px',borderRadius:'9px',height:'40px'}}>Blue</button>
        <button onClick={pinkcolor} style={{background: 'pink', margin: '0 15px',borderRadius:'9px',height:'40px'}}>Pink</button>
        <button onClick={greencolor} style={{background: 'green', margin: '0 15px',borderRadius:'9px',height:'40px'}}>Green</button>
        <button onClick={blackcolor} style={{background: 'black', color: 'white', margin: '0 15px',borderRadius:'9px',height:'40px'}}>Black</button>
       
      </div>
    </div>
  )
}



 



export default App
