import {ADD_ITEM, Types} from "./actionTypes";
import {Reducer} from "redux";

interface InitialState {
    itemList: string[]
}

const INITIAL_STATE: InitialState = {
    itemList: ["test1-redux", "test2-redux"]
};


export const listReducer: Reducer<InitialState, Types> = (state: InitialState = INITIAL_STATE, action: Types) => {
    switch (action.type) {
        case ADD_ITEM: {
            return {
                ...state,
                itemList: [...state.itemList, action.newItem]
            }
        }
        default:
            return state
    }
};