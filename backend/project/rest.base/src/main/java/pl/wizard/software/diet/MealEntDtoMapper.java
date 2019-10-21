package pl.wizard.software.diet;



import java.util.stream.Collectors;

class MealEntDtoMapper {

//    static MealEntity mapFromDto(MealDto aDto) {
//        return MealEntity.builder()
//                 .aId(aDto.getId())
//                .aVersion(aDto.getVersion())
//                .aCalorific(aDto.getCalorific())
//                .aFat(aDto.getFat())
//                .aProtein(aDto.getProtein())
//                .aProductType(ProductEntity.ProductTypeEnum.parse(aDto.getProductType()))
//                .aName(aDto.getName())
//                .aRoughage(aDto.getRoughage())
//                .build();
//    }

//    static MealEntity mapFromDto(ProductDtoShort aShortDto) {
//        return ProductEntity.builder()
//                .aId(aShortDto.getId())
//                .aName(aShortDto.getName())
//                .build();
//    }
//
    static MealDto mapToDto(MealEntity aEntity) {
        return MealDto.builder()
                .aId(aEntity.getId())
                .aVersion(aEntity.getVersion())
                .aName(aEntity.getName())
                .aDescription(aEntity.getDescription())
                .aMealTimes(aEntity.getMealTimes())
                .aAuthor(aEntity.getAuthor())
                .aParts(aEntity.getParts().stream().map(ProductEntDtoMapper::mapToShortDto).collect(Collectors.toList()))
                .aSteps(aEntity.getSteps().stream().map(MealPrepareStep::getStep).collect(Collectors.toList()))
                .aCalorific(0.0)
                .aFat(0.0)
                .aProtein(0.0)
                .aRoughage(0.0)
                .build();
    }
//
//    static MealDtoShort mapToShortDto(MealEntity aEntity) {
//        return ProductDtoShort.builder()
//                .aId(aEntity.getId())
//                .aName(aEntity.getName())
//                .build();
//    }
}
