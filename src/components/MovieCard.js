export default function MovieCard(props) {
    //https://medium.com/free-code-camp/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7
    const PlaceholderImg = 'https://via.placeholder.com/300x450?text=No+Poster+Available';
    return (
        <>
            {props.movies?.map((movie, index) => 
                <div className="col moviecard align-text-center">
                    <img className="rounded-top imageSy" src={movie.Poster === 'N/A' ? PlaceholderImg : movie.Poster} alt={movie.type}></img>
                    <div className="text-box rounded-bottom">
                        <h2>{movie?.Title}</h2>
                        <h5>{movie.Year === 'N/A' ? null : movie.Year}</h5>
                        <p>{movie.Genre === 'N/A' ? null : movie.Genre}</p>
                        <p>{movie.Director === 'N/A' ? null : movie.Director}</p>
                        <p>{movie.Actors === 'N/A' ? null : movie.Actors}</p>
                        <p>{movie.Awards === 'N/A' ? null : "Awards: "+movie.Awards}</p>
                        <span className="btn"><button className="rounded">Les meres</button></span>
                    </div>
                </div>    
            )}
        </>
    )
}