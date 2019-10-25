package pl.wizard.software.diet;

import org.springframework.data.jpa.repository.JpaRepository;

interface MealDao extends JpaRepository<MealEntity, Long> {

}
