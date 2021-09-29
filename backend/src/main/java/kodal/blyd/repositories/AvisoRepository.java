package kodal.blyd.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import kodal.blyd.entities.Aviso;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AvisoRepository extends JpaRepository<Aviso, Long>{

    @Query("SELECT aviso FROM Aviso aviso where aviso.id = :id")
    Aviso procurarAviso(@Param("id") long id);

}
