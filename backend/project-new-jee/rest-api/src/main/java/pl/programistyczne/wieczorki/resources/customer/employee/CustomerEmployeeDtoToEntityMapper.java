package pl.programistyczne.wieczorki.resources.customer.employee;

import pl.programistyczne.wieczorki.resources.customer.company.CustomerCompanyDto;
import pl.programistyczne.wieczorki.tga.entities.CustomerCompanyEntity;
import pl.programistyczne.wieczorki.tga.entities.CustomerEmployeeEntity;
import pl.programistyczne.wieczorki.tga.entities.ProjectEntity;

import java.util.stream.Collectors;

public class CustomerEmployeeDtoToEntityMapper {

    static public CustomerEmployeeEntity convert(CustomerEmployeeDto aDto) {
        CustomerEmployeeEntity ent = new CustomerEmployeeEntity();
        ent.setName(aDto.getName());
        ent.setPhone(aDto.getPhone());
        ent.setId(aDto.getId());
        ent.setMail(aDto.getMail());
        ent.setCompany(new CustomerCompanyEntity(aDto.getCompany().getId()));

        ent.setProjects(aDto.getProjects().stream().map(projectDto -> {
            ProjectEntity projectEntity = new ProjectEntity();
            projectEntity.setId(projectDto.getId());
            return projectEntity;
        }).collect(Collectors.toSet()));

        return ent;
    }
}
