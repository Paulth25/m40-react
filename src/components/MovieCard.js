import react from "react";
// below is passing props from the search term function/command - also creating movie as a key
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type }  }) =>{//props deconstructed

        return (
    <div className = 'movie' key = {imdbID}>
    <div>
    <p>{Year}</p>
    </div>

    <div>
        <img src = {Poster !== 'N/A' ? Poster: 'https://via.placeholder.com/400'} />
    </div>

    <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
    </div>

    </div>
    
)}

export default MovieCard;