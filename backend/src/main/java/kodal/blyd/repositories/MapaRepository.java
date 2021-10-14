package kodal.blyd.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import kodal.blyd.entities.Mapa;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MapaRepository extends JpaRepository<Mapa, Long>{

    @Query("SELECT mapa FROM Mapa mapa WHERE id= :id")
    Mapa procurarMapa(@Param("id") long id);

}
