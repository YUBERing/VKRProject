import axios from "axios";
import {setDiscipline} from "../reducers/disciplineReducer";
import {setRPDFormLearning} from "../reducers/rpdReducer";

export const getFormLearning = async (curriculum) => {
    return async dispatch => {
        const response = await axios.get(`http://25.68.145.51:8085/form?codeCurricula=${curriculum.codeCurricula}`);
        dispatch(setRPDFormLearning(response.data))
    }
}