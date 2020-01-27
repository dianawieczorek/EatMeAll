package pl.programistyczne.wieczorki.tga.daos;

import pl.programistyczne.wieczorki.tga.entities.relations.ToolHistoryEntity;

import javax.ejb.Stateless;
import java.util.List;

@Stateless
public class ToolHistoryDao extends AbstractDao<ToolHistoryEntity>{

    public ToolHistoryDao() {
        super(ToolHistoryEntity.class);
    }

    @Override
    public List<ToolHistoryEntity> selectAll() {
        return em.createQuery("select s from ToolHistoryEntity s",
                ToolHistoryEntity.class).getResultList();
    }
}
