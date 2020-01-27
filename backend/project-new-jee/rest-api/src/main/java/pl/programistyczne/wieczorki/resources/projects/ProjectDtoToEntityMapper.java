package pl.programistyczne.wieczorki.resources.projects;

import pl.programistyczne.wieczorki.resources.customer.employee.CustomerEmployeeDto;
import pl.programistyczne.wieczorki.tga.entities.CustomerCompanyEntity;
import pl.programistyczne.wieczorki.tga.entities.CustomerEmployeeEntity;
import pl.programistyczne.wieczorki.tga.entities.ProjectEntity;
import pl.programistyczne.wieczorki.tga.entities.SubcontractorEntity;

import java.util.stream.Collectors;

public class ProjectDtoToEntityMapper {

    static public ProjectEntity convert(ProjectDto aDto) {
        ProjectEntity ent = new ProjectEntity();
        ent.setName(aDto.getName());
        ent.setId(aDto.getId());
        ent.setStartDate(aDto.getStartDate());
        ent.setStopDate(aDto.getStopDate());
        ent.setCoordinator(new CustomerEmployeeEntity(aDto.getCoordinator().getId()));

        ent.setSubcontractors(aDto.getSubcontractors().stream().map(subcontractorDto -> {
                SubcontractorEntity subcontractorEntity = new SubcontractorEntity(subcontractorDto.getId());
                return subcontractorEntity;
        }).collect(Collectors.toSet()));

        return ent;
    }
}
