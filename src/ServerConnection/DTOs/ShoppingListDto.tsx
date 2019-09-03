export interface GroupproductsDto {
    baking: Array<ProductDto>,
    dairy: Array<ProductDto>,
    drink: Array<ProductDto>,
    meat: Array<ProductDto>,
    fish: Array<ProductDto>,
    fruit: Array<ProductDto>,
    vegetable: Array<ProductDto>,
    grains: Array<ProductDto>,
    spice: Array<ProductDto>,
    other: Array<ProductDto>,
    unknown: Array<ProductDto>
}

export interface ProductDto {
    amount: number,
    category: string,
    name: string,
    unit: string,
}
