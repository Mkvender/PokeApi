import React from "react"
import { PokemonItemProps } from "./types"

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {
  const { name, weight, height, sprites } = pokemon

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mt-5">
        Nombre:
        {name.toUpperCase()}
      </h2>
      <p className="text-2xl mt-5 mb-5">Peso: {weight / 10} Kg</p>
      <p className="text-2xl mt-5 mb-5">Altura: {height / 10} m</p>
      <img
        src={sprites.front_default}
        alt={name}
        title={`Parte delatera de ${name}`}
      />
      <img
        src={sprites.back_default}
        alt={name}
        title={`Parte trasera de${name}`}
      />
    </div>
  )
}

export default PokemonItem
