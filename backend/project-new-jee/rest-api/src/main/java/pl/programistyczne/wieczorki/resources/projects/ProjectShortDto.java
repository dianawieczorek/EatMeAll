package pl.programistyczne.wieczorki.resources.projects;

import pl.programistyczne.wieczorki.resources.AbstractDto;
import pl.programistyczne.wieczorki.tga.entities.ProjectEntity;

public class ProjectShortDto extends AbstractDto<ProjectEntity> {

	private String name;
	private Boolean isActive;

	public ProjectShortDto(ProjectEntity aEntity) {
		super(aEntity);
		name = aEntity.getName();
		isActive = aEntity.getStopDate() == null;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}
}
