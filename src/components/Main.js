export default function Main() {
    const [Movie, setMovie] = useState([])
    const [filter, setFilter] = useState("All")
    const [resultat, setResultat] = useState([])
    const navCat = [...new Set(Movie.map((e) => e.source.name))]


    const getMovie = async() =>{
        const response = await fetch(': http://www.omdbapi.com/?i=tt3896198&apikey=3a5e4b26')
        const data = await response.json()
        setMovie(data.articles)
        setResultat(Movie?.filter(items => items?.source?.name === filter))
    }

    console.log(resultat)
    return
}