package pl.programistyczne.wieczorki.resources.rentalhistory;

import pl.programistyczne.wieczorki.resources.AbstractDto;
import pl.programistyczne.wieczorki.resources.rental.ToolRentalShortDto;
import pl.programistyczne.wieczorki.resources.subcontractor.SubcontractorShortDto;
import pl.programistyczne.wieczorki.resources.tool.ToolShortDto;
import pl.programistyczne.wieczorki.tga.entities.relations.ToolHistoryEntity;
import pl.programistyczne.wieczorki.tga.entities.relations.ToolRentalEntity;

import java.util.Date;

public class ToolHistoryDto extends AbstractDto<ToolHistoryEntity> {

    private Date realReturnDate;
    private Date startDate;

    private ToolRentalShortDto rental;
    private ToolShortDto tool;
    private SubcontractorShortDto borrower;

    public ToolHistoryDto(ToolHistoryEntity aEntity) {
        super(aEntity);
        realReturnDate = aEntity.getRealReturnDate();
        ToolRentalEntity rentalEnt = aEntity.getRental();
        rental = new ToolRentalShortDto(rentalEnt);
        tool = new ToolShortDto(aEntity.getTool());
        borrower = new SubcontractorShortDto(rentalEnt.getSubcontractor());
        startDate = rentalEnt.getStartDate();
    }

    public Date getRealReturnDate() {
        return realReturnDate;
    }

    public void setRealReturnDate(Date realReturnDate) {
        this.realReturnDate = realReturnDate;
    }

    public ToolRentalShortDto getRental() {
        return rental;
    }

    public void setRental(ToolRentalShortDto rental) {
        this.rental = rental;
    }

    public ToolShortDto getTool() {
        return tool;
    }

    public void setTool(ToolShortDto tool) {
        this.tool = tool;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public SubcontractorShortDto getBorrower() {
        return borrower;
    }

    public void setBorrower(SubcontractorShortDto borrower) {
        this.borrower = borrower;
    }
}
