import axios from "axios";
import {setDirection} from "../reducers/directionReducer";

export const getDirection = async () => {
    return async dispatch => {
        const response = await axios.get('http://25.68.145.51:8085/get-direction');
        dispatch(setDirection(response.data));
    }
}