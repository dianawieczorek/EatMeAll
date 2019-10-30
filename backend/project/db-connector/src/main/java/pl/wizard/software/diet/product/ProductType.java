//package pl.wizard.software.diet.products;
//
//import lombok.Data;
//import pl.wizard.software.AbstractBaseEntity;
//
//import javax.persistence.*;
//import java.util.Set;
//
//@Entity
//@Data
//public class ProductType extends AbstractBaseEntity {
//
//    @OneToMany(mappedBy = "productType")
//    private Set<ProductEntity> products;
////    private String productType;
//    @Enumerated(EnumType.ORDINAL)
//    private ProductTypeEnum productType;
//
//    public enum ProductTypeEnum {
//        CEREALS("zboża"), DAIRY("przetwory mleczne"), HAMS("wędliny"), RAW_MEAT("mięso"), POULTRY("drób"), EGGS("jajka"), FATS("tłuszcze"), MUSHROMS("grzyby"), NUTS("orzechy"),
//        FRUITS("owoce"), SPICES("przyprawy"), FISH("ryby"), VEGETABLES("warzywa"), ALCOHOLS("alkohole"), DRINKS("napoje"), SWEETS("słodycze"), OTHERS("inne");
//
//        private String type;
//
//        ProductTypeEnum(String aName) {
//            this.type = aName;
//        }
//
//        public String getType() {
//            return type;
//        }
//
//        public static ProductType.ProductTypeEnum parse(String aName) {
//            ProductType.ProductTypeEnum type = null; // Default
//            for (ProductType.ProductTypeEnum item : ProductType.ProductTypeEnum.values()) {
//                if (item.getType().equals(aName)) {
//                    type = item;
//                    break;
//                }
//            }
//            return type;
//        }
//    }
//
//    public ProductTypeEnum getStringName() {
//        return productType;
//    }
//
//    public void setProductType(String aProductType) {
//        productType = ProductType.ProductTypeEnum.parse(aProductType);
//    }
//}
