import axios from "axios";
import {setYears} from "../reducers/yearsReducer";


export const getYears = async (profile) => {
    return async dispatch => {
        const response = await axios.get(`http://localhost:7070/years/${profile}`);
        console.log(response.data)
        dispatch(setYears(response.data));
    }
}