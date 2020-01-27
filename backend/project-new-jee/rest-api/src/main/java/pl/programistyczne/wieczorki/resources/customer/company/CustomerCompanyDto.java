package pl.programistyczne.wieczorki.resources.customer.company;

import java.util.List;
import java.util.stream.Collectors;

import pl.programistyczne.wieczorki.resources.AbstractDto;
import pl.programistyczne.wieczorki.resources.customer.employee.CustomerEmployeeShortDto;
import pl.programistyczne.wieczorki.tga.entities.CustomerCompanyEntity;

public class CustomerCompanyDto extends AbstractDto<CustomerCompanyEntity> {

	private String name;
	private String address;
	private Long phone;
	private Long fax;
	private String mail;
	private Double hourlyPay;
	private String comment;
	private List<CustomerEmployeeShortDto> employees;

	public CustomerCompanyDto(){
		super();
	}

	public CustomerCompanyDto(CustomerCompanyEntity aEntity) {
		super(aEntity);
		this.name = aEntity.getName();
		this.address = aEntity.getAddress();
		this.phone = aEntity.getPhone();
		this.fax = aEntity.getFax();
		this.mail = aEntity.getMail();
		this.hourlyPay = aEntity.getHourlyPay();
		this.employees = aEntity.getEmployees().stream().map(ent -> new CustomerEmployeeShortDto(ent))
				.collect(Collectors.toList());
		this.comment = aEntity.getComment();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public Long getFax() {
		return fax;
	}

	public void setFax(Long fax) {
		this.fax = fax;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public Double getHourlyPay() {
		return hourlyPay;
	}

	public void setHourlyPay(Double hourlyPay) {
		this.hourlyPay = hourlyPay;
	}

	public List<CustomerEmployeeShortDto> getEmployees() {
		return employees;
	}

	public void setEmployees(List<CustomerEmployeeShortDto> employees) {
		this.employees = employees;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}
}
