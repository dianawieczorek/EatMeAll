package pl.programistyczne.wieczorki.tga.daos;

import java.util.List;

import javax.ejb.Stateless;

import pl.programistyczne.wieczorki.tga.entities.CustomerCompanyEntity;

@Stateless
public class CustomerCompanyDao extends AbstractDao<CustomerCompanyEntity> {

	public CustomerCompanyDao() {
		super(CustomerCompanyEntity.class);
	}

	@Override
	public List<CustomerCompanyEntity> selectAll() {
		return em.createQuery("select new CustomerCompanyEntity(s.id, s.name) from CustomerCompanyEntity s",
				CustomerCompanyEntity.class).getResultList();
	}

	// @Override
	// @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
	// public CustomerCompanyEntity insert(CustomerCompanyEntity aEntity) {
	// em.persist(aEntity);
	// return aEntity;
	// }
	//
	// @Override
	// @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
	// public Boolean delete(long aId) {
	// CustomerCompanyEntity ent = selectById(aId);
	// if (ent != null) {
	// em.remove(ent);
	// return true;
	// } else {
	// return false;
	// }
	// }
}
