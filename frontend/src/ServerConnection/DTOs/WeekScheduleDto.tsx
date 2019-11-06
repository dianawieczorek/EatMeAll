export interface WeekScheduleDto {
    id: number,
    version: number,
    days: Array<DayDietDto>
}

export interface DayDietDto {
    id: number,
    meals: Array<MealDto>
}

export interface MealDto {
    id: number,
    version: number,
    name: string,
    description: string,
    mealTimes: Array<string>,
    author: string,
    parts: Array<PartDTO>,
    steps: Array<string>,
    calorific: number,
    protein: number
    fat: number,
    carbohydrates: number,
    roughage: number
}

export interface PartDTO {
    id: number,
    name: string,
    specialAmount: number,
    amount: number
}
