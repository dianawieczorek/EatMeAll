export interface MealDetailsDto {
    [0]: MealRecipeDto
}

export interface MealRecipeDto {
    amountCalories: number,
    amountCarbohydrates: number,
    amountFat: number,
    amountProtein: number,
    authorReceipt: string,
    idMeal: number,
    products: Array<ProductsDto>,
    receiptDTO: recipeDto
    shortDescription: string,
    title: string,
    typeMeal: Array<typeMealDto>
}

export interface ProductsDto {
    amount: number,
    category: string,
    name: string,
    specialUnit: string,
    unit: string
}

export interface recipeDto {
    description: string,
    idReceipt: number,
    prepareTime: number,
    steps: Array<stepsDto>
}

export interface stepsDto {
    header: string,
    idStep: number,
    stepNumber: number
}

export interface typeMealDto {
    idTypeMeal: number,
    mealTimes: Array<string>
}

export interface PostMealRecipieDto {
    name: string
    description: string
    mealTimes: Array<number>
    prepareTime: number
    author: string
    parts: Array<PostProductDto>
    steps: Array<String>
}

export interface PostProductDto{
    id: number
    name:string
    amount: number
    specialAmount: string
}