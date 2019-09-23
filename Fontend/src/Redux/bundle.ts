import {combineReducers} from "redux";
import {
    modalReducer, weekScheduleReducer, sidedrawerReducer, productListReducer, shoppingListReducer
} from "./reducers";

export const rootReducer = combineReducers({
    weekScheduleReducer, modalReducer, sidedrawerReducer, productListReducer, shoppingListReducer
});
