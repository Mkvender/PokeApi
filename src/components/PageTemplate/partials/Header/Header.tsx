import React from "react"
import MainTitle from "/mainIcon.png"
import { PATHS } from "../../../../routes/paths"

import pokedexTitle from "/Pokedex.png"
import pokeSearch from "/pokesearch.png"
import { Link } from "react-router-dom"

const Header: React.FC = () => {
  return (
    <header className="bg-red-500">
      <nav className="flex justify-around items-center mt-5">
        <Link to={PATHS.HOME}>
          <img src={MainTitle} alt="PokeApp title" />
        </Link>
        <Link to={PATHS.POKEMON_LIST}>
          <img className="w-32" src={pokedexTitle} alt="PokeApp title" />
        </Link>
        <Link to={PATHS.SEARCH_POKEMON}>
          <img className="w-32" src={pokeSearch} alt="PokeApp title" />
        </Link>
      </nav>
    </header>
  )
}

export default Header
