package pl.wizard.software.diet;

import org.springframework.data.jpa.repository.JpaRepository;

interface ProductDao extends JpaRepository<ProductEntity, Long> {
}
