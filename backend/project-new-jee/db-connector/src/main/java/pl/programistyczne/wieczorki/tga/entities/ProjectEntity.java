package pl.programistyczne.wieczorki.tga.entities;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "PROJECTS")
public class ProjectEntity extends AbstractBaseEntity {

	private String name;
	private Date startDate;
	private Date stopDate;

	@ManyToOne
	@JoinColumn(name = "coordinator_id")
	private CustomerEmployeeEntity coordinator;

	@ManyToMany
	@JoinTable(name = "R_AGREEMENTS", joinColumns = { @JoinColumn(name = "project_id") }, inverseJoinColumns = {
			@JoinColumn(name = "subcotractor_id") })
	private Set<SubcontractorEntity> subcontractors = new HashSet<>();

	public ProjectEntity() {
	}

	public ProjectEntity(Long aId) {
		super(aId);
	}

	public ProjectEntity(Long aId, String aName, Date aStopDate) {
		setId(aId);
		name = aName;
		stopDate = aStopDate;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getStopDate() {
		return stopDate;
	}

	public void setStopDate(Date stopDate) {
		this.stopDate = stopDate;
	}

	public CustomerEmployeeEntity getCoordinator() {
		return coordinator;
	}

	public void setCoordinator(CustomerEmployeeEntity coordinator) {
		this.coordinator = coordinator;
	}

	public Set<SubcontractorEntity> getSubcontractors() {
		return subcontractors;
	}

	public void setSubcontractors(Set<SubcontractorEntity> subcordinators) {
		this.subcontractors = subcordinators;
	}
}
