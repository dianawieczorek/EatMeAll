package pl.programistyczne.wieczorki.resources.subcontractor;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import pl.programistyczne.wieczorki.resources.AbstractDto;
import pl.programistyczne.wieczorki.resources.projects.ProjectShortDto;
import pl.programistyczne.wieczorki.resources.rental.ToolRentalShortDto;
import pl.programistyczne.wieczorki.tga.entities.Nationality;
import pl.programistyczne.wieczorki.tga.entities.SubcontractorEntity;

public class SubcontractorDto extends AbstractDto<SubcontractorEntity> {

	private String name;
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

	private List<ProjectShortDto> projects;

	private List<ToolRentalShortDto> toolRentals;

	public SubcontractorDto(SubcontractorEntity aEntity) {
		super(aEntity);
		name = aEntity.getName();
		surname = aEntity.getSurname();
		address = aEntity.getAddress();
		birthDate = aEntity.getBirthDate();
		phone = aEntity.getPhone();
		mail = aEntity.getMail();
		activity = aEntity.getActivity();
		nationality = aEntity.getNationality();
		idNumber = aEntity.getIdNumber();
		companyInsurance = aEntity.getCompanyInsurance();
		healthInsurance = aEntity.getHealthInsurance();
		craftCard = aEntity.getCraftCard();
		taxFree = aEntity.getTaxFree();
		a1Insurance = aEntity.getA1Insurance();
		hourlyPay = aEntity.getHourlyPay();
		projects = aEntity.getProjects().stream().map(ent -> new ProjectShortDto(ent)).collect(Collectors.toList());
		toolRentals = aEntity.getToolRentals().stream().map(ent -> new ToolRentalShortDto(ent))
				.collect(Collectors.toList());
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

	public List<ProjectShortDto> getProjects() {
		return projects;
	}

	public void setProjects(List<ProjectShortDto> projects) {
		this.projects = projects;
	}

	public List<ToolRentalShortDto> getToolRentals() {
		return toolRentals;
	}

	public void setToolRentals(List<ToolRentalShortDto> toolRentals) {
		this.toolRentals = toolRentals;
	}
}
