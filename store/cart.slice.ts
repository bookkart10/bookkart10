import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { Database } from "../types/supabase";

export type bookProps = Database["public"]["Tables"]["books"]["Row"] & {
  user: Database["public"]["Tables"]["user"]["Row"];
};

const BooksAdapter = createEntityAdapter<bookProps>({
  selectId: (book) => book.book_id,
});

export const CartSlice = createSlice({
  name: "cart",
  reducers: {
    addToCart: BooksAdapter.addOne,
    removeOne: BooksAdapter.removeOne,
  },
  initialState: BooksAdapter.getInitialState<{
    pending: boolean;
    error: null | string | any;
  }>({
    pending: false,
    error: null,
  }),
  extraReducers(builder) {},
});

export const CartSelector = BooksAdapter.getSelectors<RootState>(
  (state) => state.cart
);


export const {addToCart,removeOne} = CartSlice.actions