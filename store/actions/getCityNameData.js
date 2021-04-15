import { GET_CITY_NAME_DATA} from "../constants/actions_type"

const getCityNameData = (data) =>{
    return {
        type: GET_CITY_NAME_DATA,
        payload: data
    }
}

export default getCityNameData;