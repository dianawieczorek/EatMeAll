package pl.wizard.software.diet.product;

import pl.wizard.software.diet.products.ProductEntity;

class ProductEntDtoMapper {

    public static ProductEntity mapFromDto(ProductDto aDto) {
        return ProductEntity.builder()
                 .aId(aDto.getId())
                .aVersion(aDto.getVersion())
                .aCalorific(aDto.getCalorific())
                .aFat(aDto.getFat())
                .aProtein(aDto.getProtein())
                .aProductType(ProductEntity.ProductTypeEnum.parse(aDto.getProductType()))
                .aName(aDto.getName())
                .aRoughage(aDto.getRoughage())
                .build();
    }

    public static ProductEntity mapFromDto(ProductDtoShort aShortDto) {
        return ProductEntity.builder()
                .aId(aShortDto.getId())
                .aProductType(ProductEntity.ProductTypeEnum.parse(aShortDto.getProductType()))
                .aName(aShortDto.getName())
                .build();
    }

    public static ProductDto mapToDto(ProductEntity aEntity) {
        return ProductDto.builder()
                .aId(aEntity.getId())
                .aVersion(aEntity.getVersion())
                .aCalorific(aEntity.getCalorific())
                .aFat(aEntity.getFat())
                .aProtein(aEntity.getProtein())
                .aProductType(aEntity.getProductType().getStringName())
                .aName(aEntity.getName())
                .aRoughage(aEntity.getRoughage())
                .build();
    }

    public static ProductDtoShort mapToShortDto(ProductEntity aEntity) {
        return ProductDtoShort.builder()
                .aId(aEntity.getId())
                .aName(aEntity.getName())
                .aProductType(aEntity.getProductType().getStringName())
                .build();
    }
}
