package pl.wizard.software.diet.meal;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.wizard.software.diet.product.ProductDtoShort;

@NoArgsConstructor
@Data
public class MealPartDto extends ProductDtoShort {

    private String specialAmount;
    private int amount;


    @Builder
    MealPartDto(Long aId, String aName, Integer aAmount, String aSpecialAmount) {
        super(aId, aName);
        specialAmount = aSpecialAmount;
        amount = aAmount;
    }

    public MealPartDto(MealPartDto aP) {
        super(aP.getId(),aP.getName());
        specialAmount = aP.getSpecialAmount();
        amount = aP.getAmount();
    }
}
