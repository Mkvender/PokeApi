import React from "react"
import { Link } from "react-router-dom"
import Loading from "../../components/Loading/Loading"
import { useGetPokemonByListQuery } from "../../services/pokemon"
import ErrorPokedexList from "./partials/ErrorPokedexList/ErrorPokedexList"

const PokemonList: React.FC = () => {
  const { isError, isFetching, data } = useGetPokemonByListQuery(999)

  if (isFetching) {
    return <Loading />
  }

  if (isError || !data) {
    return <ErrorPokedexList />
  }

  return (
    <div className="flex flex-wrap justify-around flex-row">
      {data.results.map((pokemon, index) => (
        <div
          key={`id_${pokemon.name}`}
          className="width-1/4 m-10 border-solid border-4 border-teal-400"
        >
          <Link to={`/pokedex/${pokemon.name}`}>
            <h3>
              {index + 1}. {pokemon.name.toUpperCase()}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PokemonList
