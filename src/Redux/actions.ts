import {
   SET_CURRENT_WEEK_SCHEDULE,
    setCurrentWeekScheduleIf
} from "./actionTypes";


import {DayDto} from "../ServerConnection/DTOs/WeekScheduleDto";


export const setCurrentWeekSchedule = (aCurrentWeekSchedule:Array<DayDto> ):setCurrentWeekScheduleIf => {
    return {
        type: SET_CURRENT_WEEK_SCHEDULE,
        currentWeekSchedule: aCurrentWeekSchedule
    }
};
