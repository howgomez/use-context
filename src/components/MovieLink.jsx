import { Link } from 'react-router-dom'

const MovieLink = ({ movie }) => (
  <Link key={movie.id} to={`/movies/${movie.id}`}>
    {movie.title}
  </Link>
)

export default MovieLink
