package pl.programistyczne.wieczorki.tga.daos;

import java.util.List;

import javax.ejb.Stateless;

import pl.programistyczne.wieczorki.tga.entities.ProjectEntity;

@Stateless
public class ProjectDao extends AbstractDao<ProjectEntity> {

	public ProjectDao() {
		super(ProjectEntity.class);
	}

	@Override
	public List<ProjectEntity> selectAll() {
		return em.createQuery("select new ProjectEntity(s.id, s.name, s.stopDate) from ProjectEntity s", ProjectEntity.class)
				.getResultList();
	}

}
