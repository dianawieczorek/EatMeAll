package pl.wizard.software.diet.product;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.wizard.software.AbstractBaseEntity;
import pl.wizard.software.diet.meal.MealPartEntity;

import javax.persistence.*;
import java.util.Collection;


@Entity
@Data
@NoArgsConstructor
@Table(name = "PRODUCTS")
public class ProductEntity extends AbstractBaseEntity {
    private String name;
    private Double calorific;
    private Double protein;
    private Double fat;
    private Double carbohydrates;
    private Double roughage;
    @Enumerated(EnumType.ORDINAL)
    private ProductTypeEnum productType;
//    @OneToMany(mappedBy = "meal", cascade = CascadeType.ALL)
//    private Collection<MealPartEntity> meals;

    ProductEntity(Long aId, int aVersion) {
        super(aId, aVersion);
    }

    @Builder
    ProductEntity(Long aId, int aVersion, String aName, Double aCalorific, Double aProtein, Double aFat, Double aCarbohydrates, Double aRoughage, ProductTypeEnum aProductType, Collection<MealPartEntity> aMeals) {
        this(aId, aVersion);
        name = aName;
        calorific = aCalorific;
        protein = aProtein;
        fat = aFat;
        carbohydrates = aCarbohydrates;
        roughage = aRoughage;
        productType = aProductType;
//        meals = aMeals;
    }

    public enum ProductTypeEnum {
        FAKE("NUMBER_0"), CEREALS("zboża"), DAIRY("przetwory mleczne"), HAMS("wędliny"), RAW_MEAT("mięso"), POULTRY("drób"), EGGS("jajka"), FATS("tłuszcze"), MUSHROMS("grzyby"), NUTS("orzechy"),
        FRUITS("owoce"), SPICES("przyprawy"), FISH("ryby"), VEGETABLES("warzywa"), ALCOHOLS("alkohole"), DRINKS("napoje"), SWEETS("słodycze"), OTHERS("inne");

        private String productType;

        ProductTypeEnum(String aType) {
            productType = aType;
        }

        String getStringName() {
            return productType;
        }

        static ProductTypeEnum parse(String aStringProductType) {
            for (ProductTypeEnum enumm : ProductTypeEnum.values()) {
                if (enumm.productType.equalsIgnoreCase(aStringProductType)) {
                    return enumm;
                }
            }
            throw new IllegalArgumentException("Cannot recognize products type" + aStringProductType);
        }
    }
}


