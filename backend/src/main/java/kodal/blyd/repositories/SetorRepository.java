package kodal.blyd.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import kodal.blyd.entities.Setor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SetorRepository extends JpaRepository<Setor, Long>{

    @Query("SELECT setor FROM Setor setor WHERE setor.id = :id")
    Setor procurarId(@Param("id") long id);

}
