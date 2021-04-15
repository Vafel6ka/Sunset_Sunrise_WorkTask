import { GET_CITY_NAME_DATA } from "../constants//actions_type"

const initialState = {
    dataCitiesName: {
        dataCitiesName:"Torronto"
        }
}

const citiesNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CITY_NAME_DATA:
            return {...state, dataCitiesName:action.payload}
        default: return state
    }
};

export default citiesNameReducer;