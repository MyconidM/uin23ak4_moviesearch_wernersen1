import { useState } from "react";

export default function MovieCard(props) {
    const [readMore, setReadMore] = useState(Array(props.movies?.length).fill(false));

    const extraContent = (movie) => {
        return (
        <div>
            <p>{movie.Writer === 'N/A' ? null : "Writers: "+movie.Writer}</p>
            <p>{movie.Runtime === 'N/A' ? null : "Runtime: "+movie.Runtime}</p>
            <p>{movie.Plot === 'N/A' ? null : "Plot: "+movie.Plot}</p>
        </div>
        )
    };

    const toggleReadMore = (index) => {
        const newReadMore = [...readMore];
        newReadMore[index] = !newReadMore[index];
        setReadMore(newReadMore);
    };

    const PlaceholderImg = 'https://via.placeholder.com/300x450?text=No+Poster+Available';
    //https://stackoverflow.com/questions/53073691/react-fetch-from-external-api-function-on-button-click
    return (
        <>
        {props.movies?.map((movie, index) =>
            <div className="col moviecard align-text-center" key={index}>
            <img className="rounded-top imageSy center" src={movie.Poster === 'N/A' ? PlaceholderImg : movie.Poster} alt={movie.type}></img>
            <div className="text-box rounded-bottom">
                <h2>{movie.Title}</h2>
                <h5>{movie.Year === 'N/A' ? null : "Tear: "+movie.Year}</h5>
                <p>{movie.Genre === 'N/A' ? null : "Genre: "+movie.Genre}</p>
                <p>{movie.Director === 'N/A' ? null : "Director: "+movie.Director}</p>
                <p>{movie.Actors === 'N/A' ? null : "Actors "+movie.Actors}</p>
                <p>{movie.Awards === 'N/A' ? null : "Awards: "+movie.Awards}</p>
                {readMore[index] && extraContent(movie)}
                <span className="btn"><button className="rounded" onClick={() => toggleReadMore(index)}>{readMore[index] ? "Read Less" : "Read More"}</button></span>
            </div>
            </div>
        )}
        </>
    )
    }