import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const callData = createAsyncThunk(
  "api/data",
  async (obj, { state, error }) => {
    try {
      const req = await fetch(
        `https://api.covid19api.com/country/kyrgyzstan/status/confirmed/live`
      );
      const res = await req.json();
      return res;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {},
  extraReducers: {
    [callData.pending]: (state, action) => {
      return [];
    },
    [callData.fulfilled]: (state, action) => {
      return action.payload;
    },
    [callData.rejected]: (state, action) => {
      return [];
    },
  },
});

export const actions = dataSlice;
export default dataSlice;
