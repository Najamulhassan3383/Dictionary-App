import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "../reducers/example";

export const store = configureStore({
  reducer: { exampleReducer },
});
