const SET_ACTIVE = 'SET_ACTIVE';

const defaultState = {
    currentActive: [],
}

export default function activeReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ACTIVE:
            return {
                ...state,
                currentActive: action.payload,
            }
        default:
            return state
    }
}

export const setActive = active => ({type: SET_ACTIVE, payload: active});