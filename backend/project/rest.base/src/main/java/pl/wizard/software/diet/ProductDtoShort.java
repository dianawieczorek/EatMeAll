package pl.wizard.software.diet;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.wizard.software.core.AbstractDtoShort;

@Data
@NoArgsConstructor
public class ProductDtoShort extends AbstractDtoShort {

    private String name;
    private Integer amount;

    @Builder
    ProductDtoShort(Long aId, String aName, Integer aAmount) {
        super(aId);
        name = aName;
        amount = aAmount;
    }
}
