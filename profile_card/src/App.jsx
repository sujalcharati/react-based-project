

import { RecoilRoot } from 'recoil'
import './App.css'

function App() {

  return (
    <>
   <div>
    <RecoilRoot>
    <Biggercomponent/>
    </RecoilRoot>
   </div>
      
    </>
  )
}

function Biggercomponent(){
  return (
    <div
      className=""
      style={{
        background: 'white',
        width: '400px',
        height: '450px',
        border: '2px solid brown',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img
        src='https://media.licdn.com/dms/image/v2/D5603AQHoj_nP3nGQrg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696093662536?e=1733356800&v=beta&t=STAKwPj0VSZ-wBZjqu9lItZqMxoQ01iSaN1Krr3X-d4'
        style={{
          borderRadius: '500px',
          height: '84px',
          marginTop: '-72px'
        }}
      />
      <div style={{color:'black',fontWeight:'bold'}}> Sujal charati </div>
      <div style={{color:'black',}}> Berhampur </div>
    </div>
  )
}

export default App
