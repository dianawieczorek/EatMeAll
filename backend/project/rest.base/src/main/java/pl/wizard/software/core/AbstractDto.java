package pl.wizard.software.core;

import lombok.Data;

@Data
public abstract class AbstractDto {

    private Long id;
    private int version;

    public AbstractDto(Long aId, int aVersion) {
        id = aId;
        version = aVersion;
    }

    @Override
    public boolean equals(Object aO) {
        if (this == aO) return true;
        if (aO == null || getClass() != aO.getClass()) return false;

        AbstractDto that = (AbstractDto) aO;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
