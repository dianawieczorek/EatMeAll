import {DayDietDto, MealDto, WeekScheduleDto} from "../../ServerConnection/DTOs/WeekScheduleDto";

export default class Member {
    name: string;
    weekSchedule: WeekScheduleDto;


    constructor(aUserName: string) {
        this.name = aUserName;
        this.weekSchedule = {id:0,version:0,days:[]};
        const tempArray2: Array<DayDietDto> = [];
        for (let day = 0; day < 7; day++) {
            const tempArray: Array<MealDto> = [];
            for (let meal = 0; meal < 5; meal++) {
                tempArray.push({
                    id: -1,
                    version: 0,
                    mealTimes: [""],
                    name: "",
                    description: "",
                    author: "",
                    parts: [],
                    steps: [],
                    calorific: 0,
                    carbohydrates: 0,
                    fat: 0,
                    protein: 0,
                    roughage: 0
                })
            }
            tempArray2.push({id:-1, meals: tempArray});
        }
        this.weekSchedule={id:-1,version:0,days: tempArray2};
    }
}

