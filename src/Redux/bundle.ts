import {combineReducers} from "redux";
import {modalReducer, weekScheduleReducer, sidedrawerReducer} from "./reducers";

export const rootReducer = combineReducers({
    weekScheduleReducer, modalReducer, sidedrawerReducer
});
