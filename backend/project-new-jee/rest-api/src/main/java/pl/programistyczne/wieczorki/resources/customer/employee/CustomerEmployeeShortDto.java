package pl.programistyczne.wieczorki.resources.customer.employee;

import pl.programistyczne.wieczorki.resources.AbstractDto;
import pl.programistyczne.wieczorki.tga.entities.CustomerEmployeeEntity;

public class CustomerEmployeeShortDto extends AbstractDto<CustomerEmployeeEntity> {

	private String name;
	private String surname;

	public CustomerEmployeeShortDto(CustomerEmployeeEntity aEntity) {
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
