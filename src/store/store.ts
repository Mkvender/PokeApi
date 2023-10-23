import { configureStore } from "@reduxjs/toolkit"
import { pokemonService } from "../services/pokemon"

export const store = configureStore({
  reducer: {
    [pokemonService.reducerPath]: pokemonService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonService.middleware),
})
