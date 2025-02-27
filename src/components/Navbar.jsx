import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full fixed bg-black flex justify-between items-center gap-16 py-3 px-10 left-1/2 translate-x-[-50%] backdrop-blur-md bg-opacity-60 text-white shadow-lg z-10'>

        <ul className='flex gap-8 text-xl'>
            <li className="relative group cursor-pointer" >
                <h1>Home</h1>
                <span className='absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full'></span>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
