import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const callToAPI = createAsyncThunk(
  "api/country",
  async (obj, { state, error }) => {
    try {
      const req = await fetch("https://api.covid19api.com/countries");
      const res = await req.json();
      return res;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState: [],
  reducers: {},
  extraReducers: {
    [callToAPI.pending]: (state, action) => {
      return [];
    },
    [callToAPI.fulfilled]: (state, action) => {
      return action.payload;
    },
    [callToAPI.rejected]: (state, action) => {
      return [];
    },
  },
});

export const actions = countrySlice;
export default countrySlice;
