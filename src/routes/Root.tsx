import React, { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PATHS } from "./paths.js"
import Loading from "../components/Loading/Loading"
import PageTemplate from "../components/PageTemplate/PageTemplate.js"

const Home = lazy(() => import("../pages/Home/Home"))
const Pokemon = lazy(() => import("../pages/Pokemon/Pokemon"))
const SearchPokemon = lazy(() => import("../pages/SearchPokemon/SearchPokemon"))
const PokemonList = lazy(() => import("../pages/PokemonList/PokemonList"))
const Error = lazy(() => import("../pages/NotFound/NotFound"))

const Root: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <PageTemplate>
        <Routes>
          <Route index element={<Home />} errorElement={<Error />} />
          <Route
            path={PATHS.POKEMON_DATA}
            element={<Pokemon />}
            errorElement={<Error />}
          />
          <Route path={PATHS.SEARCH_POKEMON} element={<SearchPokemon />} />
          <Route path={PATHS.POKEMON_LIST} element={<PokemonList />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </PageTemplate>
    </BrowserRouter>
  </Suspense>
)
export default Root
