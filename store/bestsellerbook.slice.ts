import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../utils/supabase";

export const fetchIntialbestsellerbook = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/bestsellerbook/fetchIntialbestsellerbook",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("ratings")
        .select("*,rating(ratings_)")
        .gte('ratings_value','4')
        /*.limit(10).order("created_at",{
          ascending:false
        });*/
      const data = response.data;
      console.log(data)
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);

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

export const bestsellerbookSlice = createSlice({
  name: "bestsellerbook",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIntialbestsellerbook.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchIntialbestsellerbook.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchIntialbestsellerbook.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.msg;
    });
  },
});