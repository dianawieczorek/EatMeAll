package pl.programistyczne.wieczorki.tga.daos;

import java.util.List;

import javax.ejb.Stateless;

import pl.programistyczne.wieczorki.tga.entities.ToolEntity;

@Stateless
public class ToolDao extends AbstractDao<ToolEntity> {

	public ToolDao() {
		super(ToolEntity.class);
	}

	@Override
	public List<ToolEntity> selectAll() {
		return em.createQuery("select new ToolEntity(s.id, s.name, s.serialNumber, s.inWarehouse) from ToolEntity s",
				ToolEntity.class).getResultList();
	}

}
