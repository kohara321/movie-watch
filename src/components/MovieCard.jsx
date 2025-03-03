import React from 'react'

const MovieCard = ({ title, released, plot, ratings, director, actors, poster, genre }) => {
  return (
    <div id='movie-card' className='flex flex-col justify-center items-center border-2 [border-image:linear-gradient(to_top_right,#5dba7f,#FCF09A,red,purple,#71CAEE)_1] cursor-pointer'>
      <img src={poster} alt={title} />
      <h1 className='text-white text-3xl' ><strong>{title}</strong></h1>
      <p className='text-white text-lg'>{director}</p>
      <p className='text-white text-lg'>Stars: {actors}</p>
      <p className='text-white text-lg'>{released}</p>
      <p className='text-white text-lg'>{genre}</p>
      <p className='text-white text-lg'>{plot}</p>
      <div className='flex min-h-[2.5rem] items-center gap-10'>
        {ratings && ratings.map((rating, index) => (
          <div key={index} >
            <p className='text-white text-lg'>{rating.Source}: </p>
            <p className='text-white text-lg'>{rating.Value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieCard