package pl.wizard.software.diet.meal;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

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
    public ResponseEntity create(@Valid @RequestBody MealDto aMeal) {
        MealEntity ent = MealEntDtoMapper.mapFromDto(aMeal);
        @Valid MealEntity saved = mealDao.save(ent);
        return ResponseEntity.ok(MealEntDtoMapper.mapToShortDto(saved));
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

    @GetMapping("/random")
    public ResponseEntity<Collection<MealDto>>randomMeals(@RequestParam int count, @RequestParam int mealTime){
        List<MealEntity> entities = mealDao.randomMeals(count, mealTime);

        Set<MealDto> ret = entities.stream().map(MealEntDtoMapper::mapToDto).collect(Collectors.toSet());

        return ResponseEntity.ok(ret);
    }
}