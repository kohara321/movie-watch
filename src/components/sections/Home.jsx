import React from 'react'

const Home = () => {
  return (
    <div id='home' className='min-h-screen w-full relative flex flex-col justify-center items-center text-center border-2 [border-image:linear-gradient(to_top,#83C59B,#FCF09A,red,purple,#71CAEE)_1] bg-black' >
      <h1 className='text-7xl text-white'>Welcome to Movie <span className='text-red-500'>Watch!</span></h1>
      <p className='text-4xl text-white'>Let's get started!</p>
    </div>
  )
}

export default Home
