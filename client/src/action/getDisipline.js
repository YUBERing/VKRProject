import axios from "axios";
import {setDiscipline} from "../reducers/disciplineReducer";

export const getDiscipline = async (curriculum) => {
    return async dispatch => {
        const response = await axios.get(`http://localhost:7070/displ/${curriculum}`);
        console.log(response.data)
        dispatch(setDiscipline(response.data));
    }
}