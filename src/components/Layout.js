export default function Layout({children}){
    return(
        <div className="container">
            <header>
                <h1>Film søk</h1>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}