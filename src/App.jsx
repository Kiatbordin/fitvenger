import { useState } from 'react'
import './App.css'

import {Navbar} from "./components/Navbar/Navbar.jsx";
import { Activities } from './components/Activities/Activities.jsx';
import { Footer } from './components/Footer/Footer.jsx';

function App() {
  const [isLogin,setIsLogin] = useState(true);

  return (
    <div className="App">
      <Navbar isLogin={isLogin}/>
      <Activities />
      <Footer isLogin={isLogin}/>
    </div>
  )
}

export default App
