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
const addfunction =()=> {
  setTodos([...todos, {
    title:" market",
    description:" bring vegetables, fruit"
  }
])
}

  return (
    <div>
   <h1>
   Title: {title}
   </h1>
   <h5>
    Description: {description}
   </h5>
   <button onClick={ addfunction} > Add todos</button>
  </div>
     )
      }
 

export default App
