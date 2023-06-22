import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from ".";
import { SupaClient } from "../utils/supabase";
import { Database } from "../types/supabase";

export const addBook = createAsyncThunk<
  any,
  Omit<bookProps,"book_id"|"user">,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/bookposts/addBook",
  async (payload, { fulfillWithValue, rejectWithValue, getState }) => {
    try {
      await SupaClient.from("books").insert({
        author_name: payload.author_name,
        book_name: payload.book_name,
        book_type: payload.book_type,
        description: payload.description,
        image: payload.image,
        language: payload.language,
        price: payload.price,
        publisher: payload.publisher,
        available_for: payload.available_for,
        categories: payload.categories,
        userId: payload.userId,
      });
      //dispatch(retrieveProfile())
      return fulfillWithValue(true);
    } catch (error: any) {
      return rejectWithValue({ msg: error.response.data.msg });
    }
  }
);

export const booksList = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/bookposts/booksList",
  async (_payload, { fulfillWithValue, rejectWithValue, getState }) => {
    var data;
    try {
      const response = await SupaClient.from("books").select("*,user(*)");
      data = response.data;
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue({ msg: error.response.data.msg });
    }
  }
);

export const booksListView = createAsyncThunk<
  any,
  {
    id: string;
  },
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/bookposts/booksListView",
  async (payload, { fulfillWithValue, rejectWithValue, getState }) => {
    var data;
    try {
      const formData = new FormData();
      formData.append("id", payload.id);
      const response = await axios({
        url: process.env.NEXT_PUBLIC_STAFF_URL + "bookpostview.php",
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

export const updateBook = createAsyncThunk<
  any,
  bookProps,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/bookposts/updateBook",
  async (
    payload,
    { fulfillWithValue, rejectWithValue, getState, dispatch }
  ) => {
    var data;
    try {
      const response = await SupaClient.from("books").update({
        author_name: payload.author_name,
        book_name: payload.book_name,
        book_type: payload.book_type,
        description: payload.description,
        image: payload.image,
        language: payload.language,
        price: payload.price,
        publisher: payload.publisher,
        available_for: payload.available_for,
        categories: payload.categories,
        userId: payload.userId,
      });
      //dispatch(retrieveProfile())
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue({ msg: error.response.data.msg });
    }
  }
);

export const bookdelete = createAsyncThunk<
  any,
  {
    id: string;
  },
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/bookposts/bookdelete",
  async (payload, { fulfillWithValue, rejectWithValue, getState }) => {
    try {
      let data;
      const formData = new FormData();
      const state = getState() as RootState;
      formData.append("id", payload.id);
      const response = await axios({
        url: process.env.NEXT_PUBLIC_STAFF_URL + "bookpostdelete.php",
        method: "POST",
        data: formData,
      });
      data = response.data;
      return fulfillWithValue({ msg: data });
    } catch (error: any) {
      return rejectWithValue({ msg: error.response.data.msg });
    }
  }
);

interface InitialState {
  pending: boolean;
  error: string | null;
  success: string | null;
  data: [];
}

export type bookProps = Database["public"]["Tables"]["books"]["Row"] & {
  user: Database["public"]["Tables"]["user"]["Row"];
};

const initialState: InitialState = {
  pending: false,
  error: null,
  success: null,
  data: [],
};

const BooksAdapter = createEntityAdapter<bookProps>({
  selectId: (book) => book.book_id,
});

export const BooksSlice = createSlice({
  name: "bookposts",
  reducers: {},
  initialState: BooksAdapter.getInitialState<{
    pending: boolean;
    error: null | string | any;
  }>({
    pending: false,
    error: null,
  }),
  extraReducers(builder) {
    builder
      .addCase(booksList.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(booksList.fulfilled, (state, action) => {
        state.pending = false;
        BooksAdapter.setAll(state, action.payload);
      });
  },
});

export const BooksSelector = BooksAdapter.getSelectors<RootState>(
  (state) => state.bookposts
);
