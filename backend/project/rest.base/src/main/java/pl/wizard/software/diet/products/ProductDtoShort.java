package pl.wizard.software.diet.products;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.wizard.software.core.AbstractDtoShort;

@Data
@NoArgsConstructor
class ProductDtoShort extends AbstractDtoShort {

    private String name;

    @Builder
    ProductDtoShort(Long aId, String aName) {
        super(aId);
        name = aName;
    }
}
