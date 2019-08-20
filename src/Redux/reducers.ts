import {CLOSE_MODAL, OPEN_MODAL, RANDOM_MEAL_CHANGE, SET_CURRENT_WEEK_SCHEDULE, Types} from "./actionTypes";
import {Reducer} from "redux";
import {produce} from "immer"
import {DayDto} from "../ServerConnection/DTOs/WeekScheduleDto";
import MealRecipe from "../Components/MealRecipe/MealRecipe";

// interface InitialState {
//     itemList: string[]
// }
//
// const INITIAL_STATE: InitialState = {
//     itemList: ["test1-redux", "test2-redux"]
// };
//
//
// export const listReducer: Reducer<InitialState, Types> = (state: InitialState = INITIAL_STATE, action: Types) => {
//     switch (action.type) {
//         case ADD_ITEM: {
//             return produce(state, draftState => {
//                 draftState.itemList.push(action.newItem)
//             })
//         }
//         default:
//             return state
//     }
// }

interface weekInitialState {
    currentWeekSchedule: Array<DayDto> | undefined
}

const WEEK_INITIAL_STATE: weekInitialState = {
    currentWeekSchedule: undefined,
};

export const weekScheduleReducer: Reducer<weekInitialState, Types> = (state: weekInitialState = WEEK_INITIAL_STATE, action: Types) => {
    switch (action.type) {
        case SET_CURRENT_WEEK_SCHEDULE: {
            return produce(state, draftState => {
                draftState.currentWeekSchedule = action.currentWeekSchedule;
            })
        }
        case RANDOM_MEAL_CHANGE: {
            return produce(state, draftState => {
                if (draftState.currentWeekSchedule !== undefined) {
                draftState.currentWeekSchedule[action.dayNr]["meals"][action.mealNr]= action.randomMeal;
               }
            })
        }

        default:
            return state
    }
};

interface ModalReducerState {
    visible: boolean
    data?: JSX.Element
}

const MODAL_REDUCER_INITIAL_STATE: ModalReducerState = {
    visible: false,
    data: undefined,
};

export const modalReducer: Reducer<ModalReducerState, Types> = (state: ModalReducerState = MODAL_REDUCER_INITIAL_STATE, action: Types) => {
    switch (action.type) {
        case OPEN_MODAL: {
            return produce(state, draftState => {
                draftState.visible = true;
                draftState.data = action.data;
            })
        }
        case CLOSE_MODAL: {
            return produce(state, draftState => {
                draftState.visible = false;
            })
        }
        default:
            return state
    }
};