package pl.programistyczne.wieczorki.tga.entities;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import pl.programistyczne.wieczorki.tga.entities.relations.ToolRentalEntity;

@Entity
@Table(name = "SUBCONTRACTORS")
public class SubcontractorEntity extends AbstractBaseEntity {

	@Column(nullable = false)
	private String name;
	@Column(nullable = false)
	private String surname;
	private String address;
	private Date birthDate;
	private Long phone;
	private String mail;
	private Boolean activity;
	private Nationality nationality;
	private String idNumber;
	private Date companyInsurance;
	private String healthInsurance;
	private Date craftCard;
	private Date taxFree;
	private Date a1Insurance;
	private Double hourlyPay;

	@ManyToMany
	@JoinTable(name = "R_AGREEMENTS", joinColumns = { @JoinColumn(name = "subcotractor_id") }, inverseJoinColumns = {
			@JoinColumn(name = "project_id") })
	private Set<ProjectEntity> projects = new HashSet<>();

	@OneToMany(mappedBy = "subcontractor")
	private Set<ToolRentalEntity> toolRentals = new HashSet<>();

	public SubcontractorEntity() {
	}

	public SubcontractorEntity(long aId, String name, String surname) {
		super(aId);
		this.name = name;
		this.surname = surname;
	}

	public SubcontractorEntity(Long aId) {
		super(aId);
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
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

	public Boolean getActivity() {
		return activity;
	}

	public void setActivity(Boolean activity) {
		this.activity = activity;
	}

	public Nationality getNationality() {
		return nationality;
	}

	public void setNationality(Nationality nationality) {
		this.nationality = nationality;
	}

	public String getIdNumber() {
		return idNumber;
	}

	public void setIdNumber(String idNumber) {
		this.idNumber = idNumber;
	}

	public Date getCompanyInsurance() {
		return companyInsurance;
	}

	public void setCompanyInsurance(Date companyInsurance) {
		this.companyInsurance = companyInsurance;
	}

	public String getHealthInsurance() {
		return healthInsurance;
	}

	public void setHealthInsurance(String healthInsurance) {
		this.healthInsurance = healthInsurance;
	}

	public Date getCraftCard() {
		return craftCard;
	}

	public void setCraftCard(Date craftCard) {
		this.craftCard = craftCard;
	}

	public Date getTaxFree() {
		return taxFree;
	}

	public void setTaxFree(Date taxFree) {
		this.taxFree = taxFree;
	}

	public Date getA1Insurance() {
		return a1Insurance;
	}

	public void setA1Insurance(Date a1Insurance) {
		this.a1Insurance = a1Insurance;
	}

	public Double getHourlyPay() {
		return hourlyPay;
	}

	public void setHourlyPay(Double hourlyPay) {
		this.hourlyPay = hourlyPay;
	}

	public Set<ProjectEntity> getProjects() {
		return projects;
	}

	public void setProjects(Set<ProjectEntity> projects) {
		this.projects = projects;
	}

	public Set<ToolRentalEntity> getToolRentals() {
		return toolRentals;
	}

	public void setToolRentals(Set<ToolRentalEntity> toolRentals) {
		this.toolRentals = toolRentals;
	}
}
