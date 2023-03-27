import { useEffect, useState } from "react"
import CatNav from "./CatNav"
import MovieCard from "./MovieCard"

export default function Main() {

    const [movie, setMovie] = useState([])
    const [filter, setFilter] = useState("All")
    const [resultat, setResultat] = useState([])
    //const navCat = [...new Set(movie.map((e) => e.source.Title))]

    const getMovie = async() =>{
        const response = await fetch('http://www.omdbapi.com/?t=james+bond&plot=full&apikey=3a5e4b26')
        const data = await response.json()
        setMovie(data.articles)
        setResultat(movie?.filter(items => items?.source?.Title === filter))
    }

    console.log(resultat)

    useEffect(() =>{
        getMovie()
    },[filter])
    
    /*const handleFilter = (event)=>{
        console.log(event.target.innerHTML)
        setFilter(event.target.innerHTML)
    }

    const handleReset =() =>{
        setFilter("All")
    }*/

    return (
        <>
            
            {resultat.length <= 0 ? movie?.map((item, index) =>(
                <MovieCard key={index} img={item.poster} title={item.title} ingress={item.plot} />
            )) : resultat?.map((item, index) =>(
                <MovieCard key={index} img={item.poster} title={item.title} ingress={item.plot} />
            )) }
        </>
    )

}