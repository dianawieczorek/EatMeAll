package pl.wizard.software.diet;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="R_MEAL_PRODUCT")
@Setter
@Getter
@NoArgsConstructor
class MealPartEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    Long id;

    @ManyToOne
    private MealEntity meal;

    @ManyToOne
    private ProductEntity part;

    private Integer amount;

    @Builder
    MealPartEntity(Long aId, MealEntity aMeal, ProductEntity aPart, Integer aAmount) {
        id = aId;
        meal = aMeal;
        part = aPart;
        amount = aAmount;
    }

    @Override
    public boolean equals(Object aO) {
        if (this == aO) return true;
        if (aO == null || getClass() != aO.getClass()) return false;

        MealPartEntity that = (MealPartEntity) aO;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
