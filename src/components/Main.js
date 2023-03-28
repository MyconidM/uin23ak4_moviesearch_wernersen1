import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from "./Heading"
import Search from "./Search"

export default function Main() {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    //const [filter, setFilter] = useState("All")
    //const [resultat, setResultat] = useState([])
    //const navCat = [...new Set(movies.map((e) => e.source.Title))]

    const getMovie = async() =>{
        const url = `http://www.omdbapi.com/?s=${search}&type=movie&apikey=3a5e4b26`;
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.articles)
        //setResultat(movies?.filter(items => items?.source?.Title === filter))

        console.log(data)
        if (data.Search) {
        setMovies(data.Search)
        } 
    }

    useEffect(() =>{
        getMovie(search)
    },[search])

    return (
       <>
            <header>
                <div className="row d-flex align-items-center mt-4 mb-4">
                    <Heading  heading="Film søk"/>
                    <Search search={search} setSearch={setSearch}/>
                </div>
            </header>
            <main>
                <article className='container text-center'>
                    <div className='row'>
                        <MovieCard movies={movies} />
                    </div>
                </article>
            </main>
        </> 
    )

}