import axios from "axios";
import {setDirection} from "../reducers/directionReducer";

export const getDirection = async () => {
    return async dispatch => {
        const response = await axios.get('http://localhost:7070/direction');
        console.log(response.data)
        dispatch(setDirection(response.data));
    }
}