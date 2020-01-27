package pl.programistyczne.wieczorki.resources.rentalhistory;

import pl.programistyczne.wieczorki.resources.rental.ToolRentalDto;
import pl.programistyczne.wieczorki.resources.rental.ToolRentalDtoToEntityMapper;
import pl.programistyczne.wieczorki.resthelper.PrettyResponse;
import pl.programistyczne.wieczorki.tga.daos.ToolHistoryDao;
import pl.programistyczne.wieczorki.tga.entities.relations.ToolHistoryEntity;
import pl.programistyczne.wieczorki.AbstractRestfull;

import javax.ejb.EJB;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;

@Path("tool-history")
public class ToolHistoryRestful extends AbstractRestfull<ToolHistoryDao, ToolHistoryEntity, ToolHistoryDto, ToolHistoryShortDto> {

    @EJB
    ToolHistoryDao dao;

    public ToolHistoryRestful() {
        super(ToolHistoryEntity.class, ToolHistoryDto.class, ToolHistoryShortDto.class);
    }

    @Override
    protected void addGenericLinks(PrettyResponse<?> aPrettyResponse) {
        // TODO Auto-generated method stub
    }

    @GET
    @Path("")
    @Produces("application/json; charset=UTF-8")
    public Response getAll() {
        return getAll(dao, "ToolHistoryShortDto");
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
    public Response createNewToolHistory(ToolHistoryDto aRentalHistory){
        return createNew(dao, ToolHistoryDtoToEntityMapper.convert(aRentalHistory));
    }

    @DELETE
    @Path("{id}")
    @Consumes("application/json; charset=UTF-8")
    @Produces("application/json; charset=UTF-8")
    public Response removeToolHistory(@PathParam("id") long aId){
        return remove(dao, aId);
    }

    @PUT
    @Path("")
    @Consumes("application/json; charset=UTF-8")
    @Produces("application/json; charset=UTF-8")
    public Response editToolHistory(ToolHistoryDto aHistoryRental) {
        return update(dao, ToolHistoryDtoToEntityMapper.convert(aHistoryRental));
    }
}
