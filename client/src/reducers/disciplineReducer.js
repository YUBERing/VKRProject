const SET_DISCIPLINE = 'SET_DISCIPLINE';

const defaultState = {
    currentDiscipline: [],
}

export default function disciplineReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_DISCIPLINE:
            return {
                ...state,
                currentDiscipline: action.payload,
            }
        default:
            return state
    }
}

export const setDiscipline = discipline => ({type: SET_DISCIPLINE, payload: discipline})