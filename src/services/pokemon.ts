import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { GetPokemonResponseQuery, GetPokemonListResponseQuery } from "./types"

export const pokemonService = createApi({
  reducerPath: "pokemonService",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    //metodos dentro de esta misma solicitud
    getPokemonByList: builder.query<GetPokemonListResponseQuery, number>({
      query: (number) => `pokemon?offset=0&limit=${number}`,
    }),
    getPokemonByName: builder.query<GetPokemonResponseQuery, string>({
      query: (reference) => `pokemon/${reference}/`,
    }),
  }),
})

export const {
  useGetPokemonByListQuery,
  useGetPokemonByNameQuery,
  useLazyGetPokemonByNameQuery,
} = pokemonService
