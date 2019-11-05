package pl.wizard.software.diet.product;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class ProductTypeDto<T>  {

    private String name;
    private List<T> products;

    public ProductTypeDto(String aName) {
        name = aName;
        products = new ArrayList<>();
    }
}
