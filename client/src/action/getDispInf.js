import axios from "axios";
import {setRPDScopeContactWork, setRPDScopeDiscipline} from "../reducers/rpdReducer";

export const getDispInf = async (scopeContactWork, scopeDiscipline, curriculum, discipline) => {
    return async dispatch => {
        const response = await axios.get(`http://25.68.145.51:8085/disp-inf?codeCurricula=${curriculum}&nameDiscipline=${discipline}`);

        const copyScopeDiscipline = {
            totalCredits: 0,
            totalHours: 0,
            classroomClasses: 0,
            lectures: 0,
            laboratory: 0,
            practical: 0,
            independent: 0,
            formCertification: [''],
        };

        copyScopeDiscipline.totalCredits = response.data.quantity_ze_to_plan;
        copyScopeDiscipline.totalHours = response.data.general_quantity_hours_to_plan;

        const responseActivity = await axios.get(`http://25.68.145.51:8085/activity-group?codeCurricula=${curriculum}&nameDiscipline=${discipline}`);

        const copyScopeContactWork = {
            lectures: 0,
            laboratory: 0,
            consultation: 0,
            test: 0,
            exam: 0,
            course: 0,
            all: 0,
        };

        responseActivity.data.forEach((item) =>
            {
                if (item.type === 'Лек') {
                    copyScopeDiscipline.lectures = item.hour;
                    copyScopeDiscipline.classroomClasses = Number(copyScopeDiscipline.laboratory) + Number(item.hour);
                    copyScopeContactWork.lectures = item.hour;
                }
                if (item.type === 'Лаб') {
                    copyScopeDiscipline.laboratory = item.hour;
                    copyScopeDiscipline.classroomClasses = Number(copyScopeDiscipline.lectures) + Number(item.hour);
                    copyScopeContactWork.laboratory = item.hour;
                }
            }
        )

        const responseControl = await axios.get(`http://25.68.145.51:8085/control-group?codeCurricula=${curriculum}&nameDiscipline=${discipline}`);

        responseControl.data.forEach((item) =>
            {
                if (item.type === 'Зачет') {
                    copyScopeContactWork.test = item.hour;
                    copyScopeContactWork.all = Number(copyScopeContactWork.lectures)
                }
                if (item.type === 'Экза мен') {
                    copyScopeContactWork.exam = item.hour;
                }
                if (item.type === 'КП') {
                    copyScopeContactWork.course = item.hour;
                    copyScopeDiscipline.practical = Number(copyScopeDiscipline.laboratory) + Number(item.hour);
                }
                copyScopeContactWork.all = Number(copyScopeContactWork.lectures) + Number(copyScopeContactWork.laboratory) + Number(copyScopeContactWork.test) + Number(copyScopeContactWork.exam) + Number(copyScopeContactWork.course)
            }
        )

        copyScopeDiscipline.formCertification = responseControl.data.map(item => item.type);

        dispatch(setRPDScopeDiscipline(copyScopeDiscipline));
        dispatch(setRPDScopeContactWork(copyScopeContactWork));
    }
}