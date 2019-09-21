import {DayDto, MealDto} from "../../ServerConnection/DTOs/WeekScheduleDto";

export default class Geberish243874587293874987 {
    member: string;
    weekSchedule: Array<DayDto>;


    constructor() {
        this.member = "member";
        this.weekSchedule = []
        for (let day = 0; day < 7; day++) {
            const tempArray: Array<MealDto> = [];
            for (let meal = 0; meal < 5; meal++) {
                tempArray.push({
                    idMeal: -1,
                    mealTime: "LUNCH",
                    title: "x",
                    shortDescription: "",
                    amountCalories: 0,
                    amountCarbohydrates: 0,
                    amountFat: 0,
                    amountProtein: 0
                })
            }
            this.weekSchedule.push({meals: tempArray});
        }
    }
}

