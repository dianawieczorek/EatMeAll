package pl.wizard.software.diet;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

interface MealDao extends JpaRepository<MealEntity, Long> {

    @Query(nativeQuery=true , value="select * from MEALS ORDER BY random() LIMIT ?1")
    List<MealEntity> randomMeals(int aCount);
}
