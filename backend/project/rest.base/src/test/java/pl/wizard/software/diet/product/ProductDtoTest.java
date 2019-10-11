package pl.wizard.software.diet.product;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.junit.jupiter.api.Test;
import pl.wizard.software.diet.products.ProductEntity;

import javax.validation.constraints.AssertTrue;

import static org.junit.jupiter.api.Assertions.*;

class ProductDtoTest {

    @Test
    void shouldReturnCorrectDtoByEntity() {
        //given
        ProductEntity ent = ProductEntity.builder().aId(1L)
                .aVersion(0)
                .aCalorific(1.1)
                .aFat(2.2)
                .aProtein(3.3)
                .aProductType(ProductEntity.ProductTypeEnum.CEREALS)
                .aName("TEST_1")
                .aRoughage(7.1)
                .build();
        ProductDto expected = ProductDto.builder()
                .aId(1L)
                .aVersion(0)
                .aCalorific(1.1)
                .aFat(2.2)
                .aProtein(3.3)
                .aProductType(ProductEntity.ProductTypeEnum.CEREALS.getStringName())
                .aName("TEST_1")
                .aRoughage(7.1)
                .build();

        //when
        ProductDto dto = new ProductDto(ent);

        //then
        assertTrue(EqualsBuilder.reflectionEquals(expected, dto));
    }

}