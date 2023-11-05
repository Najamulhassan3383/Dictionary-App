import { configureStore } from "@reduxjs/toolkit";


import ThemeSlice from "./ThemeSlice";
import FetchSlice from "./DataFetching/FetchSlice";

export const store = configureStore({
  reducer: {
    theme: ThemeSlice,
    fetchData: FetchSlice,
  },
});
