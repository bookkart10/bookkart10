import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../utils/supabase";

export const bookfairThunk = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/bookfair/fetchIntialbookfair",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("event")
        .select("*");
      const data = response.data;
      console.log(data)
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);

export const postbookfair = createAsyncThunk<
  any,
  {
    event_id : string;
    name: string;
    organiser_deatils: string;
    organiser_deatils_id: string;
    location_id: string;
  },
  {
    rejectValue: {
      msg: string;
    };
  }
>

interface InitialStateProps {
  isLoading: boolean;
  error: null | string | undefined;
  data: any[];
  isPosting: boolean;
}

const initialState: InitialStateProps = {
  data: [],
  isLoading: false,
  error: null,
  isPosting: false,
};

export const bookfairSlice = createSlice({
  name: "bookfair",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(bookfairThunk.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(bookfairThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(bookfairThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.msg;
    });
  },
});