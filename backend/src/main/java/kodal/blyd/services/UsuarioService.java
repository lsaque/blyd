package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import kodal.blyd.entities.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.UsuarioDTO;
import kodal.blyd.repositories.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository repository;
	
	@Transactional(readOnly = true)
	public List<UsuarioDTO> findAll() {
		return repository.findAll().stream().map(usuario -> new UsuarioDTO(usuario)).collect(Collectors.toList());
	}
	
	@Transactional(readOnly = true)
	public Boolean procurarEmail(String email) { return repository.procurarEmail(email); }
	
	@Transactional(readOnly = true)
	public String requisitarSenha(String email) {
		return repository.requisitarSenha(email);
	}

	@Transactional(readOnly = true)
	public Usuario procurarId(long id) { return repository.procurarId(id); }
	
}
