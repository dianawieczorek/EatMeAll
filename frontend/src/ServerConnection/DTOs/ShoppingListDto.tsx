export interface GroupproductsDto {
    name: string,
    products: Array<ProductDto>
}

export interface ProductDto {
    id: number,
    name: string,
    specialAmount: number,
    amount: number,
    productType: string,
}
