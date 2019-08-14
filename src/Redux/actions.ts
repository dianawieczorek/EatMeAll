import {
    SET_CURRENT_DAY,
    SET_CURRENT_WEEK_SCHEDULE, setCurrentDayIf,
    setCurrentWeekScheduleIf
} from "./actionTypes";


import {DayDto} from "../ServerConnection/DTOs/WeekScheduleDto";


export const setCurrentWeekSchedule = (aCurrentWeekSchedule:Array<DayDto> ):setCurrentWeekScheduleIf => {
    return {
        type: SET_CURRENT_WEEK_SCHEDULE,
        currentWeekSchedule: aCurrentWeekSchedule
    }
};
export const setCurrentDay = (aCurrentDay:DayDto ):setCurrentDayIf => {
    return {
        type: SET_CURRENT_DAY,
        currentDay: aCurrentDay
    }
};
