import axios from "axios";
import {setDiscipline} from "../reducers/disciplineReducer";

export const getDiscipline = async (curriculum) => {
    return async dispatch => {
        const response = await axios.get(`http://25.68.145.51:8085/get-disciplines?codeCurricula=${curriculum.codeCurricula}`);
        dispatch(setDiscipline(response.data));
    }
}