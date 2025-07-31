import React from 'react'
import Navbar from '../components/Navbar'
import bg from '../image/bg.jpg';
const HomePage = () => {
  return (
    <>
      <Navbar />
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