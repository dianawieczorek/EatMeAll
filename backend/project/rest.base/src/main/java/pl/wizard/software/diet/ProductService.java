package pl.wizard.software.diet;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service

@RequiredArgsConstructor
public class ProductService {
    private final ProductDao productDao;

    public Collection<ProductTypeDto> findAll() {
        List<ProductEntity> products = productDao.findAll();
        Set<String> productTypes = products.stream().map(p -> p.getProductType().getStringName()).collect(Collectors.toSet());

        HashMap<String, ProductTypeDto> hashMap = new HashMap<>();
        productTypes.forEach(pt -> hashMap.put(pt, new ProductTypeDto(pt)));
        productDao.findAll().forEach(p -> {
            ProductTypeDto productType = hashMap.get(p.getProductType().getStringName());
            productType.getProducts().add(ProductEntDtoMapper.mapToShortDto(p));
        });
        return hashMap.values();
    }

    public Optional<ProductEntity> findById(Long id) {
        return productDao.findById(id);
    }

    public ProductEntity save(ProductEntity stock) {
        return productDao.save(stock);
    }

    public void deleteById(Long id) {
        productDao.deleteById(id);
    }
}

