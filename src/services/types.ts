export type PokemonItemShorted = {
  name: string
  url: string
}

export type GetPokemonListResponseQuery = {
  species: {
    name: string
  }
  name: string
  sprites: {
    front_shiny: string
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny_female: string
  }
  results: Array<PokemonItemShorted>
  weight: number
  height: number
}

export type GetPokemonResponseQuery = {
  name: string
  weight: number
  height: number
  sprites: {
    front_shiny: string
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny_female: string
  }
}
