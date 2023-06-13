import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";
import rpdReducer from "./rpdReducer";
import disciplineReducer from "./disciplineReducer";
import directionReducer from "./directionReducer";
import profileReducer from "./profileReducer";
import yearsReducer from "./yearsReducer";
import curriculumReducer from "./curriculumReducer";
import activeReducer from "./activeReducer";
import deleteCurriculumReducer from "./deleteCurriculumReducer";

const rootReducer = combineReducers(
    {
            deleteCurriculum: deleteCurriculumReducer,
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