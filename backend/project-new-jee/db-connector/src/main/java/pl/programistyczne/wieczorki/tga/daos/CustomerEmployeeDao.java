package pl.programistyczne.wieczorki.tga.daos;

import java.util.List;

import javax.ejb.Stateless;

import pl.programistyczne.wieczorki.tga.entities.CustomerEmployeeEntity;

@Stateless
public class CustomerEmployeeDao extends AbstractDao<CustomerEmployeeEntity> {

	public CustomerEmployeeDao() {
		super(CustomerEmployeeEntity.class);
	}

	@Override
	public List<CustomerEmployeeEntity> selectAll() {
		return em
				.createQuery("select new CustomerEmployeeEntity(s.id, s.name, s.surname) from CustomerEmployeeEntity s",
						CustomerEmployeeEntity.class)
				.getResultList();
	}

}
