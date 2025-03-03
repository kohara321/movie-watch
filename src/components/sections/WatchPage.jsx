import React from 'react'
import MovieCard from '../MovieCard'

const WatchPage = ({ movies }) => {

  return (
    <div className='min-h-screen w-full flex justify-center items-center text-center gap-[10%] border-2 [border-image:linear-gradient(to_top,#83C59B,#FCF09A,red,purple,#71CAEE)_1] bg-black'>
      <MovieCard
        title={movies.Title}
        released={movies.Released}
        plot={movies.Plot}
        ratings={movies.Ratings}
        director={movies.Director}
        actors={movies.Actors}
        poster={movies.Poster}
        genre={movies.Genre}
      />
    </div>
  )
}

export default WatchPage
