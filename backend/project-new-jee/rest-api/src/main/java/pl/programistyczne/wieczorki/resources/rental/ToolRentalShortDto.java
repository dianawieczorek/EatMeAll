package pl.programistyczne.wieczorki.resources.rental;

import java.util.Date;

import pl.programistyczne.wieczorki.resources.AbstractDto;
import pl.programistyczne.wieczorki.tga.entities.relations.ToolRentalEntity;

public class ToolRentalShortDto extends AbstractDto<ToolRentalEntity> {

	private Date startDate;
	private Date realReturnDate;
	private int toolsCount;

	public ToolRentalShortDto(ToolRentalEntity aEntity) {
		super(aEntity);
		startDate = aEntity.getStartDate();
		realReturnDate = aEntity.getRealReturnDate();
		toolsCount = aEntity.getToolsCount();
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
}
