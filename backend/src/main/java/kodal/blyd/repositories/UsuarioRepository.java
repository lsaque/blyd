package kodal.blyd.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import kodal.blyd.entities.Usuario;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	
	@Query("SELECT CASE WHEN (count(usuario) > 0) THEN true ELSE false END FROM Usuario usuario WHERE usuario.email = :email")
	Boolean procurarEmail(@Param("email") String email);
	
	@Query("SELECT usuario.senha FROM Usuario usuario WHERE usuario.email = :email")
	String requisitarSenha(@Param("email") String email);

	@Query("SELECT usuario FROM Usuario usuario WHERE usuario.id = :id")
	Usuario procurarId(@Param("id") long id);

	List<Usuario> findAllBySetorId(Long id);
	
}
