package pl.wizard.software.diet;

import lombok.*;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Setter
@Getter
@NoArgsConstructor
class MealPartEntityPk implements Serializable {

    private Long mealId;
    private Long partId;

    @Builder
    MealPartEntityPk(Long aMealId, Long aPartId) {
        mealId = aMealId;
        partId = aPartId;
    }

    @Override
    public boolean equals(Object aO) {
        if (this == aO) return true;
        if (aO == null || getClass() != aO.getClass()) return false;

        MealPartEntityPk that = (MealPartEntityPk) aO;

        if (!mealId.equals(that.mealId)) return false;
        return partId.equals(that.partId);
    }

    @Override
    public int hashCode() {
        int result = mealId.hashCode();
        result = 31 * result + partId.hashCode();
        return result;
    }
}
