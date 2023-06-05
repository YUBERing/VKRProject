import axios from "axios";
import {setCurriculum} from "../reducers/curriculumReducer";


export const getCurriculum = async (profile, years) => {
    return async dispatch => {
        const response = await axios.get(`http://localhost:7070/curriculum/${profile},${years}`);
        console.log(response.data)
        dispatch(setCurriculum(response.data));
    }
}