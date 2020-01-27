package pl.programistyczne.wieczorki.tga.daos;

import pl.programistyczne.wieczorki.tga.entities.AbstractBaseEntity;
import pl.programistyczne.wieczorki.tga.entities.CustomerCompanyEntity;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.core.Response;

public abstract class AbstractDao<T> {

	final Class<T> entityClazz;

	@PersistenceContext(unitName = "primary")
	protected EntityManager em;

	public AbstractDao(Class<T> entityClazz) {
		super();
		this.entityClazz = entityClazz;
}

	public abstract List<T> selectAll();

	public T selectById(long aId) {
		T ret = em.find(entityClazz, aId);
		return ret;
	}

	 @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
	 public T insert(T aEntity){
		 em.persist(aEntity);
		 return aEntity;
	 }

    public void remove(long aId) {
		T toRemove = selectById(aId);
		em.remove(toRemove);
    }

	@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
	public T update(T aEntity) {
		return em.merge(aEntity);
	}


//	private T newDto(T aEntity) {
//		try {
//			Constructor<T> constructor = aEntity.getClass().getDeclaredConstructor(entityClazz);
//			constructor.setAccessible(true);
//			return constructor.newInstance(aEntity);
//		} catch (InstantiationException | IllegalAccessException | IllegalArgumentException | InvocationTargetException
//				| NoSuchMethodException | SecurityException e) {
//			e.printStackTrace();
//		}
//		return null;
//	}
	//
	// @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
	// public abstract Boolean delete(long aId);

}
