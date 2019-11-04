package pl.wizard.software.diet.schedule;

import lombok.Getter;
import lombok.Setter;
import pl.wizard.software.core.AbstractDtoShort;
import pl.wizard.software.diet.meal.MealDto;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ScheduleDayDto extends AbstractDtoShort {

    List<MealDto> meals;

    ScheduleDayDto() {
        meals = new ArrayList<>();
    }

    void addMeal(MealDto aMealDto) {
        meals.add(aMealDto);
    }
}
