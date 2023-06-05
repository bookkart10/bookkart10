/*import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../utils/supabase";

export const historyThunk = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/history/fetchIntialhistory",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("")
        .select("*");
      const data = response.data;
      console.log(data)
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);
>(
  "/history/fetchpurchasehistory",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("")
        .select("*");
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

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(historyThunk.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(historyThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(historyThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.msg;
    });
  },
});*/