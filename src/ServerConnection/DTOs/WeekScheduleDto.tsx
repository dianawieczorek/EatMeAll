export interface DayDto {
    meals: Array<MealDto>
}

export interface MealDto {
    idMeal: number,
    mealTime: string,
    title: string,
    shortDescription: string
}