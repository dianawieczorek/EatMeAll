package pl.programistyczne.wieczorki.resources.rental;

import pl.programistyczne.wieczorki.tga.entities.SubcontractorEntity;
import pl.programistyczne.wieczorki.tga.entities.ToolEntity;
import pl.programistyczne.wieczorki.tga.entities.relations.ToolHistoryEntity;
import pl.programistyczne.wieczorki.tga.entities.relations.ToolRentalEntity;

import java.util.stream.Collectors;

public class ToolRentalDtoToEntityMapper {

    static public ToolRentalEntity convert(ToolRentalDto aDto) {
        ToolRentalEntity ent = new ToolRentalEntity();
        ent.setId(aDto.getId());
        ent.setStartDate(aDto.getStartDate());
        ent.setRealReturnDate(aDto.getRealReturnDate());
        ent.setSubcontractor(new SubcontractorEntity(aDto.getSubcontractor().getId()));
        ent.setTools(aDto.getTools().stream().map(toolDto -> {
            return new ToolHistoryEntity(toolDto.getId());
        }).collect(Collectors.toSet()));
        return ent;
    }
}

