import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import File from './components/file.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <File />
    </>
  )
}

export default App
