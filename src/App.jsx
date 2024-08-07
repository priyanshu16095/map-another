import React from 'react'
import './css/components.css'
import './css/pages.css'
import Navbar from './components/Navbar'
// import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { homeRoute, loginRoute, signupRoute } from './constants/routeConstants'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={homeRoute} element={<Home />} />
          <Route path={loginRoute} element={<Login />} />
          {/* <Route path={signupRoute} element={<Signup />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
