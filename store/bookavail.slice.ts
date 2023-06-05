import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../utils/supabase";

export const fetchIntialbookavail = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/bookavail/fetchIntialbookavail",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("books")
        .select("*")
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

export const bookavailSlice = createSlice({
  name: "bookavail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIntialbookavail.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchIntialbookavail.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchIntialbookavail.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.msg;
    });
  },
});