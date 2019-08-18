import {combineReducers} from "redux";
import {modalReducer, weekScheduleReducer} from "./reducers";

export const rootReducer = combineReducers({
    weekScheduleReducer, modalReducer
});
