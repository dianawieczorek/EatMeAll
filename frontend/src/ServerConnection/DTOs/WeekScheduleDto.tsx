export interface DayDietDto {
    meals: Array<MealDto>
}

export interface MealDto {
    idMeal: number,
    mealTimes: Array<string>,
    title: string,
    shortDescription: string,
    amountCalories: number,
    amountCarbohydrates: number,
    amountFat: number,
    amountProtein: number
}