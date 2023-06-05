const SET_PROFILE = 'SET_PROFILE';

const defaultState = {
    currentProfile: [],
}

export default function profileReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                currentProfile: action.payload,
            }
        default:
            return state
    }
}

export const setProfile = profile => ({type: SET_PROFILE, payload: profile});