import { GET_CITY_LOC_DATA } from "../constants/actions_type"

const initialState = {
    dataCity:{
        sunrise:"QQQQ",
        sunset:"DDDD"
    }
}

const cityLocReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CITY_LOC_DATA:
            return {...state, dataCity:action.payload}
        default: return state
    }
};

export default cityLocReducer;