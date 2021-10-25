package kodal.blyd.controllers;

import java.util.List;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.repositories.SolicitacaoCadastroRepository;
import kodal.blyd.utils.commons.SolicitacaoCadastroScript;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.SolicitacaoCadastroDTO;
import kodal.blyd.services.SolicitacaoCadastroService;
import kodal.blyd.services.UsuarioService;

@RestController
@RequestMapping(value = "/solicitacoes-cadastro")
public class SolicitacaoCadastroController {

	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private SolicitacaoCadastroService solicitacaoService;

	@Autowired
	private SolicitacaoCadastroRepository solicitacaoCadastroRepository;
	
	@GetMapping
	public ResponseEntity<List<SolicitacaoCadastroDTO>> findAll() {
		List<SolicitacaoCadastroDTO> solicitacao = solicitacaoService.findAll();
		System.out.println("Listar");
		return ResponseEntity.ok(solicitacao);
	}
	
	@GetMapping(value = "/adicionar/{nome}/{email}/{senha}/{celular}/{pcd}")
	public ResponseEntity<StatusDTO> adicionarSolicitacaoCadastro(
			@PathVariable String nome,
			@PathVariable String email,
			@PathVariable String senha,
			@PathVariable String celular,
			@PathVariable boolean pcd) 
	{
		SolicitacaoCadastroScript script = new SolicitacaoCadastroScript(usuarioService, solicitacaoService);
		System.out.println("Adicionar");
		return ResponseEntity.ok(script.adicionarSolicitacaoCadastro(nome, email, senha, celular, pcd));
	}

	@GetMapping(value = "/aceitar/{idSolicitacao}/{foto}/{pcd}/{admin}/{idSetor}")
	public ResponseEntity<StatusDTO> aceitarSolicitacaoCadastro(
			@PathVariable long idSolicitacao,
			@PathVariable String foto,
			@PathVariable boolean pcd,
			@PathVariable boolean admin,
			@PathVariable long idSetor

	) {
		System.out.println("Aceitar");
		return ResponseEntity.ok(solicitacaoService.aceitarSolitacaoCadastro(idSolicitacao, foto, pcd, admin, idSetor));
	}

}
