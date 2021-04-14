import { GET_DATA } from "../constants/actions_type"

const initialState = {
    data:{
        data:{
            astronomical_twilight_begin: "12:02:45 PM",
            astronomical_twilight_end: "4:17:01 AM",
            civil_twilight_begin: "1:08:34 PM",
            civil_twilight_end: "3:11:11 AM",
            day_length: "13:08:40",
            nautical_twilight_begin: "12:36:19 PM",
            nautical_twilight_end: "3:43:26 AM",
            solar_noon: "8:09:53 PM",
            sunrise: "_____ PM",
            sunset: "_____ AM",
        }
    }
}

const resultReduser = (state = initialState, action) => {
    console.log(state, "state result Reducer")
    switch (action.type) {
        case GET_DATA:
            console.log(action.payload, 'action.payload')
            return {...state, data:action.payload}

        default: return state
    }
};

export default resultReduser;