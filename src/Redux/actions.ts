import {ADD_ITEM, addItemAction} from "./actionTypes";


export const addItem = (aNewItem:string ):addItemAction => {
    return {
        type: ADD_ITEM,
        newItem: aNewItem
    }
};