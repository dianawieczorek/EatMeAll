import {
    ADD_ITEM, addItemAction, SET_CURRENT_WEEK_SCHEDULE,
    setCurrentWeekScheduleIf
} from "./actionTypes";
import {WeekScheduleDto} from "../ServerConnection/DTOs/WeekScheduleDto";


export const addItem = (aNewItem:string ):addItemAction => {
    return {
        type: ADD_ITEM,
        newItem: aNewItem
    }
};

export const setCurrentWeekSchedule = (aCurrentWeekSchedule:WeekScheduleDto ):setCurrentWeekScheduleIf => {
    return {
        type: SET_CURRENT_WEEK_SCHEDULE,
        currentWeekSchedule: aCurrentWeekSchedule
    }
};
