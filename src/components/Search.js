export default function Search(item) {
    
    return (
            <div className="col col-sm-4 serch">
                <input className="form-control mt-2"
                    type="search"
                    value={item.value}
                    onChange={(event) => item.setSearch(event.target.value)}
                    placeholder="Søk på filmer...">
                </input>
            </div>
    )
}