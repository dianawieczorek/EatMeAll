package pl.wizard.software.diet;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/v1/meal")
@Slf4j
@RequiredArgsConstructor
public class MealApi {
    private final MealDao mealDao;

    @GetMapping
    public ResponseEntity<Collection<MealEntity>> findAll() {
        return ResponseEntity.ok(mealDao.findAll());
    }

    @PostMapping
    public ResponseEntity create(@Valid @RequestBody MealEntity aMeal) {
        aMeal.getSteps().forEach(s -> s.setMeal(aMeal));
        @Valid MealEntity saved = mealDao.save(aMeal);
        return ResponseEntity.ok(MealEntDtoMapper.mapToDto(saved));
    }

    @GetMapping("/{id}")
    public ResponseEntity<MealDto> findById(@PathVariable Long id) {
        Optional<MealEntity> stock = mealDao.findById(id);
        if (!stock.isPresent()) {
            log.error("Id " + id + " is not existed");
            ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(MealEntDtoMapper.mapToDto(stock.get()));
    }

    @PutMapping("/{id}")
    public ResponseEntity<MealEntity> update(@PathVariable Long id, @Valid @RequestBody MealEntity product) {
        if (!mealDao.findById(id).isPresent()) {
            log.error("Id " + id + " is not existed");
            ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(mealDao.save(product));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        if (!mealDao.findById(id).isPresent()) {
            log.error("Id " + id + " is not existed");
            ResponseEntity.badRequest().build();
        }

        mealDao.deleteById(id);

        return ResponseEntity.ok().build();
    }
}