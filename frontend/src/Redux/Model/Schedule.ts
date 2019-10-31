import {MealDto} from "../../ServerConnection/DTOs/WeekScheduleDto";

export class EmptyMeal implements MealDto {
    idMeal: number;
    mealTimes: Array<string>;
    title: string;
    shortDescription: string;
    amountCalories: number;
    amountCarbohydrates: number;
    amountFat: number;
    amountProtein: number;

    constructor(){
        this.idMeal = -1;
        this.mealTimes = [""];
        this.title = "";
        this.shortDescription = "";
        this.amountCalories = 0;
        this.amountCarbohydrates = 0;
        this.amountFat = 0;
        this.amountProtein = 0;
    }
}