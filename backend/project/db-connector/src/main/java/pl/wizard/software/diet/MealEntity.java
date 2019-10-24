package pl.wizard.software.diet;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.wizard.software.AbstractBaseEntity;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name="MEALS")
public class MealEntity extends AbstractBaseEntity {

    private String name;
    private String description;
    @ElementCollection(targetClass=MealTimeEnum.class)
    @Enumerated(EnumType.ORDINAL)
    private Collection<MealTimeEnum> mealTimes;
    private String author;
    @OrderBy
    @OneToMany(mappedBy = "part", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Collection<MealPartEntity> parts;
    @OneToMany(mappedBy="meal", cascade = CascadeType.ALL)
    private Collection<MealPrepareStepEntity> steps;

    @Builder
    MealEntity(Long aId, int aVersion, String aName, String aDescription, Collection<MealTimeEnum> aMealTimes, String aAuthor, List<MealPartEntity> aParts, Collection<MealPrepareStepEntity> aSteps) {
        super(aId, aVersion);
        name = aName;
        description = aDescription;
        mealTimes = aMealTimes;
        author = aAuthor;
        parts = aParts;
        steps = aSteps;
    }

    void addPart(ProductEntity aProduct, Integer aAmount) {
        MealPartEntity mealPartEntity = new MealPartEntity(null, this, aProduct, aAmount);
        parts.add(mealPartEntity);
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
