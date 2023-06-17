import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { BooksSlice } from "./books.slice";
import { BestSellerSlice } from "./bestsellers.slice";
import { bookavailabilitySlice } from "./bookavailability.slice";
import { Historyslice } from "./history.slice";
import { StoreFairsSlice } from "./storefairs.slice";

export const store = configureStore({
  reducer: {
    [BooksSlice.name]: BooksSlice.reducer,
    [BestSellerSlice.name]: BestSellerSlice.reducer,
    [bookavailabilitySlice.name]: bookavailabilitySlice.reducer,
    [Historyslice.name]: Historyslice.reducer,
    [StoreFairsSlice.name]: StoreFairsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector<RootState>;
