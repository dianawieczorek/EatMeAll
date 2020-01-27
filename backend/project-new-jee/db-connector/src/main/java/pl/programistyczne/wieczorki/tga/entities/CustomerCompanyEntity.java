package pl.programistyczne.wieczorki.tga.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "CUSTOMERS_COMPANY")
public class CustomerCompanyEntity extends AbstractBaseEntity {

	private String name;
	private String address;
	private Long phone;
	private Long fax;
	private String mail;
	private Double hourlyPay;

	@OneToMany(mappedBy = "company")
	private Set<CustomerEmployeeEntity> employees = new HashSet<>();

    public CustomerCompanyEntity(Long aId) {
    	super(aId);
    }

    @Override
	public String toString() {
		return "CustomerCompanyEntity [name=" + name + ", address=" + address + ", phone=" + phone + ", fax=" + fax
				+ ", mail=" + mail + ", hourlyPay=" + hourlyPay + ", employees=" + employees + "]";
	}

	public CustomerCompanyEntity() {
	}

	public CustomerCompanyEntity(Long aId, String aName) {
		super(aId);
		this.name = aName;
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

	public Set<CustomerEmployeeEntity> getEmployees() {
		return employees;
	}

	public void setEmployees(Set<CustomerEmployeeEntity> employees) {
		this.employees = employees;
	}
}
