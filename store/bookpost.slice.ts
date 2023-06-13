import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SupaClient } from "../utils/supabase";
import { EnumType } from 'typescript';
import { ReferrerEnum } from 'next/dist/lib/metadata/types/metadata-types';

interface InitialStateProps {
  data: any [];
  isLoading: boolean;
  error: string | null | undefined;
  success: string | null | undefined;
}

interface Book {
    bookid: string,
    book_name:string,
    available_for : string,
    date: Date,
    price: Number,
    seller_id:string,
    
}

const initialState: InitialStateProps = {
  data: [],
  isLoading: false,
  error: null,
  success: null,
};

export const bookFilter = createSlice({
    name: 'bookFilter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(loadBook.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        builder.addCase(loadBook.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.data = payload;
        })
        builder.addCase(loadBook.rejected, (state, {payload}) => {
          state.isLoading = false;
          state.error = payload?.msg;
        });

        builder.addCase(deleteBook.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          builder.addCase(deleteBook.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.success = payload?.msg;
          })
          builder.addCase(deleteBook.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload?.msg;
          });
    },
  });

  export const loadBook = createAsyncThunk<
  any,
  { id:string,
    book_name:string,
    book_id:string,
    price:number,
    seller_id:string,
    available_for: "SALE"|"RENT"},
  {
    rejectValue: {
      msg: string;
    };
  }
>("/searchSlice/loadBook",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('books')
        .upsert( { book_name: payload.book_name, book_id: payload.book_id, available_for: payload.available_for, price: payload.price, sellerid: payload.seller_id })
        .select()
        
        const data = response.data;
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "No records found in Books History !" });
      }          
      }
  );

  export const deleteBook = createAsyncThunk<
  any,
  {
    id: string,
},
  {
    rejectValue: {
      msg: string;
    };
  }
>("/searchSlice/deleteBook",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('books')
        .delete()
        .eq('id', payload.id) 

        const data = response.data;
        return fulfillWithValue({ msg: "Book Deleted Successfully!" });

      } catch (e) {
        return rejectWithValue({ msg: "Something went wrong!" });
      }          
      }
  );