import {combineReducers} from "redux";
import resultReduser from "../reducers/resultReduser"
import cityReducer from "../reducers/cityReducer"

const rootReducer = combineReducers({
    data: resultReduser,
    dataCity: cityReducer
})

export default rootReducer;