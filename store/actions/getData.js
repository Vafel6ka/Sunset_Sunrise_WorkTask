import { GET_DATA} from "../constants/actions_type"

const getData = (data) =>{
    return {
        type: GET_DATA,
        payload: data
    }
}

export default getData;