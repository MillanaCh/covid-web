import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
const store = configureStore({
  reducer: { reducers },
});
console.log(store);
export default store;
