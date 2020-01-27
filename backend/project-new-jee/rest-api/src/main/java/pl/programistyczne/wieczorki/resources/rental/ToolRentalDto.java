package pl.programistyczne.wieczorki.resources.rental;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import pl.programistyczne.wieczorki.resources.AbstractDto;
import pl.programistyczne.wieczorki.resources.subcontractor.SubcontractorShortDto;
import pl.programistyczne.wieczorki.resources.tool.ToolShortDto;
import pl.programistyczne.wieczorki.tga.entities.relations.ToolRentalEntity;

public class ToolRentalDto extends AbstractDto<ToolRentalEntity> {

	private Date startDate;
	private Date realReturnDate;
	private int toolsCount;
	private SubcontractorShortDto subcontractor;
	private List<ToolShortDto> tools;

	public ToolRentalDto(ToolRentalEntity aEntity) {
		super(aEntity);
		startDate = aEntity.getStartDate();
		realReturnDate = aEntity.getRealReturnDate();
		toolsCount = aEntity.getToolsCount();
		subcontractor = new SubcontractorShortDto(aEntity.getSubcontractor());
		tools = aEntity.getTools().stream().map(ent -> new ToolShortDto(ent.getTool())).collect(Collectors.toList());
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getRealReturnDate() {
		return realReturnDate;
	}

	public void setRealReturnDate(Date realReturnDate) {
		this.realReturnDate = realReturnDate;
	}

	public int getToolsCount() {
		return toolsCount;
	}

	public void setToolsCount(int toolsCount) {
		this.toolsCount = toolsCount;
	}

	public SubcontractorShortDto getSubcontractor() {
		return subcontractor;
	}

	public void setSubcontractor(SubcontractorShortDto subcontractor) {
		this.subcontractor = subcontractor;
	}

	public List<ToolShortDto> getTools() {
		return tools;
	}

	public void setTools(List<ToolShortDto> tools) {
		this.tools = tools;
	}
}
