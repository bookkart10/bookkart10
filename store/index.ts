import { configureStore } from "@reduxjs/toolkit";
import { readlistSlice } from "./readlist.slice";
import { useSelector } from "react-redux";
import { bookfairSlice } from "./bookfair.slice";
import { bookFilter } from "./bookfilters.slice";
import { bookavailSlice } from "./bookavail.slice";

export const store = configureStore({
  reducer: {
    [readlistSlice.name]: readlistSlice.reducer,
    [bookfairSlice.name]: bookfairSlice.reducer,
    [bookavailSlice.name]: bookavailSlice.reducer,
    [bookFilter.name]: bookFilter.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector = useSelector<RootState>



