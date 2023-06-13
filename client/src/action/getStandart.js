import axios from "axios";
import {setRPDOrderNumber} from "../reducers/rpdReducer";


export const getStandart = async (curriculum) => {
    return async dispatch => {
        const response = await axios.get(`http://25.68.145.51:8085/get-standard?codeCurricula=${curriculum.codeCurricula}`);

        dispatch(setRPDOrderNumber(response.data));
    }
}