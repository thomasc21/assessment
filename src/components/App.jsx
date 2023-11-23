

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import ErrorPage from './ErrorPage'
import DetailsPcard from './DetailsPCard'



function app(){
  return{
    render(){
      return(
      <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/detail/:id" element={<DetailsPcard  />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </Router>
  </React.StrictMode>
      )
    }
  }
}

export default app
