package pl.programistyczne.wieczorki.resources.tool;

import javax.ejb.EJB;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import pl.programistyczne.wieczorki.AbstractRestfull;
import pl.programistyczne.wieczorki.resources.rental.ToolRentalDto;
import pl.programistyczne.wieczorki.resources.rental.ToolRentalDtoToEntityMapper;
import pl.programistyczne.wieczorki.resthelper.PrettyResponse;
import pl.programistyczne.wieczorki.tga.daos.ToolDao;
import pl.programistyczne.wieczorki.tga.entities.ToolEntity;

@Path("tool")
public class ToolRestful extends AbstractRestfull<ToolDao, ToolEntity, ToolDto, ToolShortDto> {

	@EJB
	ToolDao dao;

	public ToolRestful() {
		super(ToolEntity.class, ToolDto.class, ToolShortDto.class);
	}

	@Override
	protected void addGenericLinks(PrettyResponse<?> aPrettyResponse) {
		// TODO Auto-generated method stub
	}

	@GET
	@Path("")
	@Produces("application/json; charset=UTF-8")
	public Response getAll() {
		return getAll(dao, "ToolShortDto");
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
	public Response createTool(ToolDto aTool){
		return createNew(dao, ToolDtoToEntityMapper.convert(aTool));
	}

	@DELETE
	@Path("{id}")
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	public Response removeToolById(@PathParam("id") long aId){
		return remove(dao, aId);
	}

	@PUT
	@Path("")
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	public Response editRental(ToolDto aTool) {
		return update(dao, ToolDtoToEntityMapper.convert(aTool));
	}
}
