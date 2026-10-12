import Search from "./components/Search";
import { useEffect, useState } from 'react'
import Spinner from './components/Spinner'
import MovieCard from "./components/MovieCard";
import { useDebounce } from "react-use"

const API_BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS ={
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`
  }
}

function App() {
  const [searchTerm, setsearchTerm] = useState("")
  const [errorMessage, seterrorMessage] = useState(null)
  const [movieList, setmovieList] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [debounceSearch, setdebounceSearch] = useState("")

  useDebounce(() => setdebounceSearch(searchTerm), 500, [searchTerm])

  const fetchMovie = async (query = "") => {
    setisLoading(true)
    seterrorMessage("")

    try{
      const endpoint = query
      ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`

      const response = await fetch(endpoint, API_OPTIONS)

      if(!response.ok){
        throw new Error("Fail to fetch movies")
      }
      const data = await response.json()
      console.log(data)

      if(data.Response === "False") {
        seterrorMessage(data.error || "Failed to fetch movies")
        setmovieList([])
        return
      }

      setmovieList(data.results || [])
    }catch(error){
      console.log(`Error fetching movies: ${error}`)
      seterrorMessage("Error fetching movies, please try again later")
    }finally{
      setisLoading(false)
    }
  }
  
  useEffect(() => {
    fetchMovie(debounceSearch)
  }, [debounceSearch])
  

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">

        <header>
          <img src="./hero-img.png" alt="Hero-Banner" />
          <h1>Enjoy Great <span className="text-gradient">Movies</span> Right Here!</h1>

      <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
        </header>

        <section className="all-movies">
          <h2 className="mt-[40px]">All Movies</h2>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {isLoading ? (
            <Spinner />
          ) : errorMessage ?(
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) =>(
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>

      </div>
      <h1  className="text-white">{searchTerm}</h1>
    </main>
  )
}

export default App