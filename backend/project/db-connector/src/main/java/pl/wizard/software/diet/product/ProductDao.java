package pl.wizard.software.diet.product;

import org.springframework.data.jpa.repository.JpaRepository;

interface ProductDao extends JpaRepository<ProductEntity, Long> {
}
