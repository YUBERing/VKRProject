import axios from "axios";
import {setRPDQualification} from "../reducers/rpdReducer";


export const getQualification = async (curriculum) => {
    return async dispatch => {
        const response = await axios.get(`http://25.68.145.51:8085/get-edu?codeCurricula=${curriculum.codeCurricula}`);

        dispatch(setRPDQualification(response.data));
    }
}