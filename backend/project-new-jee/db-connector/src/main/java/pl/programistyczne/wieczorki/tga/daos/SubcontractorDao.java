package pl.programistyczne.wieczorki.tga.daos;

import java.util.List;

import javax.ejb.Stateless;

import pl.programistyczne.wieczorki.tga.entities.SubcontractorEntity;

@Stateless
public class SubcontractorDao extends AbstractDao<SubcontractorEntity> {

	public SubcontractorDao() {
		super(SubcontractorEntity.class);
	}

	@Override
	public List<SubcontractorEntity> selectAll() {
		return em.createQuery("select new SubcontractorEntity(s.id, s.name, s.surname) from SubcontractorEntity s",
				SubcontractorEntity.class).getResultList();
	}

}
