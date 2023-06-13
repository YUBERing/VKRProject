import axios from "axios";
import {setCurriculum} from "../reducers/curriculumReducer";
import {setDiscipline} from "../reducers/disciplineReducer";


export const getCurriculum = async (direction, profile, years) => {
    return async dispatch => {
        const response = await axios.get(`http://25.68.145.51:8085/get-curricula?idDirection=${direction}&idProfile=${profile}&year=${years}`);

        dispatch(setCurriculum(response.data));
        dispatch(setDiscipline([]));
    }
}