package kodal.blyd.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import kodal.blyd.entities.Ponto;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PontoRepository extends JpaRepository<Ponto, Long>{

    @Query("SELECT ponto FROM Ponto ponto WHERE ponto.id = :id")
    Ponto procurarId(@Param("id") long id);

}
