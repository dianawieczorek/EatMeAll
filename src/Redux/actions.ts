import {
    CLOSE_MODAL, closeModalIf,
    OPEN_MODAL, openModalIf,
    SET_CURRENT_WEEK_SCHEDULE,
    setCurrentWeekScheduleIf
} from "./actionTypes";


import {DayDto} from "../ServerConnection/DTOs/WeekScheduleDto";


export const setCurrentWeekSchedule = (aCurrentWeekSchedule: Array<DayDto>): setCurrentWeekScheduleIf => {
    return {
        type: SET_CURRENT_WEEK_SCHEDULE,
        currentWeekSchedule: aCurrentWeekSchedule
    }
};

export const openModal = (aData: string): openModalIf => {
    return {
        type: OPEN_MODAL,
        data: aData
    }
};

export const closeModal = (): closeModalIf => {
    return {
        type: CLOSE_MODAL,
    }
};
