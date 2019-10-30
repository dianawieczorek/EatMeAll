package pl.wizard.software.diet.meal;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.wizard.software.core.AbstractDto;
import pl.wizard.software.diet.product.ProductDtoShort;

import java.util.Collection;
import java.util.List;

@NoArgsConstructor
@Data
class MealDto extends AbstractDto {

    private String name;
    private String description;
    private Collection<MealEntity.MealTimeEnum> mealTimes;
    private String author;
    private List<MealPartDto> parts;
    private Collection<String> steps;
    private Double calorific;
    private Double protein;
    private Double fat;
    private Double carbohydrates;
    private Double roughage;

    @Builder
    MealDto(Long aId, int aVersion, String aName, String aDescription, Collection<MealEntity.MealTimeEnum> aMealTimes, String aAuthor, List<MealPartDto> aParts, Collection<String> aSteps, Double aCalorific, Double aProtein, Double aFat, Double aCarbohydrates, Double aRoughage) {
        super(aId, aVersion);
        name = aName;
        description = aDescription;
        mealTimes = aMealTimes;
        author = aAuthor;
        parts = aParts;
        steps = aSteps;
        calorific = aCalorific;
        protein = aProtein;
        fat = aFat;
        carbohydrates = aCarbohydrates;
        roughage = aRoughage;
    }
}