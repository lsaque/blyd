package kodal.blyd.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.entities.Aviso;
import kodal.blyd.entities.Setor;
import kodal.blyd.entities.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.SolicitacaoCadastroDTO;
import kodal.blyd.entities.SolicitacaoCadastro;
import kodal.blyd.repositories.SolicitacaoCadastroRepository;

@Service
public class SolicitacaoCadastroService {

	@Autowired
	private SolicitacaoCadastroRepository repository;

	@Autowired
	private SetorService setorService;

	@Autowired
	private UsuarioService usuarioService;

	@Cacheable("solicitacoes")
	@Transactional(readOnly = true)
	public List<SolicitacaoCadastroDTO> findAll(){
		return repository.findAll().stream().map(solicitacao -> new SolicitacaoCadastroDTO(solicitacao)).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public Boolean procurarEmail(String email) {
		return repository.procurarEmail(email);
	}

	@Caching(evict = @CacheEvict(value = "solicitacoes", allEntries = true))
	public void adicionarSolicitacaoCadastro(SolicitacaoCadastro solicitacao) {
		repository.save(solicitacao);
	}

	@Caching(evict = @CacheEvict(value = "solicitacoes", allEntries = true))
	public StatusDTO aceitarSolitacaoCadastro(long idSolicitacao, String foto, boolean pcd, boolean admin, long idSetor) {
		StatusDTO status = new StatusDTO();
		SolicitacaoCadastro solicitacaoCadastro = repository.findById(idSolicitacao);
		Setor setor = setorService.procurarId(idSetor);

		status.setStatus(false);
		if(solicitacaoCadastro == null) {
			status.setMensagem("Solicitação selecionada não encontrada!");
			return status;
		}
		if(setor == null) {
			status.setMensagem("Solicitação selecionada não aceita! Setor inexistente!");
			return status;
		}

		Usuario usuario = new Usuario(
				solicitacaoCadastro.getNome(),
				solicitacaoCadastro.getEmail(),
				solicitacaoCadastro.getSenha(),
				solicitacaoCadastro.getCelular(),
				foto,
				0, 0, 0,
				pcd, admin,
				setor,
				new ArrayList<Aviso>()
		);

		try {
			repository.delete(solicitacaoCadastro);
			status.setMensagem("Solicitação selecionada foi aceita!");
			usuarioService.adicionarUsuario(usuario);
			status.setStatus(true);
		} catch (Exception e) {
			status.setMensagem("Solicitação selecionada não foi aceita!");
		}
		return status;
	}

	@Caching(evict = @CacheEvict(value = "solicitacoes", allEntries = true))
	public StatusDTO recusarSolicitacaoCadastro(long idSolicitacao) {
		StatusDTO status = new StatusDTO();
		SolicitacaoCadastro solicitacaoCadastro = repository.findById(idSolicitacao);

		status.setStatus(false);

		if(solicitacaoCadastro == null) status.setMensagem("Solicitação selecionada não foi recusada! Solicitação inexistente!");
		else {
			try {
				repository.delete(solicitacaoCadastro);
				status.setMensagem("Solicitação selecionada foi recusada!");
				status.setStatus(true);
			} catch (Exception e) {
				status.setMensagem("Solicitação selecionada não foi recusada!");
			}
		}
		return status;
	}
}
