package pl.wizard.software.diet.meals;

import lombok.Data;
import lombok.NoArgsConstructor;
import pl.wizard.software.AbstractBaseEntity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
@Data
@NoArgsConstructor
class MealPrepareStep extends AbstractBaseEntity {

    private int orderNumber;
    private String step;
    @ManyToOne(cascade = CascadeType.ALL)
    private MealEntity meal;
}
