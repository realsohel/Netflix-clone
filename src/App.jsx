import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
import Navbar from './components/Navbar'
import Home from './pages/home'

import { AuthContextProvider } from './context/authContext'
import Account from './pages/account'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <BrowserRouter>

      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/account" element={<ProtectedRoute><Account/></ProtectedRoute> }/>
        </Routes>
      </AuthContextProvider>

    </BrowserRouter>
  )
}

export default App
