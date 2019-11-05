package pl.wizard.software.diet.product;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductDao productDao;

    Collection<ProductTypeDto<ProductDtoShort>> findAll() {
        List<ProductEntity> products = productDao.findAll();
        Set<String> productTypes = products.stream().map(p -> p.getProductType().getStringName()).collect(Collectors.toSet());

        HashMap<String, ProductTypeDto<ProductDtoShort>> hashMap = new HashMap<>();
        productTypes.forEach(pt -> hashMap.put(pt, new ProductTypeDto<ProductDtoShort>(pt)));
        productDao.findAll().forEach(p -> {
            ProductTypeDto<ProductDtoShort> productType = hashMap.get(p.getProductType().getStringName());
            productType.getProducts().add(ProductEntDtoMapper.mapToShortDto(p));
        });
        return hashMap.values();
    }

    Optional<ProductEntity> findById(Long id) {
        return productDao.findById(id);
    }

    ProductEntity save(ProductEntity stock) {
        return productDao.save(stock);
    }

    void deleteById(Long id) {
        productDao.deleteById(id);
    }

    public static ProductEntity createEmptyEntity(long aId){
        return new ProductEntity(aId,0);
    }
}

