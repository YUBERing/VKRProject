const SET_CURRICULUM = 'SET_CURRICULUM';

const defaultState = {
    currentCurriculum: [

    ],
}

export default function curriculumReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CURRICULUM:
            return {
                ...state,
                currentCurriculum: action.payload,
            }
        default:
            return state
    }
}

export const setCurriculum = curriculum => ({type: SET_CURRICULUM, payload: curriculum});