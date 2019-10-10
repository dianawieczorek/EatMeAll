import {DayDietDto, MealDto} from "../../ServerConnection/DTOs/WeekScheduleDto";

export default class Member {
    name: string;
    weekSchedule: Array<DayDietDto>;


    constructor(aUserName: string) {
        this.name = aUserName;
        this.weekSchedule = []
        for (let day = 0; day < 7; day++) {
            const tempArray: Array<MealDto> = [];
            for (let meal = 0; meal < 5; meal++) {
                tempArray.push({
                    idMeal: -1,
                    mealTime: "",
                    title: "",
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

