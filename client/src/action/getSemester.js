import axios from "axios";
import {setRPDSemesters} from "../reducers/rpdReducer";

export const getSemester = async (curriculum, discipline) => {
    return async dispatch => {
        const response = await axios.get(`http://25.68.145.51:8085/get-semester?codeCurricula=${curriculum}&nameDiscipline=${discipline}`);

        dispatch(setRPDSemesters(response.data));
    }
}