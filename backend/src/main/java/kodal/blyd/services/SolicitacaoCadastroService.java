package kodal.blyd.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.entities.Aviso;
import kodal.blyd.entities.Setor;
import kodal.blyd.entities.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
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
	
	@Transactional(readOnly = true)
	public List<SolicitacaoCadastroDTO> findAll(){
		return repository.findAll().stream().map(solicitacao -> new SolicitacaoCadastroDTO(solicitacao)).collect(Collectors.toList());
	}
	
	@Transactional(readOnly = true)
	public Boolean procurarEmail(String email) {
		return repository.procurarEmail(email);
	}

	public void adicionarSolicitacaoCadastro(SolicitacaoCadastro solicitacao) {
		repository.save(solicitacao);
	}

	public StatusDTO aceitarSolitacaoCadastro(long idSolicitacao, String foto, boolean pcd, boolean admin, long idSetor) {
		StatusDTO status = new StatusDTO();
		SolicitacaoCadastro solicitacaoCadastro = repository.findById(idSolicitacao);
		Setor setor = setorService.procurarId(idSetor);

		status.setStatus(false);
		if(solicitacaoCadastro == null) {
			status.setMensagem("Erro: solicitação não encontrada.");
			return status;
		}
		if(setor == null) {
			status.setMensagem("Erro: setor não encontrado.");
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
			status.setMensagem("Sucesso: solicitação removida.");
			status.setMensagem(usuarioService.adicionarUsuario(usuario).getMensagem());
			status.setStatus(true);
		} catch (Exception e) {
			status.setMensagem("Erro: " + e);
		}
		return status;
	}
}
