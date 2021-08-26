package kodal.blyd.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import kodal.blyd.entities.SolicitacaoCadastro;

public interface SolicitacaoCadastroRepository extends JpaRepository<SolicitacaoCadastro, Long>{

	@Query("SELECT CASE WHEN (count(solicitacao) > 0) THEN true ELSE false END FROM SolicitacaoCadastro solicitacao WHERE solicitacao.email = :email")
	Boolean procurarEmail(@Param("email") String email);
	
}
