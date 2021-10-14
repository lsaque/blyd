package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.dto.UsuarioSemSetorDTO;
import kodal.blyd.entities.Setor;
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

	@Autowired
	private SetorService setorService;
	
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

	@Transactional(readOnly = true)
	public List<UsuarioSemSetorDTO> findAllBySetorId(Long id){
		return repository.findAllBySetorId(id).stream().map(usuario -> new UsuarioSemSetorDTO(usuario)).collect(Collectors.toList());
	}

	@Transactional
	public StatusDTO atualizarUsuario(long id, String nome, String email,String senha, String celular, String foto, boolean pcd, boolean admin, long idSetor) {
		Usuario usuario = procurarId(id);
		Setor setor = setorService.procurarId(id);
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
