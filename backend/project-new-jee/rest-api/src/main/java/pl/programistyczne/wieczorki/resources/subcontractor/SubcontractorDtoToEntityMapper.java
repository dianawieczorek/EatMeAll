package pl.programistyczne.wieczorki.resources.subcontractor;

import pl.programistyczne.wieczorki.tga.entities.ProjectEntity;
import pl.programistyczne.wieczorki.tga.entities.SubcontractorEntity;
import pl.programistyczne.wieczorki.tga.entities.ToolEntity;
import pl.programistyczne.wieczorki.tga.entities.relations.ToolHistoryEntity;
import pl.programistyczne.wieczorki.tga.entities.relations.ToolRentalEntity;

import java.util.stream.Collectors;

public class SubcontractorDtoToEntityMapper {

    static public SubcontractorEntity convert(SubcontractorDto aDto) {
        SubcontractorEntity ent = new SubcontractorEntity();
        ent.setId(aDto.getId());
        ent.setName(aDto.getName());
        ent.setSurname(aDto.getSurname());
        ent.setAddress(aDto.getAddress());
        ent.setBirthDate(aDto.getBirthDate());
        ent.setPhone(aDto.getPhone());
        ent.setMail(aDto.getMail());
        ent.setActivity(aDto.getActivity());
        ent.setNationality(aDto.getNationality());
        ent.setIdNumber(aDto.getIdNumber());
        ent.setCompanyInsurance(aDto.getCompanyInsurance());
        ent.setHealthInsurance(aDto.getHealthInsurance());
        ent.setCraftCard(aDto.getCraftCard());
        ent.setTaxFree(aDto.getTaxFree());
        ent.setA1Insurance(aDto.getA1Insurance());
        ent.setHourlyPay(aDto.getHourlyPay());

        ent.setProjects(aDto.getProjects().stream().map(projectDto -> {
            return new ProjectEntity(projectDto.getId());
        }).collect(Collectors.toSet()));

        ent.setToolRentals(aDto.getToolRentals().stream().map(toolRentalDto -> {
            return new ToolRentalEntity(toolRentalDto.getId());
        }).collect(Collectors.toSet()));

        return ent;
    }
}

