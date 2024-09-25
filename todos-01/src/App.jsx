import { useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([{

    title: "study",
    description: " go through some command line..."
  },
  {

    title: " time pass",
    description: " play chess ..."
  }
  ]

  )
  const addfunction = () => {
    setTodos([...todos, {
      title: " market",
      description: " bring vegetables, fruit"
    }
    ])
  }

  return (
    <div>

      <button onClick={addfunction}> Add todos</button>
      <Displaytodo />
    </div>
  )
}

function Displaytodo({ title, description }) {
  return (
    <div>
      <div>

        <input
          type='text'
          placeholder='title'>
      
        </input>
      </div>
      <div>

        <input
          type='text'
          placeholder='description'>

        </input>
      </div>
             <button>submit </button>
    </div>

  )
}


export default App
