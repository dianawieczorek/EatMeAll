import {combineReducers} from "redux";
import {modalReducer, weekScheduleReducer, sidedrawerReducer, productListReducer} from "./reducers";

export const rootReducer = combineReducers({
    weekScheduleReducer, modalReducer, sidedrawerReducer, productListReducer
});
