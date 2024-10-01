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
      <div style={{backgroundColor: color, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 20px', fontSize: '16px', borderRadius:'9px'}}>
        

        <button onClick={redcolor} style={{background: 'red', paddingRight: '9px', margin: '0 5px',}}>Red</button>
        <button onClick={yellowcolor} style={{background: 'yellow', margin: '0 5px'}}>Yellow</button>
        <button onClick={bluecolor} style={{background: 'blue', margin: '0 15px'}}>Blue</button>
        <button onClick={pinkcolor} style={{background: 'pink', margin: '0 5px'}}>Pink</button>
        <button onClick={greencolor} style={{background: 'green', margin: '0 5px'}}>Green</button>
        <button onClick={blackcolor} style={{background: 'black', color: 'white', margin: '0 5px'}}>Black</button>
        <button onClick={defaultcolor} style={{background: 'default', margin: '0 5px'}}>Default</button>
      </div>
    </div>
  )
}



 



export default App
