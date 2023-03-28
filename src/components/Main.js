import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'

export default function Main() {

    const [movies, setMovies] = useState([])
    //const [filter, setFilter] = useState("All")
    //const [resultat, setResultat] = useState([])
    //const navCat = [...new Set(movies.map((e) => e.source.Title))]

    const getMovie = async() =>{
        const url = 'http://www.omdbapi.com/?s=james+bond&type=movie&apikey=3a5e4b26';
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.articles)
        //setResultat(movies?.filter(items => items?.source?.Title === filter))

        console.log(data)
        setMovies(data.Search)
    }

    useEffect(() =>{
        getMovie()
    },[])

    return (
        <article className='container text-center'>
            <div className='row'>
                <MovieCard movies={movies} />
            </div>
        </article>
    )

}