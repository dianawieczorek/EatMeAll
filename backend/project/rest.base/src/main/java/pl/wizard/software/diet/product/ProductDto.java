package pl.wizard.software.diet.product;

import lombok.Builder;
import lombok.Data;
import pl.wizard.software.core.AbstractDto;
import pl.wizard.software.diet.products.ProductEntity;

@Data
public class ProductDto extends AbstractDto {

    private String name;
    private Double calorific;
    private Double protein;
    private Double fat;
    private Double carbohydrates;
    private Double roughage;
    private String productType;

    ProductDto(){
        super(null,0);
    }

    ProductDto(ProductEntity aEntity) {
        super(aEntity.getId(), aEntity.getVersion());

        name = aEntity.getName();
        calorific = aEntity.getCalorific();
        protein = aEntity.getProtein();
        fat = aEntity.getFat();
        carbohydrates = aEntity.getCarbohydrates();
        roughage = aEntity.getRoughage();
        productType = aEntity.getProductType().getStringName();
    }

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
