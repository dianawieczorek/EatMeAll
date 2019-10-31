package pl.wizard.software.diet.product;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class ProductTypeDto  {

    private String name;
    private List<ProductDtoShort> products;

    ProductTypeDto(String aName) {
        name = aName;
        products = new ArrayList<>();
    }
}
