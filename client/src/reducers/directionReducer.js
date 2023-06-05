const SET_DIRECTION = 'SET_DIRECTION';

const defaultState = {
    currentDirection: [],
}

export default function directionReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_DIRECTION:
            return {
                ...state,
                currentDirection: action.payload,
            }
        default:
            return state
    }
}

export const setDirection = direction => ({type: SET_DIRECTION, payload: direction});