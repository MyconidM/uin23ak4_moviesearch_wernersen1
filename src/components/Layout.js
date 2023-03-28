import { useState } from "react";
import Heading from "./Heading";
import Search from "./Search";


export default function Layout({children}){
    const [search, setSearch] = useState('')
    return(
        <div className="container">
            <header>
                <div className="row d-flex align-items-center mt-4 mb-4">
                    <Heading  heading="Film søk"/>
                    <Search search={search} setSearch={setSearch}/>
                </div>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}