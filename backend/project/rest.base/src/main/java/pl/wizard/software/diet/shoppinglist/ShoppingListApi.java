package pl.wizard.software.diet.shoppinglist;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.wizard.software.diet.meal.MealDto;
import pl.wizard.software.diet.meal.MealEntity;
import pl.wizard.software.diet.meal.MealService;
import pl.wizard.software.diet.product.ProductEntity;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/v1/shoppingList")
@Slf4j
@RequiredArgsConstructor
class ShoppingListApi {

    private final MealService mealService;

    @GetMapping("/{aMealIds}")
    public ResponseEntity<Collection<MealEntity>> generateShoppingList(@PathVariable long[] aMealIds) {

//        List<Long> ids = Arrays.stream(aMealIds).boxed().collect(Collectors.toList());
//        z tego trzeba zrobić mapę id - ilość takich potraw
//                meal part dto nie ma informacji o typie produktu - trzeba dodać żeby zwrócić tu sensownie posortowane...
//        Map<Long,Integer> uniqIdsAndAmount = new HashMap<>();

//        Set<MealDto> meals = mealService.findAllById(new ArrayList<Long>(uniqIdsAndAmount.keySet()));
//        List<ProductEntity> products = meals.stream().flatMap(m -> m.getParts().stream().map(MealPartEntity::getPart)).collect(Collectors.toList());
//
//        Set<String> productTypes = products.stream().map(p -> p.getProductType().getStringName()).collect(Collectors.toSet());
//
//        MealEntDtoMapper.mapToDto(meals.get(0));

//        HashMap<String, ProductTypeDto> hashMap = new HashMap<>();
//        productTypes.forEach(pt -> hashMap.put(pt, new ProductTypeDto(pt)));
//        productDao.findAll().forEach(p -> {
//            ProductTypeDto productType = hashMap.get(p.getProductType().getStringName());
//            productType.getProducts().add(ProductEntDtoMapper.mapToShortDto(p));
//        });

//        System.err.println(meals.size());
//        System.err.println(products.size());
//        System.err.println(productTypes.size());

        return ResponseEntity.ok(new ArrayList<>());
    }
}
