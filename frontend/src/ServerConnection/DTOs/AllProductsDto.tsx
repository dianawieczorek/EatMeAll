export interface SingleCategoryDto {
    products: Array<ProductsInCategoryDto>,
    type: string
}

export interface ProductsInCategoryDto {
    name: string,
    id: number
}
