import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from ".";

export const History = createAsyncThunk<
  any,
  {
    category: string;
    available_for: string;
  },
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/history/History",
  async (payload, { fulfillWithValue, rejectWithValue, getState }) => {
    var data;
    try {
      const formData = new FormData();
      formData.append("emailid", "seller@gmail.com");
      formData.append("category", payload.category);
      formData.append("available_for", payload.available_for);
      const response = await axios({
        url: process.env.NEXT_PUBLIC_STAFF_URL + "viewhistory.php",
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

const HistoryAdapter = createEntityAdapter<any>({
  selectId: (book) => book.id,
});

export const Historyslice = createSlice({
  name: "history",
  reducers: {},
  initialState: HistoryAdapter.getInitialState<{
    pending: boolean;
    error: string | null;
  }>({ pending: false, error: null }),
  extraReducers: {
    [History.pending.toString()]: (state) => {
      state.pending = true;
    },
    [History.fulfilled.toString()]: (state, action) => {
      state.pending = false;
      HistoryAdapter.setMany(state, action.payload);
    },
    [History.rejected.toString()]: (state, action) => {
      state.pending = false;
      state.error = action.payload?.msg;
    },
  },
});

export const HistorySelector = HistoryAdapter.getSelectors<RootState>(state=>state.history)