export interface WeekScheduleDto {
    days: Array<DayDto>
}

export interface DayDto {
    meals: Array<MealDto>
}

export interface MealDto {
    idMeal: number,
    mealTime: string,
    title: string,
    shortDescription: string
}