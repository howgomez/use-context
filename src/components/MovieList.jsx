import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import MovieLink from './MovieLink'

const MovieList = () => {
  const { data } = useContext(DataContext)

  return (
    <div>
      {data?.map((movie) => (
        <MovieLink key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
