import { useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([{

    title:"study",
    description:" go through some command line..."
  },
  {

    title:" time pass",
    description:" play chess ..."
  }
  ]
  
)
function addfunction(){
  setTodos([...todos, {
    title:" market",
    description:" bring vegetables, fruit"
  }
])
}

  return (
    <>
  
  <button onClick={ addfunction} > Add todos</button>
  </>
     )
      }
 

export default App
