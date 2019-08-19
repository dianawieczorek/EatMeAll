export interface MealDetailsDto {
    meals: Array<MealRecipeDto>
}

export interface MealRecipeDto {
    amountCalories: number,
    authorReceipt: string,
    idMeal: number,
    products: ProductsDto,
    recipe: receiptDto
    shortDescription: string,
    title: string,
    typeMeal: typeMealDto
}

export interface ProductsDto {
    amount: number,
    category: string,
    name: string,
    specialUnit: string,
    unit: string
}

export interface receiptDto {
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
    mealTime: string
}