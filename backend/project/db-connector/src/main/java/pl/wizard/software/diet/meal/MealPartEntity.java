package pl.wizard.software.diet.meal;

import lombok.*;
import pl.wizard.software.diet.product.ProductEntity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="R_MEAL_PRODUCT")
@Setter
@Getter
@NoArgsConstructor
public class MealPartEntity implements Serializable {

    @Id
    @ManyToOne
    @JoinColumn
    private MealEntity meal;

    @Id
    @ManyToOne
    @JoinColumn
    private ProductEntity part;

    private Integer amount;
    private String specialAmount;

    @Builder
    MealPartEntity(MealEntity aMeal, ProductEntity aPart, Integer aAmount, String aSpecialAmount) {
        meal = aMeal;
        part = aPart;
        amount = aAmount;
        specialAmount = aSpecialAmount;
    }

    @Override
    public boolean equals(Object aO) {
        if (this == aO) return true;
        if (aO == null || getClass() != aO.getClass()) return false;

        MealPartEntity that = (MealPartEntity) aO;

        if (meal != null ? !meal.equals(that.meal) : that.meal != null) return false;
        return part != null ? part.equals(that.part) : that.part == null;
    }

    @Override
    public int hashCode() {
        int result = meal != null ? meal.hashCode() : 0;
        result = 31 * result + (part != null ? part.hashCode() : 0);
        return result;
    }
}
