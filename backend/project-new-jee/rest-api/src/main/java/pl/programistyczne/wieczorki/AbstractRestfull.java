package pl.programistyczne.wieczorki;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.core.Response;

import pl.programistyczne.wieczorki.resources.AbstractDto;
import pl.programistyczne.wieczorki.resthelper.PrettyResponse;
import pl.programistyczne.wieczorki.tga.daos.AbstractDao;
import pl.programistyczne.wieczorki.tga.daos.CustomerCompanyDao;
import pl.programistyczne.wieczorki.tga.entities.AbstractBaseEntity;
import pl.programistyczne.wieczorki.tga.entities.CustomerCompanyEntity;

public abstract class AbstractRestfull<Dao extends AbstractDao<EntityClazz>, EntityClazz, DtoClazz extends AbstractDto, ShortDtoClazz> {

	private Class<EntityClazz> entityClazz;
	private Class<DtoClazz> dtoClazz;
	private Class<ShortDtoClazz> shortDtoClazz;

	public AbstractRestfull(Class<EntityClazz> aEntityClazz, Class<DtoClazz> aDtoClazz,
			Class<ShortDtoClazz> aShortDtoClazz) {
		entityClazz = aEntityClazz;
		dtoClazz = aDtoClazz;
		shortDtoClazz = aShortDtoClazz;
	}

	protected abstract void addGenericLinks(PrettyResponse<?> aPrettyResponse);

	protected void addMyselfLinks(PrettyResponse<?> aPrettyResponse, long aId) {
	}

	protected Response getAll(Dao aDao, String aResponseName) {
		List<ShortDtoClazz> ret = new ArrayList<>();
		List<EntityClazz> queryResult = aDao.selectAll();
		for (EntityClazz entity : queryResult) {
			ret.add(newShortDto(entity));
		}
		PrettyResponse<List<ShortDtoClazz>> response = new PrettyResponse<>(ret);
		response.setEntityName(aResponseName);
		addGenericLinks(response);
		return Response.status(200).entity(response).build();
	}

	protected Response getById(Dao dao, long aId) {
		EntityClazz entity = dao.selectById(aId);
		if (entity == null) {
			return Response.status(404).encoding("Comapny with id " + aId + "doesn't exists").build();
		}
		DtoClazz ret = newDto(entity);

		PrettyResponse<DtoClazz> response = new PrettyResponse<>(ret);
		addMyselfLinks(response, aId);
		addGenericLinks(response);

		return Response.status(200).entity(response).build();
	}

	protected Response createNew(Dao dao, EntityClazz aEntity){
		EntityClazz newEntity = dao.insert(aEntity);
		DtoClazz ret = newDto(newEntity);
		PrettyResponse<DtoClazz> response = new PrettyResponse<>(ret);
		addMyselfLinks(response, ret.getId());
		addGenericLinks(response);
		return Response.status(201).entity(response).build();
	}

	protected Response remove(AbstractDao dao, long aId) {
		PrettyResponse<String> response = new PrettyResponse<>("");
		addGenericLinks(response);
		dao.remove(aId);
		return Response.status(204).build();
	}

	protected Response update(AbstractDao dao, EntityClazz aEntity) {
		EntityClazz newEntity = (EntityClazz) dao.update(aEntity);
		DtoClazz ret = newDto(newEntity);
		PrettyResponse<DtoClazz> response = new PrettyResponse<>(ret);
		addMyselfLinks(response, ret.getId());
		addGenericLinks(response);
		return Response.status(200).entity(response).build();
	}

	private ShortDtoClazz newShortDto(EntityClazz aEntity) {
		try {
			Constructor<ShortDtoClazz> constructor = shortDtoClazz.getDeclaredConstructor(entityClazz);
			constructor.setAccessible(true);
			return constructor.newInstance(aEntity);
		} catch (InstantiationException | IllegalAccessException | IllegalArgumentException | InvocationTargetException
				| NoSuchMethodException | SecurityException e) {
			e.printStackTrace();
		}
		return null;
	}

	private DtoClazz newDto(EntityClazz aEntity) {
		try {
			Constructor<DtoClazz> constructor = dtoClazz.getDeclaredConstructor(entityClazz);
			constructor.setAccessible(true);
			return constructor.newInstance(aEntity);
		} catch (InstantiationException | IllegalAccessException | IllegalArgumentException | InvocationTargetException
				| NoSuchMethodException | SecurityException e) {
			e.printStackTrace();
		}
		return null;
	}

	private EntityClazz newEntity(DtoClazz aEntity) {
		try {
			Constructor<EntityClazz> constructor = entityClazz.getDeclaredConstructor(dtoClazz);
			constructor.setAccessible(true);
			return constructor.newInstance(aEntity);
		} catch (InstantiationException | IllegalAccessException | IllegalArgumentException | InvocationTargetException
				| NoSuchMethodException | SecurityException e) {
			e.printStackTrace();
		}
		return null;
	}
}
