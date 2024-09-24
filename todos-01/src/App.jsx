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

  return (
    <>
  <Buttoncomponent/>
  <button onClick={()=>{
    setTodos([...todos, {
      title:" market",
      description:" bring vegetables, fruit"
    }
  ]);
  }} title={title} description={description}> Add todos</button>
  

    </>
     )
      }
  function Buttoncomponent({title, description}){
    return(
      <>
     <h1>{title}</h1>
     <h5> {description}</h5>
      </>
    )

  }

export default App
