package pl.wizard.software.diet.product;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import pl.wizard.software.core.AbstractDtoShort;

@Data
@NoArgsConstructor
public class ProductDtoShort extends AbstractDtoShort {

    private String name;

//    @Builder
    protected ProductDtoShort(Long aId, String aName) {
        super(aId);
        name = aName;
    }
}
