import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reduxSlice";
const store = configureStore({
  reducer: userSlice.reducer,
});
export default store