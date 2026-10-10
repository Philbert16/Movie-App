import Search from "./components/Search";
import { useState } from 'react'

function App() {
  const [searchTerm, setsearchTerm] = useState("lll")

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">

        <header>
          <img src="./hero-img.png" alt="Hero-Banner" />
          <h1>Enjoy Great <span className="text-gradient">Movies</span> Right Here!</h1>
        </header>

      </div>
      <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
      <h1  className="text-white">{searchTerm}</h1>

    </main>
  )
}

export default App