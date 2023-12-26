import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hello />
    </div>
  )
}

export default App
