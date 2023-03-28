
export default function MovieCard(props) {
    return (
        <>
            {props.movies?.map((movie, index) => 
                <div className="d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt={movie.type}></img>
                    <p>{movie.Plot}</p>
                </div>    
            )}
        </>
    )
}