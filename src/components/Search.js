export default function Search(item) {
    return (
        <div className="col col-sm-4">
            <input className="form-control"
                value={item.value}
                onChange={(event) => item.setSearch(event.target.value)}
                placeholder="Søk på filmer...">
                    
                </input>
        </div>
    )
}