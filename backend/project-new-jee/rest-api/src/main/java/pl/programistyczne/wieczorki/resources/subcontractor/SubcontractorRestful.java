package pl.programistyczne.wieczorki.resources.subcontractor;

import javax.ejb.EJB;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import pl.programistyczne.wieczorki.AbstractRestfull;
import pl.programistyczne.wieczorki.resources.rental.ToolRentalDto;
import pl.programistyczne.wieczorki.resources.rental.ToolRentalDtoToEntityMapper;
import pl.programistyczne.wieczorki.resthelper.PrettyResponse;
import pl.programistyczne.wieczorki.tga.daos.SubcontractorDao;
import pl.programistyczne.wieczorki.tga.entities.SubcontractorEntity;

@Path("subcontractor")
public class SubcontractorRestful
		extends AbstractRestfull<SubcontractorDao, SubcontractorEntity, SubcontractorDto, SubcontractorShortDto> {

	@EJB
	SubcontractorDao dao;

	public SubcontractorRestful() {
		super(SubcontractorEntity.class, SubcontractorDto.class, SubcontractorShortDto.class);
	}

	@Override
	protected void addGenericLinks(PrettyResponse<?> aPrettyResponse) {
		// TODO Auto-generated method stub
	}

	@GET
	@Path("")
	@Produces("application/json; charset=UTF-8")
	public Response getAll() {
		return getAll(dao, "SubcordinatorShortDto");
	}

	@GET
	@Path("{id}")
	@Produces("application/json; charset=UTF-8")
	public Response getById(@PathParam("id") long aId) {
		return getById(dao, aId);
	}

	@POST
	@Path("")
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	public Response createNewSubcontractor(SubcontractorDto aSubcontractor){
		return createNew(dao, SubcontractorDtoToEntityMapper.convert(aSubcontractor));
	}


	@DELETE
	@Path("{id}")
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	public Response removeSubcontractorById(@PathParam("id") long aId){
		return remove(dao, aId);
	}

	@PUT
	@Path("")
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	public Response editSubcontractor(SubcontractorDto aSubcontractor) {
		return update(dao, SubcontractorDtoToEntityMapper.convert(aSubcontractor));
	}
}
