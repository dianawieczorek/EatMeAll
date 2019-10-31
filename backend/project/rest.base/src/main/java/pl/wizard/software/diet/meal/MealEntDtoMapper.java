package pl.wizard.software.diet.meal;


import pl.wizard.software.diet.product.ProductDtoShort;
import pl.wizard.software.diet.product.ProductEntity;
import pl.wizard.software.diet.product.ProductService;

import java.util.ArrayList;
import java.util.Iterator;
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
                .aSteps(new ArrayList<>())
                .build();
        aDto.getParts().forEach(p -> ret.addPart(ProductService.createEmptyEntity(p.getId()), p.getAmount(), p.getSpecialAmount()));

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

    static MealDto mapToDto(MealEntity aEntity) {
        double calorific=0;
        double fat=0;
        double protein=0;
        double roughage=0;
        double carbohydrates=0;
        for (MealPartEntity part: aEntity.getParts() ) {
            ProductEntity product = part.getPart();
            calorific += product.getCalorific()/100*part.getAmount();
            fat += product.getFat()/100*part.getAmount();
            protein += product.getProtein()/100*part.getAmount();
            roughage += product.getRoughage()/100*part.getAmount();
            carbohydrates += product.getCarbohydrates()/100*part.getAmount();
        }

        return MealDto.builder()
                .aId(aEntity.getId())
                .aVersion(aEntity.getVersion())
                .aName(aEntity.getName())
                .aDescription(aEntity.getDescription())
                .aMealTimes(aEntity.getMealTimes())
                .aAuthor(aEntity.getAuthor())
                .aParts(aEntity.getParts().stream().map(m ->
                        MealPartDto.builder()
                                .aId(m.getPart().getId())
                                .aAmount(m.getAmount())
                                .aSpecialAmount(m.getSpecialAmount())
                                .aName(m.getPart().getName())
                                .build()).collect(Collectors.toList()))
                .aSteps(aEntity.getSteps().stream().map(MealPrepareStepEntity::getStep).collect(Collectors.toList()))
                .aCalorific(calorific)
                .aCarbohydrates(carbohydrates)
                .aFat(fat)
                .aProtein(protein)
                .aRoughage(roughage)
                .build();
    }


    static MealDto mapToShortDto(MealEntity aEntity) {
        return MealDto.builder()
                .aId(aEntity.getId())
                .aVersion(aEntity.getVersion())
                .aName(aEntity.getName())
                .aDescription(aEntity.getDescription())
                .aMealTimes(aEntity.getMealTimes())
                .aAuthor(aEntity.getAuthor())
                .build();
    }
}
