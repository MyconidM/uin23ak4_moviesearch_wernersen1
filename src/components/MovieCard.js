export default function MovieCard(props) {
    const movies = props.movies;
    const PlaceholderImg = 'https://via.placeholder.com/300x450?text=No+Poster+Available';
    return (
        <>
            {movies?.map((movie, index) => 
                <div className="col">
                    <img src={movie.Poster === 'N/A' ? PlaceholderImg : movie.Poster} alt={movie.type}></img>
                    <div>
                        <h2>{movie.Title}</h2>
                        <h5>{movie.Year}</h5>
                        <p></p>
                    </div>
                </div>    
            )}
        </>
    )
}