package pl.wizard.software.diet;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

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
                .aSteps(new ArrayList<>())
                .build();
        aDto.getParts().forEach(p -> ret.addPart(new ProductEntity(p.getId(),0), p.getAmount()));

        Iterator<String> stepIterator = aDto.getSteps().iterator();
        int index=0;
        while(stepIterator.hasNext()){
            String step = stepIterator.next();
            ret.addStep(MealPrepareStepEntity.builder().aStep(step).aOrderNumber(index).build());
            index++;
        }
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
                                .aId(m.getPart().getId())
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
