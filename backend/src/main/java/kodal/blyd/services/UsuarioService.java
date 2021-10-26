package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.dto.UsuarioSemSetorDTO;
import kodal.blyd.entities.Setor;
import kodal.blyd.entities.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.UsuarioDTO;
import kodal.blyd.repositories.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository repository;

	@Autowired
	private SetorService setorService;

	@Cacheable("usuarios")
	@Transactional(readOnly = true)
	public List<UsuarioDTO> findAll() {
		return repository.findAll().stream().map(usuario -> new UsuarioDTO(usuario)).collect(Collectors.toList());
	}

	@Cacheable(value = "usuarioEmail", key="#email")
	@Transactional(readOnly = true)
	public Boolean procurarEmail(String email) { return repository.procurarEmail(email); }

	@Cacheable(value = "usuarioLogin", key = "{#email, #senha}")
	@Transactional(readOnly = true)
	public UsuarioDTO verificarLogin(String email, String senha) {
		Usuario usuario = repository.verificarLogin(email, senha);
		if(usuario == null) return null;
		else return new UsuarioDTO(usuario);
	}

	@Cacheable(value = "usuario", key = "#id")
	@Transactional(readOnly = true)
	public Usuario procurarId(long id) { return repository.procurarId(id); }

	@Cacheable("usuariosSemSetor")
	@Transactional(readOnly = true)
	public List<UsuarioSemSetorDTO> findAllBySetorId(Long id){
		return repository.findAllBySetorId(id).stream().map(usuario -> new UsuarioSemSetorDTO(usuario)).collect(Collectors.toList());
	}

	@Caching(evict = {
			@CacheEvict(value = "usuarios", allEntries = true),
			@CacheEvict(value = "usuariosSemSetor", allEntries = true),
			@CacheEvict(value = "usuarioEmail", allEntries = true),
			@CacheEvict(value = "usuarioLogin", allEntries = true),
			@CacheEvict(value = "usuario", key = "#id"),
			@CacheEvict(value = "setores", allEntries = true),
			@CacheEvict(value = "avisos", allEntries = true)
	})
	@Transactional
	public StatusDTO atualizarUsuario(long id, String nome, String email,String senha, String celular, String foto, boolean pcd, boolean admin, long idSetor) {
		Usuario usuario = procurarId(id);
		Setor setor = setorService.procurarId(idSetor);
		StatusDTO status = new StatusDTO();

		status.setStatus(false);

		if(setor == null) status.setMensagem("Erro: setor não encontrado.");

		usuario.setNome(nome);
		usuario.setEmail(email);
		usuario.setSenha(senha);
		usuario.setCelular(celular);
		usuario.setFoto(foto);
		usuario.setPcd(pcd);
		usuario.setAdmin(admin);
		usuario.setSetor(setor);

		try{
			repository.save(usuario);
			status.setMensagem("Usuario atualizado com sucesso.");
			status.setStatus(true);
		}catch (Exception e) {
			status.setMensagem("Erro: " + e);
		}
		return status;
	}

	@Caching(evict = {
			@CacheEvict(value = "usuarios", allEntries = true),
			@CacheEvict(value = "usuariosSemSetor", allEntries = true),
			@CacheEvict(value = "usuarioEmail", allEntries = true),
			@CacheEvict(value = "usuarioLogin", allEntries = true),
			@CacheEvict(value = "usuario", key = "#usuario.id"),
			@CacheEvict(value = "setores", allEntries = true)
	})
	@Transactional
	public StatusDTO adicionarUsuario(Usuario usuario) {
		StatusDTO status = new StatusDTO();

		try {
			repository.save(usuario);
			status.setStatus(true);
			status.setMensagem("Sucesso: usuário adicionado.");
		}catch (Exception e) {
			status.setStatus(false);
			status.setMensagem("Erro: " + e);
		}
		return status;
	}

}
