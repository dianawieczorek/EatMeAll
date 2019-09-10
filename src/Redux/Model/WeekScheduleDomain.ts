import {DayDto} from "../../ServerConnection/DTOs/WeekScheduleDto";

export default interface WeekScheduleDomain{
    user: string;
    weekSchedule: Array<DayDto>;
}