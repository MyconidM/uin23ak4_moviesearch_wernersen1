import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from "./Heading"
import Search from "./Search"
import '../css/main.css';

import axios from "axios";

//https://www.youtube.com/watch?v=jc9_Bqzy2YQ
export default function Main() {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('James Bond')

    useEffect(() => {
    const getMovie = async() =>{
        const { data } = await axios.get(
            `http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_API_KEY}`
          );
        //const response = await fetch(url);
        //const data = await response.json();
        setMovies(data.articles)
        //setResultat(movies?.filter(items => items?.source?.Title === filter))

        console.log(data)
        if (data.Search) {
            setMovies(data.Search)
        } 
    }

    /*useEffect(() => {
        if (search.length >= 3) {
          getMovie(search);
        }
      }, [search]);*/

    getMovie(search);
    }, [search]);

      //https://getbootstrap.com/docs/5.0/layout/grid/
      //https://getbootstrap.com/docs/4.0/utilities/spacing/
    return (
       <>
            <header className="head-style text-align-center">
                <div className="row d-flex align-items-left mt-4 mb-4 p-3">
                    <Heading  heading="Film søk"/>
                    <Search search={search} setSearch={setSearch}/>
                </div>
            </header>
            <main>
                <article className='container text-center'>
                    <div className='row'>
                        <MovieCard movies={movies} setMovies={setMovies}/>
                        {Search.Response = false ? <p>Filmen finnes ikke</p> : null}
                    </div>
                </article>
            </main>
        </> 
    )

}