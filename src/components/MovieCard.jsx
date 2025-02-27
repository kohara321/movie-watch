import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div id='movie-card' className='flex flex-col justify-center items-center border-2 [border-image:linear-gradient(to_top_right,#5dba7f,#FCF09A,red,purple,#71CAEE)_1] cursor-pointer'>
      <img src={movie.imageUrl} alt={movie.title} />
      <h1 className='text-white text-3xl' >{movie.title}</h1>
      <p className='text-white text-lg'>{movie.description}</p>
    </div>
  )
}

export default MovieCard