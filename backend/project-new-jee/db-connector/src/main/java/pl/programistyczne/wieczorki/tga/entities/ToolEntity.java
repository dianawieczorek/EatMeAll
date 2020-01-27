package pl.programistyczne.wieczorki.tga.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import pl.programistyczne.wieczorki.tga.entities.relations.ToolHistoryEntity;

@Entity
@Table(name = "TOOLS")
public class ToolEntity extends AbstractBaseEntity {
	private String name;
	@Column(name = "serial_number")
	private String serialNumber;
	@Column(name = "in_warehouse")
	private Boolean inWarehouse;
	private String state;

	@OneToMany(mappedBy = "tool")
	private Set<ToolHistoryEntity> rentHistory = new HashSet<>();

	public ToolEntity() {
	}

	public ToolEntity(Long aId) {
		super(aId);
	}

	public ToolEntity(long aId, String aName, String aSerialNumber, Boolean aInWarehouse) {
		super(aId);
		this.name = aName;
		this.serialNumber = aSerialNumber;
		this.inWarehouse = aInWarehouse;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSerialNumber() {
		return serialNumber;
	}

	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}

	public Boolean getInWarehouse() {
		return inWarehouse;
	}

	public void setInWarehouse(Boolean inWarehouse) {
		this.inWarehouse = inWarehouse;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Set<ToolHistoryEntity> getRentHistory() {
		return rentHistory;
	}

	public void setRentHistory(Set<ToolHistoryEntity> rentHistory) {
		this.rentHistory = rentHistory;
	}
}
