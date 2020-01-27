package pl.programistyczne.wieczorki.resources.rentalhistory;

import java.util.Date;

import pl.programistyczne.wieczorki.resources.AbstractDto;
import pl.programistyczne.wieczorki.resources.subcontractor.SubcontractorShortDto;
import pl.programistyczne.wieczorki.tga.entities.ToolEntity;
import pl.programistyczne.wieczorki.tga.entities.relations.ToolHistoryEntity;

public class ToolHistoryShortDto extends AbstractDto<ToolHistoryEntity> {

    private final String toolSerialNumber;
    private String toolName;
    private Date realReturnDate;
	private SubcontractorShortDto borrower;
    private long rentalId;

	public ToolHistoryShortDto(ToolHistoryEntity aEntity) {
		super(aEntity);
        realReturnDate = aEntity.getRealReturnDate();
        borrower = new SubcontractorShortDto(aEntity.getRental().getSubcontractor());
        rentalId = aEntity.getRental().getId();
        ToolEntity tool = aEntity.getTool();
        toolName = tool.getName();
        toolSerialNumber = tool.getSerialNumber();
	}

    public String getToolSerialNumber() {
        return toolSerialNumber;
    }

    public String getToolName() {
        return toolName;
    }

    public void setToolName(String toolName) {
        this.toolName = toolName;
    }

    public Date getRealReturnDate() {
        return realReturnDate;
    }

    public void setRealReturnDate(Date realReturnDate) {
        this.realReturnDate = realReturnDate;
    }

    public SubcontractorShortDto getBorrower() {
        return borrower;
    }

    public void setBorrower(SubcontractorShortDto borrower) {
        this.borrower = borrower;
    }

    public long getRentalId() {
        return rentalId;
    }

    public void setRentalId(long rentalId) {
        this.rentalId = rentalId;
    }
}
