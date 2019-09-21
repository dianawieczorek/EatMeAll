import {DayDto} from "../../ServerConnection/DTOs/WeekScheduleDto";

export default interface WeekScheduleDomain{
    member: string;
    weekSchedule: Array<DayDto>;
}