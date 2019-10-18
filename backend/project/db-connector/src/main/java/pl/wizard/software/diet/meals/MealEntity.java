package pl.wizard.software.diet.meals;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.wizard.software.AbstractBaseEntity;
import pl.wizard.software.diet.products.ProductEntity;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class MealEntity extends AbstractBaseEntity {

    private String name;
    private String description;
    @ElementCollection(targetClass=MealTimeEnum.class, fetch = FetchType.EAGER)
    @Enumerated(EnumType.ORDINAL)
    private Collection<MealTimeEnum> mealTimes;
    private String author;
    @OrderBy
    @ManyToMany
    @JoinTable(name = "R_meal_product",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "meal_id")
    )
    private List<ProductEntity> parts;
    @OneToMany(mappedBy="meal", cascade = CascadeType.ALL)
    private Collection<MealPrepareStep> steps;

    @Builder
    MealEntity(Long aId, int aVersion, String aName, String aDescription, Collection<MealTimeEnum> aMealTimes, String aAuthor, List<ProductEntity> aParts, Collection<MealPrepareStep> aSteps) {
        super(aId, aVersion);
        name = aName;
        description = aDescription;
        mealTimes = aMealTimes;
        author = aAuthor;
        parts = aParts;
        steps = aSteps;
    }

    public enum MealTimeEnum{
        BREAKFAST(1),LUNCH(2),DINNER(3),DESSERT(4),SUPPER(5);

        private int mealTimeInt;

        MealTimeEnum(int aType) {
            mealTimeInt = aType;
        }

        public int getMealTimeInt() {
            return mealTimeInt;
        }

        public static MealEntity.MealTimeEnum parse(int aMealTime) {
            for (MealEntity.MealTimeEnum enumm : MealEntity.MealTimeEnum.values()) {
                if (enumm.mealTimeInt == aMealTime) {
                    return enumm;
                }
            }
            throw new IllegalArgumentException("Cannot recognize products type" + aMealTime);
        }
    }
}
