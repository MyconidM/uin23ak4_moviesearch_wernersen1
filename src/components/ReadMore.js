
export default function ReadMore({movie}) {
    const PlaceholderImg = 'https://via.placeholder.com/300x450?text=No+Poster+Available';
    return (
        <>
           
                <div className="">
                    <img className="rounded-top" src={movie.Poster === 'N/A' ? PlaceholderImg : movie.Poster} alt={movie.type}></img>
                    <div className="text-box rounded-bottom">
                        <h2>{movie?.Title}</h2>
                        <h5>{movie.Year === 'N/A' ? null : movie.Year}</h5>
                        <p>{movie.Genre === 'N/A' ? null : movie.Genre}</p>
                        <p>{movie.Director === 'N/A' ? null : movie.Director}</p>
                        <p>{movie.Actors === 'N/A' ? null : movie.Actors}</p>
                        <p>{movie.Awards === 'N/A' ? null : "Awards: "+movie.Awards}</p>
                        <p>{movie.Plot === 'N/A' ? null : movie.Plot}</p>
                    </div>
                </div>    
            
        </>
    )
}