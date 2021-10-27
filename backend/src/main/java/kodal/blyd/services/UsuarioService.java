package kodal.blyd.services;

import java.util.List;
import java.util.concurrent.ExecutionException;
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
			@CacheEvict(value = "usuarioLogin", allEntries = true),
			@CacheEvict(value = "usuario", key = "#id"),
			@CacheEvict(value = "setores", allEntries = true),
			@CacheEvict(value = "avisos", allEntries = true)
	})
	@Transactional
	public StatusDTO atualizarUsuario(long id, String nome, String email,String senha, String celular, boolean pcd, boolean admin, boolean statusUser, long idSetor) {
		Usuario usuario = procurarId(id);
		Setor setor = setorService.procurarId(idSetor);
		StatusDTO status = new StatusDTO();

		status.setStatus(false);

		if(setor == null) status.setMensagem("Usuario selecionado não foi atualizado! Setor inexistente!");
		else if(usuario == null) status.setMensagem("Usuario selecionado não foi atualizado! ID inexistente!");
		else {

			boolean add = false;

			if(usuario.getEmail().equalsIgnoreCase(email)) add = true;
			else if(!procurarEmail(email)) add = true;
			else status.setMensagem("Usuario selecionado não foi atualizado! Email já existente!");

			if(add) {
				usuario.setNome(nome);
				usuario.setEmail(email);
				usuario.setSenha(senha);
				usuario.setCelular(celular);
				usuario.setPcd(pcd);
				usuario.setAdmin(admin);
				usuario.setStatus(statusUser);
				usuario.setSetor(setor);
				try{
					repository.save(usuario);
					status.setMensagem("Usuario selecionado foi atualizado!");
					status.setStatus(true);
				}catch (Exception e) {
					status.setMensagem("Usuario selecionado não foi atualizado!");
				}
			}
		}

		return status;
	}

	@Caching(evict = {
			@CacheEvict(value = "usuarios", allEntries = true),
			@CacheEvict(value = "usuariosSemSetor", allEntries = true),
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
			status.setMensagem("Usuário selecionado foi adicionada!");
		}catch (Exception e) {
			status.setStatus(false);
			status.setMensagem("Usuário selecionado não foi adicionada!");
		}
		return status;
	}

	@Caching(evict = {
			@CacheEvict(value = "usuarios", allEntries = true),
			@CacheEvict(value = "usuariosSemSetor", allEntries = true),
			@CacheEvict(value = "usuarioLogin", allEntries = true),
			@CacheEvict(value = "usuario", key = "#id"),
			@CacheEvict(value = "setores", allEntries = true)
	})
	@Transactional
	public StatusDTO desativarUsuario(long id) {
		StatusDTO status = new StatusDTO();
		Usuario usuario = procurarId(id);

		status.setStatus(false);

		if(usuario == null) status.setMensagem("Usuário selecionado não foi desativado! ID inexistente!");
		else {

			try {
				usuario.setStatus(false);
				repository.save(usuario);
				status.setStatus(true);
				status.setMensagem("Usuário selecionado foi desativado!");
			} catch (Exception e) {
				status.setMensagem("Usuário selecionado não foi desativado!");
			}

		}
		return status;
	}

	@Caching(evict = {
			@CacheEvict(value = "usuarios", allEntries = true),
			@CacheEvict(value = "usuariosSemSetor", allEntries = true),
			@CacheEvict(value = "usuarioLogin", allEntries = true),
			@CacheEvict(value = "usuario", key = "#id"),
			@CacheEvict(value = "setores", allEntries = true)
	})
	@Transactional
	public StatusDTO ativarUsuario(long id) {
		StatusDTO status = new StatusDTO();
		Usuario usuario = procurarId(id);

		status.setStatus(false);

		if(usuario == null) status.setMensagem("Usuário selecionado não foi ativado! ID inexistente!");
		else {

			try {
				usuario.setStatus(true);
				repository.save(usuario);
				status.setStatus(true);
				status.setMensagem("Usuário selecionado foi ativado!");
			} catch (Exception e) {
				status.setMensagem("Usuário selecionado não foi ativado!");
			}

		}
		return status;
	}

	@Caching(evict = {
			@CacheEvict(value = "usuarios", allEntries = true),
			@CacheEvict(value = "usuariosSemSetor", allEntries = true),
			@CacheEvict(value = "usuarioLogin", allEntries = true),
			@CacheEvict(value = "usuario", key = "#id"),
			@CacheEvict(value = "setores", allEntries = true)
	})
	public StatusDTO adicionarAviso(long id) {
		StatusDTO status = new StatusDTO();
		Usuario usuario = procurarId(id);

		status.setStatus(false);

		if(usuario == null) status.setMensagem("Usuário selecionado não foi alterado o total de avisos! ID inexistente");
		else {
			try {
				usuario.setTotalAvisos(usuario.getTotalAvisos() + 1);
				repository.save(usuario);
				status.setStatus(true);
				status.setMensagem("Usuário selecionado foi alterado o total de avisos!");
			} catch(Exception e ) {
				status.setMensagem("Usuário selecionado foi não alterado o total de avisos!");
			}
		}
		return status;
	}

	@Caching(evict = {
			@CacheEvict(value = "usuarios", allEntries = true),
			@CacheEvict(value = "usuariosSemSetor", allEntries = true),
			@CacheEvict(value = "usuarioLogin", allEntries = true),
			@CacheEvict(value = "usuario", key = "#id"),
			@CacheEvict(value = "setores", allEntries = true)
	})
	public StatusDTO adicionarChamada(long id) {
		StatusDTO status = new StatusDTO();
		Usuario usuario = procurarId(id);

		status.setStatus(false);

		if(usuario == null) status.setMensagem("Usuário selecionado não foi alterado o total de chamadas! ID inexistente");
		else {
			try {
				usuario.setTotalChamadas(usuario.getTotalChamadas() + 1);
				repository.save(usuario);
				status.setStatus(true);
				status.setMensagem("Usuário selecionado foi alterado o total de chamadas!");
			} catch(Exception e ) {
				status.setMensagem("Usuário selecionado foi não alterado o total de chamadas!");
			}
		}
		return status;
	}

	@Caching(evict = {
			@CacheEvict(value = "usuarios", allEntries = true),
			@CacheEvict(value = "usuariosSemSetor", allEntries = true),
			@CacheEvict(value = "usuarioLogin", allEntries = true),
			@CacheEvict(value = "usuario", key = "#id"),
			@CacheEvict(value = "setores", allEntries = true)
	})
	public StatusDTO adicionarRota(long id) {
		StatusDTO status = new StatusDTO();
		Usuario usuario = procurarId(id);

		status.setStatus(false);

		if(usuario == null) status.setMensagem("Usuário selecionado não foi alterado o total de rotas! ID inexistente");
		else {
			try {
				usuario.setTotalRotas(usuario.getTotalRotas() + 1);
				repository.save(usuario);
				status.setStatus(true);
				status.setMensagem("Usuário selecionado foi alterado o total de rotas!");
			} catch(Exception e ) {
				status.setMensagem("Usuário selecionado foi não alterado o total de rotas!");
			}
		}
		return status;
	}

}
