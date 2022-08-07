import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login.jsx';
import { Board } from './pages/Board.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { CreateActivity } from './pages/CreateActivity.jsx';
import { EditActivity } from './pages/EditActivity.jsx';
import { CreateProFile } from './pages/CreateProfile';

function App() {

  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (isAllow) => {
    isAllow ? setIsLogin(true) : setIsLogin(false);
    // alert(isLogin);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isLogin={isLogin} />
        <main>
          <Routes>
            <Route path="/login" element={<Login isLogin={isLogin} handleLogin={handleLogin} />}>
            </Route>
            <Route path="/" element={<Board isLogin={isLogin} />}>
            </Route>
            <Route path="/create" element={<CreateActivity />}>
            </Route>
            <Route path="/edit" element={<EditActivity />}>
            </Route>
            <Route path="/register" element={<CreateProFile />}>
            </Route>
          </Routes>
        </main>
        <Footer isLogin={isLogin} />
      </BrowserRouter>
    </div>
  )
}

export default App
