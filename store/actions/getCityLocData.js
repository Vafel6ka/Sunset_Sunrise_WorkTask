import { GET_CITY_LOC_DATA } from "../constants/actions_type"

const getCityLocData = (data) =>{
    return {
        type: GET_CITY_LOC_DATA,
        payload: data
    }
}

export default getCityLocData;