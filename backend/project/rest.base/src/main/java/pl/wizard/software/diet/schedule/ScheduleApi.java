package pl.wizard.software.diet.schedule;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.wizard.software.diet.meal.MealService;


@RestController
@RequestMapping("/v1/schedule")
@Slf4j
@RequiredArgsConstructor
class ScheduleApi {

    private final MealService mealService;

    @GetMapping
    public ResponseEntity<ScheduleWeekDto> generateWeekSchedule() {
        ScheduleWeekDto schedule = new ScheduleWeekDto();
        for (int i=0;i<5; i++) {
            schedule.addMealsByTime(mealService.randomMeals(7, i));
        }

        return ResponseEntity.ok(schedule);
    }
}
