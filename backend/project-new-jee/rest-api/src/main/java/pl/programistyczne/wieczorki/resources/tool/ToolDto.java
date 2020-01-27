package pl.programistyczne.wieczorki.resources.tool;

import java.util.List;
import java.util.stream.Collectors;

import pl.programistyczne.wieczorki.resources.AbstractDto;
import pl.programistyczne.wieczorki.resources.rentalhistory.ToolHistoryShortDto;
import pl.programistyczne.wieczorki.tga.entities.ToolEntity;

public class ToolDto extends AbstractDto<ToolEntity> {

	private String name;
	private String serialNumber;
	private Boolean inWarehouse;
	private String state;
	private List<ToolHistoryShortDto> history;

	public ToolDto(ToolEntity aEntity) {
		super(aEntity);
		name = aEntity.getName();
		serialNumber = aEntity.getSerialNumber();
		inWarehouse = aEntity.getInWarehouse();
		history = aEntity.getRentHistory().stream().map(ent -> new ToolHistoryShortDto(ent)).collect(Collectors.toList());
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

	public List<ToolHistoryShortDto> getHistory() {
		return history;
	}

	public void setHistory(List<ToolHistoryShortDto> history) {
		this.history = history;
	}
}
