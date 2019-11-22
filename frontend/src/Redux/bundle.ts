import {combineReducers} from "redux";
import {
    modalReducer, weekScheduleReducer, sidedrawerReducer, productListReducer, shoppingListReducer,
    addMealToDatabaseReducer
} from "./reducers";
import { reducer as formReducer } from 'redux-form';


export const rootReducer = combineReducers({
    weekScheduleReducer, modalReducer, sidedrawerReducer, productListReducer, shoppingListReducer, addMealToDatabaseReducer, form: formReducer
});
