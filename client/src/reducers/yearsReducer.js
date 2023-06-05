const SET_YEARS = 'SET_YEARS';

const defaultState = {
    currentYears: [],
}

export default function yearsReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_YEARS:
            return {
                ...state,
                currentYears: action.payload,
            }
        default:
            return state
    }
}

export const setYears = years => ({type: SET_YEARS, payload: years});