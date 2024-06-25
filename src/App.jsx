import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataProvider } from './context/DataContext'
import useFetch from './hooks/useFetch'
import CardDetails from './components/CardDetails'
import MovieList from './components/MovieList'
import './App.css'

const App = () => {
  useFetch('https://api.themoviedb.org/3/movie/popular?api_key=dffeffbf7be3182ad0f191c3f7edea22')

  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/movies/:id" element={<CardDetails />} />
          <Route path="/" element={<MovieList />} />
        </Routes>
      </Router>
    </DataProvider>
  )
}

export default App
