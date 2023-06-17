import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from ".";

export const addBook = createAsyncThunk<
  any,
  bookProps,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/bookposts/addBook",
  async (payload, { fulfillWithValue, rejectWithValue, getState }) => {
    var data;
    try {
      const formData = new FormData();
      formData.append("book_name", payload.book_name);
      formData.append("author", payload.author);
      formData.append("category", payload.category);
      formData.append("book_price", payload.book_price);
      formData.append("available_for", payload.available_for);
      formData.append("seller_name", "seller");
      formData.append("seller_email", "seller@gmail.com");
      formData.append("seller_phone", "123455");
      formData.append("buyer_email", payload.buyer_email);

      const response = await axios({
        url: process.env.NEXT_PUBLIC_STAFF_URL + "bookpostraise.php",
        method: "POST",
        data: formData,
      });
      data = response.data;
      //dispatch(retrieveProfile())
      return fulfillWithValue(data);
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
      const formData = new FormData();
      const state = getState() as RootState;
      formData.append("emailid", "selller@gamil.com");
      const response = await axios({
        url: process.env.NEXT_PUBLIC_STAFF_URL + "bookpostlist.php",
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
      const formData = new FormData();
      formData.append("book_name", payload.book_name);
      formData.append("author", payload.author);
      formData.append("category", payload.category);
      formData.append("book_price", payload.book_price);
      formData.append("available_for", payload.available_for);
      formData.append("seller_name", "selller");
      formData.append("seller_email", "seller@gmail.com");
      formData.append("seller_phone", "1234567");
      formData.append("buyer_email", payload.buyer_email);

      const response = await axios({
        url: process.env.NEXT_PUBLIC_STAFF_URL + "bookpostupdate.php",
        method: "POST",
        data: formData,
      });
      data = response.data;
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

interface bookProps {
  id: string;
  book_name: string;
  author: string;
  book_price: string;
  category: string;
  available_for: string;
  seller_name: string;
  seller_email: string;
  seller_phone: string;
  buyer_email: string;
}

const initialState: InitialState = {
  pending: false,
  error: null,
  success: null,
  data: [],
};

const BooksAdapter = createEntityAdapter<bookProps>({
  selectId: (book) => book.id,
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
  extraReducers: {
    [addBook.pending.toString()]: (state, action) => {
      state.pending = true;
    },
    [addBook.fulfilled.toString()]: (state, action) => {
      state.error = null;
    },
    [addBook.rejected.toString()]: (state, action) => {
      state.error = action.payload?.msg;
      state.pending = false;
    },

    [booksList.pending.toString()]: (state, action) => {
      state.pending = true;
    },
    [booksList.fulfilled.toString()]: (state, action) => {
      state.pending = false;
      BooksAdapter.setMany(state, action.payload);
    },
    [booksList.rejected.toString()]: (state, action) => {
      state.pending = false;
      state.error = action.payload?.msg;
    },

    [booksListView.pending.toString()]: (state, action) => {
      state.pending = true;
    },
    [booksListView.fulfilled.toString()]: (state, action) => {
      state.pending = false;
      BooksAdapter.setMany(state, action.payload);
    },
    [booksListView.rejected.toString()]: (state, action) => {
      state.pending = false;
      state.error = action.payload?.msg;
    },

    [updateBook.pending.toString()]: (state, action) => {
      state.pending = true;
    },
    [updateBook.fulfilled.toString()]: (state, action) => {
      state.error = null;
    },
    [updateBook.rejected.toString()]: (state, action) => {
      state.error = action.payload?.msg;
      state.pending = false;
    },
    [bookdelete.pending.toString()]: (state, action) => {
      state.pending = true;
    },
    [bookdelete.fulfilled.toString()]: (state, action) => {
      state.error = null;
    },
    [bookdelete.rejected.toString()]: (state, action) => {
      state.error = action.payload?.msg;
      state.pending = false;
    },
  },
});


export const BoosSelector = BooksAdapter.getSelectors<RootState>(state=>state.bookposts);