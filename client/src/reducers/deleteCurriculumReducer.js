const SET_DEL_CURRICULUM = 'SET_DEL_CURRICULUM';
const SET_DEL_DIRECTION = 'SET_DEL_DIRECTION';
const SET_DEL_PROFILE = 'SET_DEL_PROFILE';
const SET_DEL_YEARS = 'SET_DEL_YEARS';

const defaultState = {
    currentDirection: {
        code_direction: '',
        name_direction: ''
    },
    currentProfile: ['',''],
    currentYears: '',
    currentCurriculum: {
        codeCurricula: '',
        form_of_training: "",
        idPd: '',
        nameCurricula: "",
        number_educational_standard: '',
        statement: "",
        type_of_education: "",
        yearStartTraining: '',
    },
}

export default function deleteCurriculumReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_DEL_CURRICULUM:
            return {
                ...state,
                currentCurriculum: action.payload,
            }
        case SET_DEL_DIRECTION:
            return {
                ...state,
                currentDirection: action.payload,
            }
        case SET_DEL_PROFILE:
            return {
                ...state,
                currentProfile: action.payload,
            }
        case SET_DEL_YEARS:
            return {
                ...state,
                currentYears: action.payload,
            }
        default:
            return state
    }
}

export const setDelCurriculum = curriculum => ({type: SET_DEL_CURRICULUM, payload: curriculum});
export const setDelDirection = direction => ({type: SET_DEL_DIRECTION, payload: direction});
export const setDelProfile = profile => ({type: SET_DEL_PROFILE, payload: profile});
export const setDelYears = years => ({type: SET_DEL_YEARS, payload: years});