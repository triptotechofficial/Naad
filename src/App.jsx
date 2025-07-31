import React from 'react'
import HomePage from './pages/HomePage';
import {Routes,Route} from "react-router";
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  return (
    <div>
      
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Contact' element={<ContactPage/>}/>
      <Route path='/About' element={<AboutPage/>}/>
      <Route path='/Login' element={<LoginPage/>}/>
      <Route path='/Signup' element={<SignupPage/>}/>'
     
     </Routes>
    </div>
  )
}

export default App