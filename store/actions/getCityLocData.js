import { GET_CITY_DATA } from "../constants/actions_type"

const getCityLocData = (data) =>{
    return {
        type: GET_CITY_DATA,
        payload: data
    }
}

export default getCityLocData;