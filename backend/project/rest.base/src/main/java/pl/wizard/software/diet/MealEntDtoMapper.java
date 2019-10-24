package pl.wizard.software.diet;


import java.util.ArrayList;
import java.util.stream.Collectors;

class MealEntDtoMapper {

    static MealEntity mapFromDto(MealDto aDto) {
        MealEntity ret = MealEntity.builder()
                .aId(aDto.getId())
                .aVersion(aDto.getVersion())
                .aName(aDto.getName())
                .aDescription(aDto.getDescription())
                .aMealTimes(aDto.getMealTimes())
                .aAuthor(aDto.getAuthor())
                .aParts(new ArrayList<>())
                .aSteps(aDto.getSteps().stream().map(s -> MealPrepareStepEntity.builder().aStep(s).build()).collect(Collectors.toList()))
                .build();
        aDto.getParts().stream().forEach(p -> ret.addPart(new ProductEntity(p.getId(),0), p.getAmount()));
        return ret;
    }

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
                .aParts(aEntity.getParts().stream().map(m ->
                        ProductDtoShort.builder()
                                .aId(m.getId())
                                .aAmount(m.getAmount())
                                .aName(m.getPart().getName())
                                .build()).collect(Collectors.toList()))
                .aSteps(aEntity.getSteps().stream().map(MealPrepareStepEntity::getStep).collect(Collectors.toList()))
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
