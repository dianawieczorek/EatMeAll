package pl.programistyczne.wieczorki.resources.subcontractor;

import pl.programistyczne.wieczorki.resources.AbstractDto;
import pl.programistyczne.wieczorki.tga.entities.SubcontractorEntity;

public class SubcontractorShortDto extends AbstractDto<SubcontractorEntity> {

	private String name;
	private String surname;

	public SubcontractorShortDto(SubcontractorEntity aEntity) {
		super(aEntity);
		name = aEntity.getName();
		surname = aEntity.getSurname();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

}
