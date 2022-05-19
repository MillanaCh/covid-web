import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reduxSlice";
import dataSlice from "./reduxData";
const store = configureStore({
  reducer: {
    country: userSlice.reducer,
    data: dataSlice.reducer,
  },
});
console.log(store);
export default store;
