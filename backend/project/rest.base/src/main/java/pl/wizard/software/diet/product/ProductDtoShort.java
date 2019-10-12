package pl.wizard.software.diet.product;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.wizard.software.core.AbstractDtoShort;

@Data
@NoArgsConstructor
class ProductDtoShort extends AbstractDtoShort {

    private String name;
    private String productType;

    @Builder
    ProductDtoShort(Long aId, String aName, String aProductType) {
        super(aId);
        name = aName;
        productType = aProductType;
    }
}
