export default function Search(item) {
    return (
            <form className="col col-sm-4">
                <input className="form-control"
                    type="search"
                    value={item.value}
                    onChange={(event) => item.setSearch(event.target.value)}
                    placeholder="Søk på filmer...">
                </input>
            </form>
    )
}