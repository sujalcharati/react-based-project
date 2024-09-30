

import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { followersatom, likesatom, photosatom } from './atoms.jsx/profile.jsx/card';


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
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}> 
      <div
        style={{
          background: '#f0f8ff', 
          width: '400px',
          height: '450px',
          border: '2px solid #4682b4', 
          borderRadius: '6px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '50vh'
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
        <div style={{ color: 'black', fontWeight: 'bold' }}>Sujal Charati</div>
        <div style={{ color: 'black' }}>Berhampur</div>
        <Lowercomponent />
      </div>
    </div>
  );
}
 
  function Lowercomponent(){
  const followers = useRecoilValue(followersatom);
  const likes  = useRecoilValue(likesatom);
  const photos = useRecoilValue( photosatom);

  return (
    <div style={{ background: '2px solid black', marginTop: '30px' }}>
      <div className='flex flex-row' style={{ paddingBottom: '10px', color: 'black' }}>
        <div style={{ paddingRight: '20px',fontWeight: 'bold' }}>Followers</div>
        <div style={{ paddingRight: '20px' ,fontWeight: 'bold'}}>Likes</div>
        <div style={{fontWeight: 'bold'}}>Photos</div>
      </div>
      <div className='flex flex-row text-black'>
        <div style={{ paddingRight: '60px' }}>{followers}</div>
        <div style={{ paddingRight: '30px' }}>{likes}</div>
        <div>{photos}</div>
      </div>
      <div>

      <img src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' style={{
         borderRadius: '500px',
         height: '34px',
      }}/>
      <img src='https://t4.ftcdn.net/jpg/05/48/51/53/240_F_548515332_izhrnn846zEYhqLJZxQK5kxuZDdUVAov.jpg' style={{
         borderRadius: '500px',
         height: '34px',
      }}/>
      <img src='https://imgs.search.brave.com/xF_BwBz-bpV5b0nhz_Od9qtC1iJ84jzayiOAH_pBJ54/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2VU/dEZ1VmVLVHdxVEQ0/MlBZTUxXdUEtMzIw/LTgwLmpwZw' style={{
         borderRadius: '500px',
         height: '34px',
      }}/>
      <img src='https://imgs.search.brave.com/haOrmK6hj5Kj73lwxYUeIcUmu5JLOFYX3dS5gyZn5rQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzMyLzIwLzAz/LzM2MF9GXzUzMjIw/MDM4Ml9LTDZDRGFa/Y3VzaVpPOW5PNVRE/N2hXUUV6OEtvNkJa/Qi5qcGc' style={{
         borderRadius: '500px',
         height: '34px',
      }}/>

      </div>
    </div>
  )
}





export default App
