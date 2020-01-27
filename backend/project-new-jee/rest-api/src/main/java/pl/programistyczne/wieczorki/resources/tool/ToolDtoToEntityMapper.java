package pl.programistyczne.wieczorki.resources.tool;

import pl.programistyczne.wieczorki.tga.entities.ProjectEntity;
import pl.programistyczne.wieczorki.tga.entities.SubcontractorEntity;
import pl.programistyczne.wieczorki.tga.entities.ToolEntity;
import pl.programistyczne.wieczorki.tga.entities.relations.ToolHistoryEntity;
import pl.programistyczne.wieczorki.tga.entities.relations.ToolRentalEntity;

import java.util.stream.Collectors;

public class ToolDtoToEntityMapper {

    static public ToolEntity convert(ToolDto aDto) {
        ToolEntity ent = new ToolEntity();
        ent.setId(aDto.getId());
        ent.setName(aDto.getName());
        ent.setSerialNumber(aDto.getSerialNumber());
        ent.setInWarehouse(aDto.getInWarehouse());
        ent.setState(aDto.getState());
        ent.setRentHistory(aDto.getHistory().stream().map(dto -> {
            return new ToolHistoryEntity(dto.getId());
        }).collect(Collectors.toSet()));

        return ent;
    }
}
