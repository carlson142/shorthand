import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUrl = createAsyncThunk<
  ApiData,
  string,
  { rejectValue: string }
>("asyncSlice/fetchUrl", async (url, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${url}`
    );

    return await response.data;
  } catch (error) {
    return rejectWithValue("Server error!");
  }
});

interface ApiData {
  ok: boolean | null;
  result: {
    original_link: string;
    full_short_link: string;
  };
}

interface Url {
  url: ApiData[];
  status: string;
  error: string | null;
}

const initialState: Url = {
  url: [],
  status: "",
  error: null,
};

export const asyncSlice = createSlice({
  name: "asyncSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUrl.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchUrl.fulfilled, (state, action) => {
        state.status = "ok";
        state.url?.push(action.payload);
      });
  },
});

export default asyncSlice.reducer;
