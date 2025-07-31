import React from 'react'
import NavBar from "../components/NavBar.jsx";
import bg from '../image/bg.jpg';
const HomePage = () => {
  return (
    <>
      <NavBar />
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="font-mono text-blue-500 text-center py-3">
          Hey this is our Home page thank you for visiting us😌
        </h1>
      </div>
    </>
  )
}

export default HomePage