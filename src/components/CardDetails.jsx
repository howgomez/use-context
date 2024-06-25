import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const CardDetails = () => {
  const { id } = useParams()
  const { data } = useContext(DataContext)

  const movie = data?.find((movie) => movie.id === parseInt(id))

  if (!movie) return <div>Movie not found</div>

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      {/* Agrega más detalles según sea necesario */}
    </div>
  )
}

export default CardDetails
