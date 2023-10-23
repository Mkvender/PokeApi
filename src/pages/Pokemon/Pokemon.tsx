import React from "react"
import { useParams } from "react-router-dom"
import { useGetPokemonByNameQuery } from "../../services/pokemon"
import Loading from "../../components/Loading/Loading"
import PokemonItem from "../../components/PokemonItem/PokemonItem"

const Pokemon: React.FC = () => {
  const { id = "" } = useParams()

  const { data, isFetching, isError } = useGetPokemonByNameQuery(id)
  console.log(data)

  if (id === "") {
    return <div>Not Found</div>
  }

  if (isFetching) {
    return <Loading />
  }

  if (isError || !data) {
    return <div>Failure to show you the pokemon</div>
  }

  return (
    <article>
      <h1 className="text-3xl text-center">
        Pokemon Description: {data.name.toUpperCase()}
      </h1>
      <PokemonItem pokemon={data} />
    </article>
  )
}

export default Pokemon
