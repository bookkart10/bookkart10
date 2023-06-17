import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SupaClient } from "../utils/supabase";

interface InitialStateProps {
  data: any [];
  isLoading: boolean;
  error: string | null | undefined;
}

const initialState: InitialStateProps = {
  data: [],
  isLoading: false,
  error: null,
};

export const bookFilter = createSlice({
    name: 'bookFilter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(listBooksHistory.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        builder.addCase(listBooksHistory.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.data = payload;
        })
        builder.addCase(listBooksHistory.rejected, (state, {payload}) => {
          state.isLoading = false;
          state.error = payload?.msg;
        });

        builder.addCase(bookfilter.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          builder.addCase(bookfilter.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.data = payload;
          })
          builder.addCase(bookfilter.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload?.msg;
          });
        
          builder.addCase(listBooks.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          builder.addCase(listBooks.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.data = payload;
          })
          builder.addCase(listBooks.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload?.msg;
          });
    },
  });

  export const listBooksHistory = createAsyncThunk<
  any,
  { id:string,
    available_for: string },
  {
    rejectValue: {
      msg: string;
    };
  }
>("/searchSlice/listBooksHistory",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('book_history')
        .select('*')
        .eq('seller_id', payload.id)
        .eq('available_for', payload.available_for)
        
        const data = response.data;
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "No records found in Books History !" });
      }          
      }
  );

  export const bookfilter = createAsyncThunk<
  any,
  {
    price: BigInteger,
rating: BigInteger,
language: string,
available_for: string,
},
  {
    rejectValue: {
      msg: string;
    };
  }
>("/searchSlice/bookFilter",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('books')
        .select('*')
        .eq('available_for', payload.available_for)
        .lte('price', payload.price)
        .gte('rating', payload.rating)
        .eq('language', payload.language); 

        const data = response.data;
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "Sorry, Books not available for the given filter!" });
      }          
      }
  );

  export const listBooks = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>("/searchSlice/listBooks",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('books')
        .select('*')
        
        const data = response.data;
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "Sorry, Books not available for the given filter!" });
      }          
      }
  );
