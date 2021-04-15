import { GET_CURRENT_LOC_DATA} from "../constants/actions_type"

const getCurrentLocData = (data) =>{
    return {
        type: GET_CURRENT_LOC_DATA,
        payload: data
    }
}

export default getCurrentLocData;