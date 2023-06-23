import { configureStore } from "@reduxjs/toolkit";
import { useSelector,TypedUseSelectorHook } from "react-redux";
import { BooksSlice } from "./books.slice";
import { CartSlice } from "./cart.slice";

export const store = configureStore({
  reducer: {
    [BooksSlice.name]:BooksSlice.reducer,
    [CartSlice.name]:CartSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
