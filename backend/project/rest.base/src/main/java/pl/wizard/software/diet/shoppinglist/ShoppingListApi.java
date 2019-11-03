package pl.wizard.software.diet.shoppinglist;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.wizard.software.diet.meal.MealDto;
import pl.wizard.software.diet.meal.MealPartDto;
import pl.wizard.software.diet.meal.MealService;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/v1/shoppingList")
@Slf4j
@RequiredArgsConstructor
class ShoppingListApi {

    private final MealService mealService;

    @GetMapping("/{aMealIds}")
    public ResponseEntity<Collection<MealPartDto>> generateShoppingList(@PathVariable long[] aMealIds) {

        List<Long> ids = Arrays.stream(aMealIds).boxed().collect(Collectors.toList());
        Map<Long,Integer> uniqIdsAndAmount = new HashMap<>();
        ids.forEach(id -> {
            if (!uniqIdsAndAmount.containsKey(id)){
                uniqIdsAndAmount.put(id,0);
            }
            else{
                uniqIdsAndAmount.put(id,uniqIdsAndAmount.get(id)+1);
            }
        });

        Set<MealDto> meals = mealService.findAllById(new ArrayList<>(uniqIdsAndAmount.keySet()));
        List<MealPartDto> parts = meals.stream().flatMap(m -> m.getParts().stream()).collect(Collectors.toList());
        HashMap<Long, MealPartDto> partMap = new HashMap<>();
        parts.forEach(p -> {
            if (!partMap.containsKey(p.getId())){
                partMap.put(p.getId(),p);
            }
            else {
                MealPartDto part = partMap.get(p.getId());
                part.setAmount(part.getAmount() + p.getAmount());
                partMap.put(p.getId(), part);
            }
        });

        Set<Long> multiMeals = uniqIdsAndAmount.keySet().stream().filter(id -> uniqIdsAndAmount.get(ids) > 0).collect(Collectors.toSet());
        multiMeals.forEach( mealId ->
                for(uniqIdsAndAmount.get(mealId);
        );


        return ResponseEntity.ok(partMap.values());
    }
}
