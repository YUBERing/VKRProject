import axios from "axios";
import {setProfile} from "../reducers/profileReducer";
import {setYears} from "../reducers/yearsReducer";

export const getProfile = async (direction) => {
    return async dispatch => {
        const response = await axios.get(`http://localhost:7070/profile/${direction}`);
        console.log(response.data)
        dispatch(setProfile(response.data));
    }
}