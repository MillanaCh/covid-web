import * as actions from "./actions"
const initialState = []
const reducers = (state = initialState, action) => {
    switch(action.type){
        case actions.COUNTRY_STATUS:
            return [...state, action.payload]
        default:
            return state
    }
};
export default reducers