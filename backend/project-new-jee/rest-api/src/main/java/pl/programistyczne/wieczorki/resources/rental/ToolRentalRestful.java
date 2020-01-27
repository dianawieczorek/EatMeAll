package pl.programistyczne.wieczorki.resources.rental;

import javax.ejb.EJB;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import pl.programistyczne.wieczorki.AbstractRestfull;
import pl.programistyczne.wieczorki.resources.projects.ProjectDto;
import pl.programistyczne.wieczorki.resources.projects.ProjectDtoToEntityMapper;
import pl.programistyczne.wieczorki.resthelper.PrettyResponse;
import pl.programistyczne.wieczorki.tga.daos.RentalDao;
import pl.programistyczne.wieczorki.tga.entities.relations.ToolRentalEntity;

@Path("rental")
public class ToolRentalRestful
        extends AbstractRestfull<RentalDao, ToolRentalEntity, ToolRentalDto, ToolRentalShortDto> {

    @EJB
    RentalDao dao;

    public ToolRentalRestful() {
        super(ToolRentalEntity.class, ToolRentalDto.class, ToolRentalShortDto.class);
    }

    @Override
    protected void addGenericLinks(PrettyResponse<?> aPrettyResponse) {
        // TODO Auto-generated method stub
    }

    @GET
    @Path("")
    @Produces("application/json; charset=UTF-8")
    public Response getAll() {
        return getAll(dao, "ToolRentalShortDto");
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
    public Response createRentalEmployee(ToolRentalDto aRental) {
        return createNew(dao, ToolRentalDtoToEntityMapper.convert(aRental));
    }

    @DELETE
    @Path("{id}")
    @Consumes("application/json; charset=UTF-8")
    @Produces("application/json; charset=UTF-8")
    public Response removeRentalById(@PathParam("id") long aId) {
        return remove(dao, aId);
    }

    @PUT
    @Path("")
    @Consumes("application/json; charset=UTF-8")
    @Produces("application/json; charset=UTF-8")
    public Response editRental(ToolRentalDto aRental) {
        return update(dao, ToolRentalDtoToEntityMapper.convert(aRental));
    }
}
