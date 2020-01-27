package pl.programistyczne.wieczorki.resources.customer.company;

import pl.programistyczne.wieczorki.resources.AbstractDto;
import pl.programistyczne.wieczorki.tga.entities.CustomerCompanyEntity;

public class CustomerCompanyShortDto extends AbstractDto {

	private String name;

	public CustomerCompanyShortDto(CustomerCompanyEntity aEntity) {
		super(aEntity);
		name = aEntity.getName();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
