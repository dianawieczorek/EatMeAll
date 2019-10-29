package pl.wizard.software.diet;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

interface MealDao extends JpaRepository<MealEntity, Long> {

    @Query(nativeQuery=true ,
            value="select * from MEALS \n" +
            "inner join \n" +
            "meal_entity_meal_times\n" +
            "ON MEALS.id = meal_entity_meal_times.meal_entity_id \n" +
            "where meal_entity_meal_times.meal_times = ?2\n" +
            "ORDER BY random() limit ?1")
    List<MealEntity> randomMeals(int aCount, int mealTime);
}
