import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'

function App() {
   return (
    <RecoilRoot>
      <div>
        <Button/>
      </div>
    </RecoilRoot>
   )
}

function Button(){
  const storetodos = useRecoilValue(todoatom);
  return (
    <div>
      <div>
        <input
         type='text'
         placeholder='title'/>
       </div>
      <div>
        <input
         type='text'
         placeholder='description'/>
        </div>

        <button onClick={()=>{
        
        }}>submit</button>
    </div>
  )
}

export default App
