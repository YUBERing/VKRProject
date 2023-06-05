import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import rpdReducer from "./rpdReducer";
import disciplineReducer from "./disciplineReducer";
import directionReducer from "./directionReducer";
import profileReducer from "./profileReducer";
import yearsReducer from "./yearsReducer";
import curriculumReducer from "./curriculumReducer";
import activeReducer from "./activeReducer";

const rootReducer = combineReducers(
    {
        user: userReducer,
        rpd: rpdReducer,
        discipline: disciplineReducer,
        direction: directionReducer,
        profile: profileReducer,
        years: yearsReducer,
        curriculum: curriculumReducer,
        active: activeReducer,
    }
)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))