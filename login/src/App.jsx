
import './App.css'

function App() {
  const [num, setNum] = useState('')

  return (
   
      <div> 
        <Loginform/>
      </div>
     )
}
function Loginform(){
  return(
<div>
  <h1 style={{color:'white'}}>Login via OTP</h1>
  <input
  type='number'
  value={num}
  placeholder='enter the phone number'
  onChange={e=> setNum(e.target.value)}/>
</div>
  )
}
export default App
