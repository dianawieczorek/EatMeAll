package pl.programistyczne.wieczorki.tga.entities.relations;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import pl.programistyczne.wieczorki.tga.entities.AbstractBaseEntity;
import pl.programistyczne.wieczorki.tga.entities.ProjectEntity;
import pl.programistyczne.wieczorki.tga.entities.SubcontractorEntity;

@Entity
@Table(name = "R_AGREEMENTS")
public class AgreementEntity extends AbstractBaseEntity {
	private Date startDate;
	private Date realEndDate;

	@ManyToOne
	@JoinColumn(name = "project_id")
	private ProjectEntity project;

	@ManyToOne
	@JoinColumn(name = "subcotractor_id")
	private SubcontractorEntity subcontractor;
}
