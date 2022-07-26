import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import {Navbar} from "./components/Navbar/Navbar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <h1> My Header </h1>
      <h1> My Header 2</h1>
      <h1> My Header 3</h1>
    </div>
  )
}

export default App
