package pl.programistyczne.wieczorki.tga.entities.relations;

import java.util.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PostLoad;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import pl.programistyczne.wieczorki.tga.entities.AbstractBaseEntity;
import pl.programistyczne.wieczorki.tga.entities.SubcontractorEntity;

@Entity
@Table(name = "R_TOOL_RENTALS")
public class ToolRentalEntity extends AbstractBaseEntity {
	@Temporal(TemporalType.DATE)
	private Date startDate;
	@Temporal(TemporalType.DATE)
	private Date realReturnDate;
	@Transient
	private int toolsCount;

	@ManyToOne
	@JoinColumn(name = "subcordinator_id")
	private SubcontractorEntity subcontractor;

	@OneToMany(mappedBy = "rental")
	private Set<ToolHistoryEntity> tools;

	public ToolRentalEntity() {
	}

	public ToolRentalEntity(Long aId){
		super (aId);
	}

	public ToolRentalEntity(long aId, Date aStartDate, Set<ToolHistoryEntity> aTools) {
		super(aId);
		this.startDate = aStartDate;
		this.tools = aTools;
	}

	@PostLoad
	public void countToolsInRential() {
		toolsCount = tools.size();
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

	public SubcontractorEntity getSubcontractor() {
		return subcontractor;
	}

	public void setSubcontractor(SubcontractorEntity aSubcontractor) {
		this.subcontractor = aSubcontractor;
	}

	public Set<ToolHistoryEntity> getTools() {
		return tools;
	}

	public void setTools(Set<ToolHistoryEntity> tools) {
		this.tools = tools;
	}

	public int getToolsCount() {
		return toolsCount;
	}

	public void setToolsCount(int toolsCount) {
		this.toolsCount = toolsCount;
	}

}
