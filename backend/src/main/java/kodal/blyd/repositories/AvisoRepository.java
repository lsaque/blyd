package kodal.blyd.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import kodal.blyd.entities.Aviso;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AvisoRepository extends JpaRepository<Aviso, Long>{

    @Modifying
    @Query(value = "INSERT INTO T_AVISO (descricao, local ,tempo_duracao, transitavel, ponto_id, usuario_id) VALUES (:descricao, :local, :tempoDuracao, :transitavel, :pontoId, :usuarioId)", nativeQuery = true)
    void marcarAviso(
            @Param("descricao") String descricao,
            @Param("local") String local,
            @Param("tempoDuracao") String tempoDuracao,
            @Param("transitavel") boolean transitavel,
            @Param("pontoId") long pontoId,
            @Param("usuarioId") long usuarioId
    );

}
