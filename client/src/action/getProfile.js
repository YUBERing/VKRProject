import axios from "axios";
import {setProfile} from "../reducers/profileReducer";
import {setYears} from "../reducers/yearsReducer";
import {setCurriculum} from "../reducers/curriculumReducer";
import {setDiscipline} from "../reducers/disciplineReducer";


export const getProfile = async (direction) => {
    return async dispatch => {
        const response = await axios.get(`http://25.68.145.51:8085/get-profile?idDirection=${direction.code_direction}`);
        dispatch(setProfile(response.data));
        dispatch(setYears([]));
        dispatch(setCurriculum([]));
        dispatch(setDiscipline([]));
    }
}