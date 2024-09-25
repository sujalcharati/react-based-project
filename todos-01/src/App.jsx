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
 
   <button onClick={ addfunction} > Add todos</button>
   <Displaytodo title={title} description={ description}/>
  </div> 
     )
}
 
function Displaytodo({title,description}){
return(
  <div>
    <h1>title:{ title}</h1>
    <h5>description: { description}</h5>
  </div>

)
}
 

export default App
