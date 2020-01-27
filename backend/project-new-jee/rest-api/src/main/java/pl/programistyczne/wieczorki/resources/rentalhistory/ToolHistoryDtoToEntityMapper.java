package pl.programistyczne.wieczorki.resources.rentalhistory;

import pl.programistyczne.wieczorki.resources.rental.ToolRentalDto;
import pl.programistyczne.wieczorki.tga.entities.SubcontractorEntity;
import pl.programistyczne.wieczorki.tga.entities.ToolEntity;
import pl.programistyczne.wieczorki.tga.entities.relations.ToolHistoryEntity;
import pl.programistyczne.wieczorki.tga.entities.relations.ToolRentalEntity;

import java.util.stream.Collectors;

public class ToolHistoryDtoToEntityMapper {

    static public ToolHistoryEntity convert(ToolHistoryDto aDto) {
        ToolHistoryEntity ent = new ToolHistoryEntity();
        ent.setId(aDto.getId());
        ent.setRealReturnDate(aDto.getRealReturnDate());
        ent.setTool(new ToolEntity(aDto.getTool().getId()));
        return ent;
    }
}
