import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from "./Heading"
import Search from "./Search"
import '../css/main.css';
//import { data } from "autoprefixer"

//https://www.youtube.com/watch?v=jc9_Bqzy2YQ
export default function Main({child}) {

    const [movies, setMovies] = useState([])
    const [movieInfo, setMoviesInfo] = useState([])
    const [search, setSearch] = useState('james+bond')
    

    const getMovie = async () =>{
        const url = `http://www.omdbapi.com/?s=${search}&type=movie&apikey=3a5e4b26`;

        const response = await fetch(url).then(response => response.json());
        setMovies(response.Search)

        return response
    }

    const getMovieInfo = async () => {
        const { Search: search} = await getMovie();
        const InfoPromise = search.map(async item => {
            const url = `http://www.omdbapi.com/?i=${item.imdbID}&type=movie&apikey=3a5e4b26`
            const response = await fetch(url);
                return await response?.json(); 
            
        });
       
        const movieInfo = await Promise?.all(InfoPromise);
            setMoviesInfo(movieInfo);
    }
        

    useEffect(() => {
           if (search.length >= 3) {
          getMovieInfo();
        }
        console.log(movieInfo)
      }, [search]);

      //https://getbootstrap.com/docs/5.0/layout/grid/
      //https://getbootstrap.com/docs/4.0/utilities/spacing/
      //https://stackoverflow.com/questions/49989984/loop-fetch-in-reactjs
    return (
       <>
            <header className="head-style text-align-center">
                <div className="row d-flex align-items-left mt-4 mb-4 p-3">
                    <Heading  heading="Film søk"/>
                    <Search search={search} setSearch={setSearch}/>
                </div>
            </header>
            <main>
                <article className='d-flex container'>
                    <div className='row'>
                        <MovieCard movies={movieInfo}/>
                    </div>
                </article>
            </main>
        </> 
    )

}