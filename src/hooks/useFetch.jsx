import { useEffect, useContext } from 'react'
import { DataContext } from '../context/DataContext'

const useFetch = (url) => {
  const { setData } = useContext(DataContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const result = await response.json()
        setData(result.results || result) // Ajusta según la estructura de la API de TMDB
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [url, setData])
}

export default useFetch
