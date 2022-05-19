import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const callToAPI = createAsyncThunk(
  "api/data",
  async (obj, { state, error }) => {
    try {
      const req = await fetch(
        "https://api.covid19api.com/dayone/country/kyrgyzstan/status/confirmed"
      );
      const res = await req.json();
      return res;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
);

const userSlice = createSlice({
  name: "data",
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

export const actions = userSlice;
export default userSlice;
