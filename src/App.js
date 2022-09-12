import { useEffect, useState } from "react";    // adding state and use effects
import SearchIcon from "./search.svg"
import "./App.css"
import MovieCard from "./components/MovieCard";
//ce8d56d4

const API_URL = 'http://omdbapi.com?apikey=ce8d56d4'    //api link
const App = () => {

const[searchTerm, setSearchTerm] = useState("")
const [movies, setMovies] = useState([])

  useEffect(() =>{
    searchFilms('Batman')
  },[])

  const searchFilms = async (title) =>{
  const req = await fetch(`${API_URL}&s=${title}`)   //passing in parameters for url and search by title
    const res = await req.json()
      // console.log(res.Search)
      setMovies(res.Search)
  }
  return(
    <div className="app">
      <h1>Paul's Movie DataBase</h1>
      
      <div className="Search">
    <input
        placeholder= 'Search for a Movie'
        value ={searchTerm}
        onChange ={(event) => setSearchTerm(event.target.value)}
        />
        <img
        src={SearchIcon}
        alt="search"
        onClick={() => searchFilms(searchTerm)}
        />
        </div>
        

        
        {movies?.length > 0 
        ?(   // if movie length is greater than zero(0)
          <div class="row">
          <div className = 'Container' >
            {movies.map((movie) => (
              <MovieCard movie = {movie} />
            ))}
        </div></div>
        ) :(
          <div className = 'empty' >
          <h2>No Movies was found</h2>
          </div>
        )}
        </div>
        )};


export default App;