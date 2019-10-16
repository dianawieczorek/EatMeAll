package pl.wizard.software.diet.products;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProductEntDtoMapperTest {

    @Test
    void shouldMapEntityToDto() {
        ProductEntity entryEntity = preapreEntity();
        ProductDto expectedDto = prepareDto();
        ProductDto mappedDto = ProductEntDtoMapper.mapToDto(entryEntity);

        assertTrue(EqualsBuilder.reflectionEquals(expectedDto, mappedDto));
    }

    @Test
    void shouldMapEntityToShortDto() {
        ProductEntity entryEntity = preapreEntity();
        ProductDtoShort expectedDto = prepareShortDto();
        ProductDtoShort mappedDto = ProductEntDtoMapper.mapToShortDto(entryEntity);

        assertTrue(EqualsBuilder.reflectionEquals(expectedDto, mappedDto));
    }

    @Test
    void shouldMapDtoToEntity() {

        ProductDto entryDto = prepareDto();
        ProductEntity expectedEntity = preapreEntity();
        ProductEntity mappedEntity = ProductEntDtoMapper.mapFromDto(entryDto);

        assertTrue(EqualsBuilder.reflectionEquals(expectedEntity, mappedEntity));

    }

    @Test
    void shouldMapShortDtoToEntity() {
        ProductDtoShort entryDto = prepareShortDto();
        ProductEntity expectedEntity = ProductEntity.builder().aId(1L)
                .aVersion(0)
                .aCalorific(null)
                .aFat(null)
                .aProtein(null)
                .aProductType(null)
                .aName("TEST_1")
                .aRoughage(null)
                .build();
        ProductEntity mappedEntity = ProductEntDtoMapper.mapFromDto(entryDto);

        assertTrue(EqualsBuilder.reflectionEquals(expectedEntity, mappedEntity));
    }

    private ProductDto prepareDto() {
        return ProductDto.builder()
                .aId(1L)
                .aVersion(1)
                .aCalorific(1.1)
                .aFat(2.2)
                .aProtein(3.3)
                .aProductType("zboża")
                .aName("TEST_1")
                .aRoughage(7.1)
                .build();
    }

    private ProductEntity preapreEntity() {
        return ProductEntity.builder().aId(1L)
                .aVersion(1)
                .aCalorific(1.1)
                .aFat(2.2)
                .aProtein(3.3)
                .aProductType(ProductEntity.ProductTypeEnum.CEREALS)
                .aName("TEST_1")
                .aRoughage(7.1)
                .build();
    }

    private ProductDtoShort prepareShortDto() {
        return ProductDtoShort.builder()
                .aId(1L)
                .aName("TEST_1")
                .build();
    }
}