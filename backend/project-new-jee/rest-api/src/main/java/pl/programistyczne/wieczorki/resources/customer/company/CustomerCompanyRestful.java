package pl.programistyczne.wieczorki.resources.customer.company;

import static pl.programistyczne.wieczorki.resthelper.RestUrlList.CUSTOMER_COMPANY;

import javax.ejb.EJB;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import pl.programistyczne.wieczorki.AbstractRestfull;
import pl.programistyczne.wieczorki.resthelper.PrettyResponse;
import pl.programistyczne.wieczorki.tga.daos.CustomerCompanyDao;
import pl.programistyczne.wieczorki.tga.entities.CustomerCompanyEntity;

@Path("customer-company")
public class CustomerCompanyRestful extends
		AbstractRestfull<CustomerCompanyDao, CustomerCompanyEntity, CustomerCompanyDto, CustomerCompanyShortDto> {

	@EJB
	CustomerCompanyDao dao;

	public CustomerCompanyRestful() {
		super(CustomerCompanyEntity.class, CustomerCompanyDto.class, CustomerCompanyShortDto.class);
	}

	@Override
	protected void addGenericLinks(PrettyResponse<?> aResponse) {
		aResponse.addLink("GET", "getAll", CUSTOMER_COMPANY);
		aResponse.addLink("GET", "getEntityById", CUSTOMER_COMPANY + "{id}");
		aResponse.addLink("POST", "addEntity", CUSTOMER_COMPANY);
		aResponse.addLink("DELETE", "delete", CUSTOMER_COMPANY + "{id}");
	}

	@Override
	protected void addMyselfLinks(PrettyResponse<?> aPrettyResponse, long aId) {
		aPrettyResponse.addLink("GET", "myself", CUSTOMER_COMPANY + aId);
	}

	@GET
	@Path("")
	@Produces("application/json; charset=UTF-8")
	public Response getAll() {
		return getAll(dao, "CustomerCompanyShortDto");
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
	public Response createNewCustomerCompany(CustomerCompanyDto aCustomerCompany){
		return createNew(dao, CustomerCompnyDtoToEntityMapper.convert(aCustomerCompany));
	}

	@DELETE
	@Path("{id}")
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	public Response removeCustomerCompanyById(@PathParam("id") long aId){
		return remove(dao, aId);
	}

	@PUT
	@Path("")
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	public Response editCustomerCompany(CustomerCompanyDto aCustomerCompany){
		return update(dao, CustomerCompnyDtoToEntityMapper.convert(aCustomerCompany));
	}

	// @POST
	// @Path("")
	// @Consumes(MediaType.APPLICATION_JSON)
	// @Produces("application/json; charset=UTF-8")
	// public Response post(CustomerCompanyEntity aEntity) {
	// CustomerCompanyEntity persistedEntity = dao.insert(aEntity);
	//
	// PrettyResponse<CustomerCompanyEntity> response = new
	// PrettyResponse<>(persistedEntity);
	// response.addLink("GET", "myself", CUSTOMER_COMPANY +
	// persistedEntity.getId());
	// addGenericLinks(response);
	//
	// return Response.status(201).entity(response).build();
	// }
	//
	// @DELETE
	// @Produces("application/json; charset=UTF-8")
	// @Path("{id}")
	// public Response delete(@PathParam("id") long aId) {
	// if (dao.delete(aId)) {
	// return Response.status(204).build();
	// } else {
	// return Response.status(404).build();
	// }
	// }
}
