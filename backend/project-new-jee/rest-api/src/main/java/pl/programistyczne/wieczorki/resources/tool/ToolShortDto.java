package pl.programistyczne.wieczorki.resources.tool;

import pl.programistyczne.wieczorki.resources.AbstractDto;
import pl.programistyczne.wieczorki.tga.entities.ToolEntity;

public class ToolShortDto extends AbstractDto<ToolEntity> {

	private String name;
	private String serialNumber;
	private Boolean inWarehouse;

	public ToolShortDto(ToolEntity aEntity) {
		super(aEntity);
		name = aEntity.getName();
		serialNumber = aEntity.getSerialNumber();
		inWarehouse = aEntity.getInWarehouse();
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
}
