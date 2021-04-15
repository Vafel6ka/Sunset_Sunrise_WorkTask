import { GET_CURRENT_LOC_DATA } from "../constants/actions_type"

const initialState = {
    data: {
        sunrise:"eee",
        sunset:"fff"
    }
}

const currentLocReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_LOC_DATA:
            return {...state, data:action.payload}

        default: return state
    }
};

export default currentLocReduser;