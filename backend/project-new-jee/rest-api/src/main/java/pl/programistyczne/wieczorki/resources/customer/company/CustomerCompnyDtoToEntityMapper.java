package pl.programistyczne.wieczorki.resources.customer.company;

import pl.programistyczne.wieczorki.tga.entities.CustomerCompanyEntity;
import pl.programistyczne.wieczorki.tga.entities.CustomerEmployeeEntity;

import java.util.Collections;
import java.util.HashSet;
import java.util.stream.Collectors;

public class CustomerCompnyDtoToEntityMapper {

    static public CustomerCompanyEntity convert(CustomerCompanyDto aDto){
        CustomerCompanyEntity ent = new CustomerCompanyEntity();
        ent.setAddress(aDto.getAddress());
        ent.setFax(aDto.getFax());
        ent.setHourlyPay(aDto.getHourlyPay());
        ent.setName(aDto.getName());
        ent.setPhone(aDto.getPhone());
        ent.setComment(aDto.getComment());
        ent.setId(aDto.getId());
        ent.setMail(aDto.getMail());

        if(aDto.getEmployees() != null){
            ent.setEmployees(aDto.getEmployees().stream().map(employeeDto -> {
                CustomerEmployeeEntity employeeEntity = new CustomerEmployeeEntity();
                employeeEntity.setId(employeeDto.getId());
                return employeeEntity;
            }).collect(Collectors.toSet()));
        }

        return ent;
    }
}
