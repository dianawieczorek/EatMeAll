package pl.programistyczne.wieczorki.tga.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "CUSTOMERS_EMPLOYEE")
public class CustomerEmployeeEntity extends AbstractBaseEntity {

	private String name;
	private String surname;
	private Long phone;
	private String mail;

	@ManyToOne
	@JoinColumn(name = "company_id")
	private CustomerCompanyEntity company;

	@OneToMany(mappedBy = "coordinator")
	private Set<ProjectEntity> projects = new HashSet<>();

	public CustomerEmployeeEntity() {
	}

	public CustomerEmployeeEntity(Long aId) {
		super(aId);
	}

	public CustomerEmployeeEntity(Long aId, String aName, String aSurname) {
		super(aId);
		name = aName;
		surname = aSurname;
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

	public CustomerCompanyEntity getCompany() {
		return company;
	}

	public void setCompany(CustomerCompanyEntity company) {
		this.company = company;
	}

	public Set<ProjectEntity> getProjects() {
		return projects;
	}

	public void setProjects(Set<ProjectEntity> projects) {
		this.projects = projects;
	}
}
