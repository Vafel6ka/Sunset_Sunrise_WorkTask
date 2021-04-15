import {combineReducers} from "redux";
import currentLocReduser from "../reducers/currentLocReduser"
import cityLocReducer from "../reducers/cityLocReducer"
import citiesNameReducer from "../reducers/citiesNameReducer";

const rootReducer = combineReducers({
    data: currentLocReduser,
    dataCity: cityLocReducer,
    dataCitiesName: citiesNameReducer
})

export default rootReducer;