export default function CatNav({navCat, handleFilter, handleReset}){
    return(
        <ul>
            {navCat.map((item, index)=>(
                <li key={index}><button onClick={handleFilter}>{item}</button></li>
            ))}
        </ul>
    )
}