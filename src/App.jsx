import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
import Navbar from './components/Navbar'
import Home from './pages/home'

import { AuthContextProvider } from './context/authContext'

const App = () => {
  return (
    <BrowserRouter>

      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </AuthContextProvider>

    </BrowserRouter>
  )
}

export default App
