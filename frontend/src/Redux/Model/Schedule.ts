import {MealDto, PartDTO} from "../../ServerConnection/DTOs/WeekScheduleDto";

export class EmptyMeal implements MealDto {
    id: number;
    version: number;
    name: string;
    description: string;
    mealTimes: Array<string>;
    author: string;
    parts: Array<PartDTO>;
    steps: Array<string>;
    calorific: number;
    protein: number;
    fat: number;
    carbohydrates: number;
    roughage: number;

    constructor(){
        this.id = -1;
        this.version=0;
        this.name = "";
        this.description = "";
        this.mealTimes = [""];
        this.author="";
        this.parts=[];
        this.steps=[];
        this.calorific = 0;
        this.carbohydrates = 0;
        this.fat = 0;
        this.protein = 0;
        this.roughage=0;
    }
}