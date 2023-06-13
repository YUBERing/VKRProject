import axios from "axios";
import {setRPDCompetence, setRPDPlannedOutcomes} from "../reducers/rpdReducer";


export const getCompetencies = async (data, curriculum, discipline) => {
    return async dispatch => {
        const response = await axios.get(`http://25.68.145.51:8085/get-competencies?codeCurricula=${curriculum}&nameDiscipline=${discipline}`);

        const copyData = {};

        for (const key in data) {
            copyData[key] = data[key]
        }

        dispatch(setRPDCompetence(response.data));
        copyData.master = response.data;
        dispatch(setRPDPlannedOutcomes(copyData));
    }
}