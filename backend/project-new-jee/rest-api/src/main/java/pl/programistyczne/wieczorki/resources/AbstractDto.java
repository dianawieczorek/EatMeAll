package pl.programistyczne.wieczorki.resources;

import pl.programistyczne.wieczorki.tga.entities.AbstractBaseEntity;

public class AbstractDto<Entity extends AbstractBaseEntity> {

	private final Long id;

	public AbstractDto(Entity aEntity) {
		this.id = aEntity.getId();
	}

    public AbstractDto() {
		id = null;
    }

    public Long getId() {
		return id;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AbstractDto other = (AbstractDto) obj;
		if (id != other.id)
			return false;
		return true;
	}

}
