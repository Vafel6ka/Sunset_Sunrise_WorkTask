import { GET_CITY_DATA } from "../constants/actions_type"

const initialState = {
    dataCity:{
        latitude:10,
        longitude: 100
    }
}

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CITY_DATA:
            return {...state, dataCity:action.payload}
        default: return state
    }
};

export default cityReducer;