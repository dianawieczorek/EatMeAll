package pl.wizard.software.diet.meals;

import lombok.Data;
import lombok.NoArgsConstructor;
import pl.wizard.software.AbstractBaseEntity;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
@Data
@NoArgsConstructor
class MealPrepareStep extends AbstractBaseEntity {

    private int orderNumber;
    private String step;
    @ManyToOne
    private MealEntity meal;

    MealPrepareStep(Long aId, int aVersion, int aOrderNumber, String aStep) {
        super(aId, aVersion);
        orderNumber = aOrderNumber;
        step = aStep;
    }

    MealPrepareStep(String aStep) {
        super(null, 0);
        step = aStep;
    }
}
