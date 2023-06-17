import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from ".";

export const bestSellers = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/BestSellerBooks/bestSellers",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    var data;
    try {
      const response = await axios({
        url: process.env.NEXT_PUBLIC_ADMIN_URL + "bestsellerbooks.php",
        method: "POST",
      });
      data = response.data;
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue({ msg: error.response.data.msg });
    }
  }
);

const BestSellerAdapter = createEntityAdapter<any>({
  selectId: (book) => book.any,
});

export const BestSellerSlice = createSlice({
  name: "BestSellers",
  reducers: {},
  initialState: BestSellerAdapter.getInitialState<{
    pending: boolean;
    error: string | null;
  }>({
    pending: false,
    error: null,
  }),
  extraReducers: {
    [bestSellers.pending.toString()]: (state, action) => {
      state.pending = true;
    },
    [bestSellers.fulfilled.toString()]: (state, action) => {
      state.pending = false;
      BestSellerAdapter.setMany(state, action.payload);
    },
    [bestSellers.rejected.toString()]: (state, action) => {
      state.pending = false;
      state.error = action.payload?.msg;
    },
  },
});

export const BestSellerSelector = BestSellerAdapter.getSelectors<RootState>(
  (state) => state.BestSellers
);
