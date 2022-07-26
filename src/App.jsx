import { useState } from 'react'
import './App.css'

import {Navbar} from "./components/Navbar/Navbar.jsx";

function App() {
  const [isLogin,setIsLogin] = useState(true);

  return (
    <div className="App">
      <Navbar isLogin={isLogin}/>
    </div>
  )
}

export default App
