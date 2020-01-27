package pl.programistyczne.wieczorki.resources.customer.employee;

import java.util.List;
import java.util.stream.Collectors;

import pl.programistyczne.wieczorki.resources.AbstractDto;
import pl.programistyczne.wieczorki.resources.customer.company.CustomerCompanyShortDto;
import pl.programistyczne.wieczorki.resources.projects.ProjectShortDto;
import pl.programistyczne.wieczorki.tga.entities.CustomerEmployeeEntity;

public class CustomerEmployeeDto extends AbstractDto<CustomerEmployeeEntity> {

	private String name;
	private String surname;
	private Long phone;
	private String mail;
	private CustomerCompanyShortDto company;

	private List<ProjectShortDto> projects;

	public CustomerEmployeeDto(CustomerEmployeeEntity aEntity) {
		super(aEntity);
		name = aEntity.getName();
		surname = aEntity.getSurname();
		phone = aEntity.getPhone();
		mail = aEntity.getMail();
		company = new CustomerCompanyShortDto(aEntity.getCompany());
		projects = aEntity.getProjects().stream().map(ent -> new ProjectShortDto(ent)).collect(Collectors.toList());
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

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public CustomerCompanyShortDto getCompany() {
		return company;
	}

	public void setCompany(CustomerCompanyShortDto company) {
		this.company = company;
	}

	public List<ProjectShortDto> getProjects() {
		return projects;
	}

	public void setProjects(List<ProjectShortDto> projects) {
		this.projects = projects;
	}
}
