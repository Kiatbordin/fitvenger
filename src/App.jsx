import { useState } from 'react'
import './App.css'
import { CardContainer } from './components/CardContainer/CardContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Board } from './pages/Board.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Footer } from './components/Footer/Footer.jsx';

function App() {

  const [isLogin,setIsLogin] = useState(true);

  return (
    <div className="App">
      <CardContainer />
      <Board />
      <BrowserRouter>
        <Navbar isLogin={isLogin}/>
        <main>
          <Routes>
            <Route path="/" element={<Board isLogin={isLogin}/>}>
            </Route>
          </Routes>
        </main>
        <Footer isLogin={isLogin}/>
      </BrowserRouter>
    </div>
  )
}

export default App
