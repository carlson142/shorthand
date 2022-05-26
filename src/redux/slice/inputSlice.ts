import { createSlice } from "@reduxjs/toolkit";

interface InputState {
  input: string;
  loading: string;
  error: string | null;
}

const initialState: InputState = {
  input: "",
  loading: "",
  error: null,
};

export const inputSlice = createSlice({
  name: "inputSlice",
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
  },
});

export const { setInput } = inputSlice.actions;
export default inputSlice.reducer;
