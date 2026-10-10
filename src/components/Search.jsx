

const Search = ({ searchTerm, setsearchTerm }) => {
  return (
    <div className="search text-white text-3xl">
        <div>
            <img src="./Vector-Search.svg" alt="Search Icon" />

            <input 
                type="text" 
                placeholder="Search for a movie..."
                value={searchTerm}
                onChange={(e) => setsearchTerm(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search