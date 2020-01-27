package pl.programistyczne.wieczorki.tga.daos;

import java.util.List;

import javax.ejb.Stateless;

import pl.programistyczne.wieczorki.tga.entities.relations.ToolRentalEntity;

@Stateless
public class RentalDao extends AbstractDao<ToolRentalEntity> {

	public RentalDao() {
		super(ToolRentalEntity.class);
	}

	@Override
	public List<ToolRentalEntity> selectAll() {
		return em.createQuery("select t from ToolRentalEntity t", ToolRentalEntity.class).getResultList();
	}

}
