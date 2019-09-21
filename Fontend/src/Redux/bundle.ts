import {combineReducers} from "redux";
import {modalReducer, weekScheduleReducer, sidedrawerReducer, productListReducer, globalConfigReducer} from "./reducers";

export const rootReducer = combineReducers({
    weekScheduleReducer, modalReducer, sidedrawerReducer, productListReducer, listOfUsersReducer: globalConfigReducer
});
