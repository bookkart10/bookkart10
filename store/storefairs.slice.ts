import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from ".";

export const getStores = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/storesfairs/getStores",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    var data;
    try {
      const response = await axios({
        url: process.env.NEXT_PUBLIC_ADMIN_URL + "bookstoreretrieve.php",
        method: "POST",
      });
      data = response.data;
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue({ msg: error.response.data.msg });
    }
  }
);

export const getFairs = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/storesfairs/getFairs",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    var data;
    try {
      const response = await axios({
        url: process.env.NEXT_PUBLIC_ADMIN_URL + "bookstoreretrieve.php",
        method: "POST",
      });
      data = response.data;
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue({ msg: error.response.data.msg });
    }
  }
);

export const StoresFairsAdapater = createEntityAdapter<any>({
  selectId: (store) => store.id,
});

export const StoreFairsSlice = createSlice({
  name: "storesfairs",
  reducers: {},
  initialState: StoresFairsAdapater.getInitialState<{
    pending: boolean;
    error: null | string;
  }>({
    pending: false,
    error: null,
  }),
  extraReducers: {
    [getStores.pending.toString()]: (state, _action) => {
      state.pending = true;
    },
    [getStores.fulfilled.toString()]: (state, action) => {
      state.pending = false;
      StoresFairsAdapater.setMany(state, action.payload);
    },
    [getStores.rejected.toString()]: (state, action) => {
      state.pending = false;
      state.error = action.payload?.msg;
    },

    [getFairs.pending.toString()]: (state, _action) => {
      state.pending = true;
    },
    [getFairs.fulfilled.toString()]: (state, action) => {
      state.pending = false;
      StoresFairsAdapater.setMany(state, action.payload);
    },
    [getFairs.rejected.toString()]: (state, action) => {
      state.pending = false;
      state.error = action.payload?.msg;
    },
  },
});

export const StoreFairsSelector = StoresFairsAdapater.getSelectors<RootState>(
  (state) => state.storesfairs
);
