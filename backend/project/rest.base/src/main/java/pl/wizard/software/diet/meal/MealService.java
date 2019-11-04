package pl.wizard.software.diet.meal;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MealService {

    private final MealDao mealDao;

    Collection<MealDto> findAll() {
        List<MealEntity> meals = mealDao.findAll();
        return meals.stream().map(MealEntDtoMapper::mapToDto).collect(Collectors.toSet());
    }

    MealDto findById(Long id) {
        Optional<MealEntity> retEnt = mealDao.findById(id);
        return mapEntToDto(retEnt);
    }

    Long save(MealDto aMeal) {
        MealEntity ent = MealEntDtoMapper.mapFromDto(aMeal);
        @Valid MealEntity saved = mealDao.save(ent);
        return saved.getId();
    }

    private MealDto mapEntToDto(Optional<MealEntity> aRetEnt) {
        if (aRetEnt.isPresent()){
            return MealEntDtoMapper.mapToDto(aRetEnt.get());
        }
        else
        {
            throw new NoSuchElementException();
        }
    }

    void deleteById(Long id) {
        mealDao.deleteById(id);
    }

    public Set<MealDto> randomMeals(int aCount, int aMealTime) {
        List<MealEntity> entities = mealDao.randomMeals(aCount, aMealTime);

        return entities.stream().map(MealEntDtoMapper::mapToDto).collect(Collectors.toSet());
    }

    public Set<MealDto> findAllById(List<Long> aIds) {
        return mealDao.findAllById(aIds).stream().map(e -> mapEntToDto(Optional.of(e))).collect(Collectors.toSet());
    }
}
