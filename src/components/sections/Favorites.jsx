import React from 'react'
import MovieCard from '../MovieCard'

const Favorites = ({ movies }) => {

  return (
    <div className='min-h-screen w-full relative flex flex-col justify-center items-center text-center border-2 [border-image:linear-gradient(to_top,#83C59B,#FCF09A,red,purple,#71CAEE)_1] bg-black'>
      <h1 className='text-white'>Favorites Page</h1>
      {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  )
}

export default Favorites
