import * as actions from "./actions";
const initialState = [];
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.DATA:
      return [action.payload];
    default:
      return state;
  }
};
export default reducers;
