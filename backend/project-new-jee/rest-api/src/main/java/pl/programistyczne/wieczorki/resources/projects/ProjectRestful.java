package pl.programistyczne.wieczorki.resources.projects;

import javax.ejb.EJB;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import pl.programistyczne.wieczorki.AbstractRestfull;
import pl.programistyczne.wieczorki.resources.customer.company.CustomerCompanyDto;
import pl.programistyczne.wieczorki.resources.customer.company.CustomerCompnyDtoToEntityMapper;
import pl.programistyczne.wieczorki.resources.customer.employee.CustomerEmployeeDto;
import pl.programistyczne.wieczorki.resources.customer.employee.CustomerEmployeeDtoToEntityMapper;
import pl.programistyczne.wieczorki.resthelper.PrettyResponse;
import pl.programistyczne.wieczorki.tga.daos.ProjectDao;
import pl.programistyczne.wieczorki.tga.entities.ProjectEntity;

@Path("project")
public class ProjectRestful extends AbstractRestfull<ProjectDao, ProjectEntity, ProjectDto, ProjectShortDto> {

	@EJB
	ProjectDao dao;

	public ProjectRestful() {
		super(ProjectEntity.class, ProjectDto.class, ProjectShortDto.class);
	}

	@Override
	protected void addGenericLinks(PrettyResponse<?> aPrettyResponse) {
	}

	@GET
	@Path("")
	@Produces("application/json; charset=UTF-8")
	public Response getAll() {
		return getAll(dao, "ProjectShortDto");
	}

	//serverIP:port/warName/JaxRSConfig/ClassName/Method
	//localhot:8080/xxx/project/2
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
	public Response createNewProject(ProjectDto aProject){
		return createNew(dao, ProjectDtoToEntityMapper.convert(aProject));
	}

	@DELETE
	@Path("{id}")
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	public Response removeProjectById(@PathParam("id") long aId){
		return remove(dao, aId);
	}

	@PUT
	@Path("")
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	public Response editProject(ProjectDto aProject){
		return update(dao, ProjectDtoToEntityMapper.convert(aProject));
	}
}
