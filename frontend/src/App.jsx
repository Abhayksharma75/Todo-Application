import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CreateTodo/>
      <Todos todos={[
        {
          title: "Go to Gym",
          description: "5-7",
          completed: true,
        }
      ]}>

      </Todos>
    </div>
  )
}

export default App
