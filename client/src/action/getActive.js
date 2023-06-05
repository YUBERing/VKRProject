import axios from "axios";
import {setActive} from "../reducers/activeReducer";
import {setRPDActive} from "../reducers/rpdReducer";

export const getActive = async (discipline) => {
    return async dispatch => {
        const response = await axios.get(`http://localhost:7070/activ/${discipline}`);
        console.log(response.data)
        dispatch(setActive(response.data));
        dispatch(setRPDActive(response.data));
    }
}