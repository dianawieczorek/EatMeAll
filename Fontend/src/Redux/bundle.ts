import {combineReducers} from "redux";
import {
    modalReducer, weekScheduleReducer, sidedrawerReducer, productListReducer, shoppingListReducer,
    addMealToDatabaseReducer
} from "./reducers";

export const rootReducer = combineReducers({
    weekScheduleReducer, modalReducer, sidedrawerReducer, productListReducer, shoppingListReducer, addMealToDatabaseReducer
});
