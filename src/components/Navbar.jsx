import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ search, setSearch, onSearchSubmit }) => {

  const handleInputChange = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      onSearchSubmit();
    }
    else {
      setSearch(e.target.value)
    }
  };

  return (
    <nav className="w-full fixed bg-black flex justify-between items-center gap-16 py-3 px-10 left-1/2 translate-x-[-50%] backdrop-blur-md bg-opacity-60 text-white shadow-lg z-10">
      <ul className="flex gap-8 text-3xl">
        <li className="relative group cursor-pointer">
          <Link to="/">Home</Link>
          <span className='absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-red-500 to-yellow-500 transition-all duration-300 group-hover:w-full'></span>
        </li>
        <li className="relative group cursor-pointer">
          <Link to="/favorites">Favorites</Link>
          <span className='absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-yellow-500 to-green-500 transition-all duration-300 group-hover:w-full'></span>

        </li>
        <li className="relative group cursor-pointer">
          <Link to="/watch">Watch</Link>
          <span className='absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 transition-all duration-300 group-hover:w-full'></span>
        </li>
      </ul>
      <div className='absolute left-1/2 transform -translate-x-1/2 rounded border-2 border-amber-50 '>
        <input type='text' placeholder='Search for Movies' value={search} className='bg-gray-800 rounded-md w-[30vw]' onKeyDown={handleInputChange} onChange={handleInputChange} />
        <button className='rounded border-2 border-amber-50 cursor-pointer ' onClick={handleInputChange} >Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
