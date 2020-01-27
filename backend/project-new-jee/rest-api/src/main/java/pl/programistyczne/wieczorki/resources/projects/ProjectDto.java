package pl.programistyczne.wieczorki.resources.projects;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import pl.programistyczne.wieczorki.resources.AbstractDto;
import pl.programistyczne.wieczorki.resources.customer.employee.CustomerEmployeeShortDto;
import pl.programistyczne.wieczorki.resources.subcontractor.SubcontractorShortDto;
import pl.programistyczne.wieczorki.tga.entities.ProjectEntity;

public class ProjectDto extends AbstractDto<ProjectEntity> {

	private String name;
	private Date startDate;
	private Date stopDate;

	private CustomerEmployeeShortDto coordinator;
	private List<SubcontractorShortDto> subcontractors;

	public ProjectDto(ProjectEntity aEntity) {
		super(aEntity);
		name = aEntity.getName();
		startDate = aEntity.getStartDate();
		stopDate = aEntity.getStopDate();
		coordinator = new CustomerEmployeeShortDto(aEntity.getCoordinator());
		subcontractors = aEntity.getSubcontractors().stream().map(ent -> new SubcontractorShortDto(ent))
				.collect(Collectors.toList());
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

	public CustomerEmployeeShortDto getCoordinator() {
		return coordinator;
	}

	public void setCoordinator(CustomerEmployeeShortDto coordinator) {
		this.coordinator = coordinator;
	}

	public List<SubcontractorShortDto> getSubcontractors() {
		return subcontractors;
	}

	public void setSubcontractors(List<SubcontractorShortDto> subcordinators) {
		this.subcontractors = subcordinators;
	}
}
