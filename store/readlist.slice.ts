import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../utils/supabase";

export const fetchIntialreadlist = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/readlist/fetchIntialreadlist",
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

export const postreadlist = createAsyncThunk<
  any,
  void,
 /* {
    id: string;
    content: string;
  },*/
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/readlist/postreadlist",
  async (payload, { fulfillWithValue, rejectWithValue,dispatch }) => {
    try {
      const response = await SupaClient.from("readlist")
        .insert([
          {name:'Favourite', book_id:'02880e64-28e3-4e93-85fd-44ec6b2f0a6e',book_name:'Harry Potter', description:'hello you can read this book', user_id:'f5ff81bd-4df2-4c4f-b5a8-d15db75048ae' }
        ])
        .select("*")
        //.single();
      const data = response.data;
      console.log(data)
      dispatch(fetchIntialreadlist());
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
export const readlistSlice = createSlice({
  name: "readlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIntialreadlist.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchIntialreadlist.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchIntialreadlist.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.msg;
    });

    builder.addCase(postreadlist.fulfilled, (state, { payload }) => {
      state.isPosting = false;
      state.error = null;
    });
    builder.addCase(postreadlist.pending, (state) => {
      state.isPosting = true;
      state.error = null;
    });
    builder.addCase(postreadlist.rejected, (state, { payload }) => {
      state.isPosting = false;
      state.error = payload?.msg;
    });
  },
});