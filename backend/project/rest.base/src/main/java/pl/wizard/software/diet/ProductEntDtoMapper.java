package pl.wizard.software.diet;

class ProductEntDtoMapper {

    static ProductEntity mapFromDto(ProductDto aDto) {
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

    static ProductEntity mapFromDto(ProductDtoShort aShortDto) {
        return ProductEntity.builder()
                .aId(aShortDto.getId())
                .aName(aShortDto.getName())
                .build();
    }

    static ProductDto mapToDto(ProductEntity aEntity) {
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

    static ProductDtoShort mapToShortDto(ProductEntity aEntity) {
        return ProductDtoShort.builder()
                .aId(aEntity.getId())
                .aName(aEntity.getName())
                .build();
    }
}
