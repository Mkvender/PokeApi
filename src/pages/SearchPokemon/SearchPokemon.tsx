import React, { useEffect, useState } from "react"

import { useLazyGetPokemonByNameQuery } from "../../services/pokemon"
import Loading from "../../components/Loading/Loading"
import PokemonItem from "../../components/PokemonItem/PokemonItem"
import { useDebounce } from "@uidotdev/usehooks"

const SearchPokemon: React.FC = () => {
  const [searchParam, setSearchParam] = useState("")
  const debouncedSearchTerm = useDebounce(searchParam, 300)

  const [getPokemon, { data: pokemonData, isFetching, isError }] =
    useLazyGetPokemonByNameQuery()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam(e.target.value)
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      getPokemon(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm, getPokemon])

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-5">Search Pokemon</h1>
      <label className="mt-5">
        Pokemon name or number:
        <input
          className="border border-neutral-950 mt-2"
          type="text"
          placeholder="Enter Pokemon name or number"
          value={searchParam}
          onChange={handleChange}
        />
      </label>
      {isFetching && <Loading />}
      {(isError || !pokemonData) && <p>Pokemon not found</p>}
      {pokemonData && <PokemonItem pokemon={pokemonData} />}
    </div>
  )
}

export default SearchPokemon
