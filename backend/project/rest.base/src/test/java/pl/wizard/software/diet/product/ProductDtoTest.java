package pl.wizard.software.diet.product;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.junit.jupiter.api.Test;
import pl.wizard.software.diet.products.ProductEntity;

import static org.junit.jupiter.api.Assertions.*;

class ProductDtoTest {

    @Test
    void shouldReturnCorrectDtoByEntity() {
        ProductEntity ent = ProductEntity.builder().aId(1l)
                .aVersion(0)
                .aCalorific(1.1)
                .aFat(2.2)
                .aProtein(3.3)
                .aProductType(ProductEntity.ProductTypeEnum.CEREALS)
                .aName("TEST_1")
                .aRoughage(7.1)
                .build();

        ProductDto dto = new ProductDto(ent);

        ProductDto expected = ProductDto.builder()
                .aId(1l)
                .aVersion(0)
                .aCalorific(1.1)
                .aFat(2.2)
                .aProtein(3.3)
                .aProductType(ProductEntity.ProductTypeEnum.CEREALS.getStringName())
                .aName("TEST_1")
                .aRoughage(7.1)
                .build();

        EqualsBuilder.reflectionEquals(expected, dto);
    }

}