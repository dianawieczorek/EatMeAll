package pl.wizard.software.diet.meal;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;

@RestController
@RequestMapping("/v1/meal")
@Slf4j
@RequiredArgsConstructor
public class MealApi {
    private final MealService mealService;

    @GetMapping
    public ResponseEntity<Collection<MealDto>> findAll() {
        return ResponseEntity.ok(mealService.findAll());
    }

    @PostMapping
    public ResponseEntity<Long> create(@Valid @RequestBody MealDto aMeal) {
        Long id = mealService.save(aMeal);
        return ResponseEntity.ok(id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MealDto> findById(@PathVariable Long id) {
        return ResponseEntity.ok(mealService.findById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        mealService.deleteById(id);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/random")
    public ResponseEntity<Collection<MealDto>>randomMeals(@RequestParam int count, @RequestParam int mealTime){
        return ResponseEntity.ok( mealService.randomMeals(count, mealTime));
    }
}