package pl.wizard.software.diet.shoppinglist;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.platform.runner.JUnitPlatform;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;
import pl.wizard.software.diet.meal.MealDto;
import pl.wizard.software.diet.meal.MealPartDto;
import pl.wizard.software.diet.meal.MealService;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertTrue;


@ExtendWith(MockitoExtension.class)
@RunWith(JUnitPlatform.class)
class ShoppingListApiTest {

    @Mock
    private MealService mealService;
    private MealPartDto p1;
    private MealPartDto p2;
    private MealPartDto p3;


    @Test
    void shouldGenerateCorrectShoppingListEventMealsHasTheSameProductInRecipie(){
        ArrayList<Long> idList = new ArrayList<>();
        idList.add(1L);
        idList.add(2L);
        Set<MealDto> retMeals = prepareMeals();
        Mockito.lenient().when(mealService.findAllById(idList)).thenReturn(retMeals);
        ShoppingListApi shoppingListApi = new ShoppingListApi(mealService);

        ArrayList<MealPartDto> expected = new ArrayList<>();
        MealPartDto p1 = new MealPartDto();
        p1.setId(this.p1.getId());
        p1.setName(this.p1.getName());
        p1.setAmount(200);
        expected.add(p1);
        expected.add(p2);
        expected.add(p3);


        ResponseEntity<Collection<MealPartDto>> result = shoppingListApi.generateShoppingList(idList.stream().mapToLong(l -> l).toArray());

        expected.forEach(expectedProduct ->
                assertTrue(EqualsBuilder.reflectionEquals(expectedProduct, result.getBody().stream().filter(resultProd -> resultProd.getId().equals(expectedProduct.getId())).findAny().get()))
        );
    }

    private Set<MealDto> prepareMeals() {
        Set<MealDto> ret = new HashSet<>();

        ArrayList<MealPartDto> parts1 = new ArrayList<>();
        p1 = new MealPartDto();
        p1.setId(1L);
        p1.setName("P1");
        p1.setAmount(100);
        parts1.add(p1);
        p2 = new MealPartDto();
        p2.setId(2L);
        p2.setName("P2");
        p2.setAmount(10);
        parts1.add(p2);

        MealDto m1 = new MealDto();
        m1.setId(1L);
        m1.setName("M1");
        m1.setParts(parts1);

        ArrayList<MealPartDto> parts2 = new ArrayList<>();
        p3 = new MealPartDto();
        p3.setId(3L);
        p3.setName("P3");
        p3.setAmount(3);
        parts2.add(p1);
        parts2.add(p3);

        MealDto m2 = new MealDto();
        m2.setId(1L);
        m2.setName("M1");
        m2.setParts(parts2);

        ret.add(m1);
        ret.add(m2);
        return ret;
    }


}