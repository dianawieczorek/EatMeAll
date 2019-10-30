package pl.wizard.software.diet.product;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.wizard.software.core.AbstractDto;

@Data
@NoArgsConstructor
public class ProductDto extends AbstractDto {

    private String name;
    private Double calorific;
    private Double protein;
    private Double fat;
    private Double carbohydrates;
    private Double roughage;
    private String productType;

    @Builder
    ProductDto(Long aId, int aVersion, String aName, Double aCalorific, Double aProtein, Double aFat, Double aCarbohydrates, Double aRoughage, String aProductType) {
        super(aId, aVersion);
        name = aName;
        calorific = aCalorific;
        protein = aProtein;
        fat = aFat;
        carbohydrates = aCarbohydrates;
        roughage = aRoughage;
        productType = aProductType;
    }
}
