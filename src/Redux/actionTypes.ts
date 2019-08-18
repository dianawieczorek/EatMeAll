import {DayDto} from "../ServerConnection/DTOs/WeekScheduleDto";

// export const ADD_ITEM = 'addItemAction'
// export interface addItemAction {
//     type: typeof ADD_ITEM
//     newItem: string
// }
export const SET_CURRENT_WEEK_SCHEDULE= 'SET_CURRENT_WEEK_SCHEDULE';
export interface setCurrentWeekScheduleIf {
    type: typeof SET_CURRENT_WEEK_SCHEDULE
    currentWeekSchedule: Array<DayDto>
}
export const OPEN_MODAL= 'OPEN_MODAL';
export interface openModalIf {
    type: typeof OPEN_MODAL
    data: string
}

export const CLOSE_MODAL= 'CLOSE_MODAL';
export interface closeModalIf {
    type: typeof CLOSE_MODAL
}


export type Types = setCurrentWeekScheduleIf | openModalIf | closeModalIf// | - pipe dodaje kolejne interfejsy akcji