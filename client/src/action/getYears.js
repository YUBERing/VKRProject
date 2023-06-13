import axios from "axios";
import {setYears} from "../reducers/yearsReducer";
import {setCurriculum} from "../reducers/curriculumReducer";
import {setDiscipline} from "../reducers/disciplineReducer";


export const getYears = async (direction, profile) => {
    return async dispatch => {
        const response = await axios.get(`http://25.68.145.51:8085/get-year?idDirection=${direction}&idProfile=${profile[0]}`);
        dispatch(setYears(response.data));
        dispatch(setCurriculum([]));
        dispatch(setDiscipline([]));
    }
}