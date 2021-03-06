export interface SingleCategoryDto {
    products: Array<ProductsInCategoryDto>,
    type: string
}

export interface ProductsInCategoryDto {
    name: string,
    id: number
}


export interface ProductWholeDataDto {
    id: number,
    name: string,
    calorific: number,
    protein: number,
    fat: number,
    carbohydrates: number,
    productType: string
}