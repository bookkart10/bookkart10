import { configureStore } from "@reduxjs/toolkit";
import { useSelector,TypedUseSelectorHook } from "react-redux";
import { BooksSlice } from "./books.slice";
// import { BestSellerSlice } from "./bestsellers.slice";
// import { bookavailabilitySlice } from "./bookavailability.slice";
// import { Historyslice } from "./history.slice";
// import { StoreFairsSlice } from "./storefairs.slice";

export const store = configureStore({
  reducer: {
    [BooksSlice.name]:BooksSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
