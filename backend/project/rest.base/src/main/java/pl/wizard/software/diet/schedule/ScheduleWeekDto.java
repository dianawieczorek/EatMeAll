package pl.wizard.software.diet.schedule;

import lombok.*;
import pl.wizard.software.core.AbstractDto;
import pl.wizard.software.diet.meal.MealDto;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

@Getter
@Setter
public class ScheduleWeekDto extends AbstractDto {

    private List<ScheduleDayDto> days;

    ScheduleWeekDto() {
        days = new ArrayList<>();
        for (int i=0;i<7;i++){
            days.add(new ScheduleDayDto());
        }
    }

    public void addDay (ScheduleDayDto aDay){
        days.add(aDay);
    }

    void addMealsByTime(Set<MealDto> aMealDto) {
        Iterator<MealDto> iter = aMealDto.iterator();
        for (int i=0;i<7;i++){
            days.get(i).addMeal(iter.next());
        }
    }
}
