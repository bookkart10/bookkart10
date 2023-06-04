import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";

export const fetchIntialwishlist = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/wishlist/fetchIntialwishlist",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("book")
        .select("*,book(bookname)")
        .limit(10).order("created_at",{
          ascending:false
        });
      const data = response.data;
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);

export const postwishlist = createAsyncThunk<
  any,
  {
    id: string;
    content: string;
  },
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/wishlist/postwishlist",
  async (payload, { fulfillWithValue, rejectWithValue,dispatch }) => {
    try {
      const response = await SupaClient.from("wishlist")
        .insert({
          bookId: payload.id,
        })
        .select("*,books(bookname)")
        .single();
      const data = response.data;
      dispatch(fetchIntialwishlist());
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

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIntialwishlist.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchIntialwishlist.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchIntialwishlist.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.msg;
    });

    builder.addCase(postwishlist.fulfilled, (state, { payload }) => {
      state.isPosting = false;
      state.error = null;
    });
    builder.addCase(postwishlist.pending, (state) => {
      state.isPosting = true;
      state.error = null;
    });
    builder.addCase(postwishlist.rejected, (state, { payload }) => {
      state.isPosting = false;
      state.error = payload?.msg;
    });
  },
});