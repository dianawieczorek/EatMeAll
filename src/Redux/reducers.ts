import {OPEN_MODAL, SET_CURRENT_WEEK_SCHEDULE, Types} from "./actionTypes";
import {Reducer} from "redux";
import {produce} from "immer"
import {DayDto} from "../ServerConnection/DTOs/WeekScheduleDto";

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

        default:
            return state
    }
};
// }

interface ModalReducerState {
    visible: boolean
    data: string
}

const MODAL_REDUCER_INITIAL_STATE: ModalReducerState = {
    visible: false,
    data: "dupeczka69",
};

export const modalReducer: Reducer<ModalReducerState, Types> = (state: ModalReducerState = MODAL_REDUCER_INITIAL_STATE, action: Types) => {
    switch (action.type) {
        case OPEN_MODAL: {
            return produce(state, draftState => {
                draftState.visible = true;
                draftState.data = action.data;
            })
        }
        default:
            return state
    }
};