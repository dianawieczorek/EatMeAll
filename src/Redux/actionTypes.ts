import {WeekScheduleDto} from "../ServerConnection/DTOs/WeekScheduleDto";

export const ADD_ITEM = 'addItemAction'
export interface addItemAction {
    type: typeof ADD_ITEM
    newItem: string
}
export const SET_CURRENT_WEEK_SCHEDULE= 'SET_CURRENT_WEEK_SCHEDULE';
export interface setCurrentWeekScheduleIf {
    type: typeof SET_CURRENT_WEEK_SCHEDULE
    currentWeekSchedule: WeekScheduleDto
}

export type Types = addItemAction | setCurrentWeekScheduleIf// | - pipe dodaje kolejne interfejsy akcji