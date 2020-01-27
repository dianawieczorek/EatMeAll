package pl.programistyczne.wieczorki.resources.customer.employee;

import static pl.programistyczne.wieczorki.resthelper.RestUrlList.CUSTOMER_EMPLOYEE;

import javax.ejb.EJB;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import pl.programistyczne.wieczorki.AbstractRestfull;
import pl.programistyczne.wieczorki.resources.customer.company.CustomerCompanyDto;
import pl.programistyczne.wieczorki.resources.customer.company.CustomerCompnyDtoToEntityMapper;
import pl.programistyczne.wieczorki.resthelper.PrettyResponse;
import pl.programistyczne.wieczorki.tga.daos.CustomerEmployeeDao;
import pl.programistyczne.wieczorki.tga.entities.CustomerEmployeeEntity;

@Path("customer-employee")
public class CustomerEmployeeRestful extends
        AbstractRestfull<CustomerEmployeeDao, CustomerEmployeeEntity, CustomerEmployeeDto, CustomerEmployeeShortDto> {
    @EJB
    CustomerEmployeeDao dao;

    public CustomerEmployeeRestful() {
        super(CustomerEmployeeEntity.class, CustomerEmployeeDto.class, CustomerEmployeeShortDto.class);
    }

    @Override
    protected void addGenericLinks(PrettyResponse<?> aResponse) {
        aResponse.addLink("GET", "getAll", CUSTOMER_EMPLOYEE);
        aResponse.addLink("GET", "getEntityById", CUSTOMER_EMPLOYEE + "{id}");
        aResponse.addLink("POST", "addEntity", CUSTOMER_EMPLOYEE);
        aResponse.addLink("DELETE", "delete", CUSTOMER_EMPLOYEE + "{id}");
    }

    @Override
    protected void addMyselfLinks(PrettyResponse<?> aPrettyResponse, long aId) {
        aPrettyResponse.addLink("GET", "myself", CUSTOMER_EMPLOYEE + aId);
    }

    @GET
    @Path("")
    @Produces("application/json; charset=UTF-8")
    public Response getAll() {
        return getAll(dao, "CustomerEmployeeShortDto");
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
    public Response createNewCustomerEmployee(CustomerEmployeeDto aEmployee) {
        return createNew(dao, CustomerEmployeeDtoToEntityMapper.convert(aEmployee));
    }

    @DELETE
    @Path("{id}")
    @Consumes("application/json; charset=UTF-8")
    @Produces("application/json; charset=UTF-8")
    public Response removeEmployeeById(@PathParam("id") long aId) {
        return remove(dao, aId);
    }

    @PUT
    @Path("")
    @Consumes("application/json; charset=UTF-8")
    @Produces("application/json; charset=UTF-8")
    public Response editCustomerEmployee(CustomerEmployeeDto aCustomerEmployee){
        return update(dao, CustomerEmployeeDtoToEntityMapper.convert(aCustomerEmployee));
    }
}
