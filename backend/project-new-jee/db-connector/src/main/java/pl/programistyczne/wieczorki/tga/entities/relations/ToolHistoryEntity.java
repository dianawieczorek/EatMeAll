package pl.programistyczne.wieczorki.tga.entities.relations;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import pl.programistyczne.wieczorki.tga.entities.AbstractBaseEntity;
import pl.programistyczne.wieczorki.tga.entities.ToolEntity;

@Entity
@Table(name = "R_TOOL_HISTORY")
public class ToolHistoryEntity extends AbstractBaseEntity {
	@Temporal(TemporalType.DATE)
	private Date realReturnDate;

	@ManyToOne
	@JoinColumn(name = "rental_id")
	private ToolRentalEntity rental;
	@ManyToOne
	@JoinColumn(name = "tool_id")
	private ToolEntity tool;

	public ToolHistoryEntity() {
		super();
	}

	public ToolHistoryEntity(Long aId) {
		super(aId);
	}

	public Date getRealReturnDate() {
		return realReturnDate;
	}

	public void setRealReturnDate(Date realReturnDate) {
		this.realReturnDate = realReturnDate;
	}

	public ToolRentalEntity getRental() {
		return rental;
	}

	public void setRental(ToolRentalEntity rential) {
		this.rental = rential;
	}

	public ToolEntity getTool() {
		return tool;
	}

	public void setTool(ToolEntity tool) {
		this.tool = tool;
	}

}
