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
export const SET_CURRENT_DAY= 'SET_CURRENT_DAY';
export interface setCurrentDayIf {
    type: typeof SET_CURRENT_DAY
    currentDay: DayDto
}

export type Types = setCurrentWeekScheduleIf | setCurrentDayIf// | - pipe dodaje kolejne interfejsy akcji