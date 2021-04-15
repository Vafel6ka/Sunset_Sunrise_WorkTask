import {combineReducers} from "redux";
import currentLocReduser from "../reducers/currentLocReduser"
import cityLocReducer from "../reducers/cityLocReducer"

const rootReducer = combineReducers({
    data: currentLocReduser,
    dataCity: cityLocReducer
})

export default rootReducer;