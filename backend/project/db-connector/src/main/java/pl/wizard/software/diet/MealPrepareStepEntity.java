package pl.wizard.software.diet;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.wizard.software.AbstractBaseEntity;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
@Data
@NoArgsConstructor
class MealPrepareStepEntity extends AbstractBaseEntity {

    private int orderNumber;
    private String step;
    @ManyToOne
    private MealEntity meal;

    @Builder
    MealPrepareStepEntity(Long aId, int aVersion, int aOrderNumber, String aStep) {
        super(aId, aVersion);
        orderNumber = aOrderNumber;
        step = aStep;
    }

    MealPrepareStepEntity(String aStep) {
        super(null, 0);
        step = aStep;
    }
}
