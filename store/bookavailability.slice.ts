import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from ".";

export const bookAvailabilityList = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/booksavailabilitydata/bookAvailabilityList",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    var data;
    try {
      const response = await axios({
        url: process.env.NEXT_PUBLIC_ADMIN_URL + "bookavailability.php",
        method: "POST",
      });
      data = response.data;
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue({ msg: error.response.data.msg });
    }
  }
);

export const bookAvailabilityFilter = createAsyncThunk<
  any,
  {
    price: string;
    available_for: string;
  },
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/booksavailabilitydata/bookAvailabilityFilter",
  async (payload, { fulfillWithValue, rejectWithValue, getState }) => {
    var data;
    try {
      const formData = new FormData();
      formData.append("price", payload.price);
      formData.append("available_for", payload.available_for);
      const response = await axios({
        url: process.env.NEXT_PUBLIC_STAFF_URL + "bookavailabilityfilter.php",
        method: "POST",
        data: formData,
      });
      data = response.data;
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue({ msg: error.response.data.msg });
    }
  }
);

const BooksAvailabilityAdapter = createEntityAdapter<any>({
  selectId: (book) => book.id,
});

export const bookavailabilitySlice = createSlice({
  name: "booksavailabilitydata",
  reducers: {},
  initialState: BooksAvailabilityAdapter.getInitialState<{
    pending: boolean;
    error: string | null;
  }>({
    pending: false,
    error: null,
  }),
  extraReducers: {
    [bookAvailabilityList.pending.toString()]: (state, action) => {
      state.pending = true;
    },
    [bookAvailabilityList.fulfilled.toString()]: (state, action) => {
      state.pending = false;
      BooksAvailabilityAdapter.setMany(state, action.payload);
    },
    [bookAvailabilityList.rejected.toString()]: (state, action) => {
      state.pending = false;
      state.error = action.payload?.msg;
    },

    [bookAvailabilityFilter.pending.toString()]: (state, action) => {
      state.pending = true;
    },
    [bookAvailabilityFilter.fulfilled.toString()]: (state, action) => {
      state.pending = false;
      BooksAvailabilityAdapter.setMany(state, action.payload);
    },
    [bookAvailabilityFilter.rejected.toString()]: (state, action) => {
      state.pending = false;
      state.error = action.payload?.msg;
    },
  },
});

export const booksavailabilitySelector =
  BooksAvailabilityAdapter.getSelectors<RootState>(
    (state) => state.booksavailabilitydata
  );
