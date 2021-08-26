package kodal.blyd.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.SolicitacaoCadastroAdicionarDTO;
import kodal.blyd.dto.SolicitacaoCadastroDTO;
import kodal.blyd.entities.SolicitacaoCadastro;
import kodal.blyd.services.SolicitacaoCadastroService;
import kodal.blyd.services.UsuarioService;

@RestController
@RequestMapping(value = "/solicitacoes-cadastro")
public class SolicitacaoCadastroController {

	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private SolicitacaoCadastroService solicitacaoService;
	
	@GetMapping()
	public ResponseEntity<List<SolicitacaoCadastroDTO>> findAll() {
		List<SolicitacaoCadastroDTO> solicitacao = solicitacaoService.findAll();
		return ResponseEntity.ok(solicitacao);
	}
	
	@GetMapping(value = "/adicionar/{nome}/{email}/{senha}/{celular}/{pcd}")
	public ResponseEntity<SolicitacaoCadastroAdicionarDTO> adicionarSolicitacaoCadastro(
			@PathVariable String nome,
			@PathVariable String email,
			@PathVariable String senha,
			@PathVariable String celular,
			@PathVariable boolean pcd) 
	{
		
		SolicitacaoCadastroAdicionarDTO adicionar = new SolicitacaoCadastroAdicionarDTO();
		
		adicionar.setStatus(false);
		if(!usuarioService.procurarEmail(email)) {
			if(!solicitacaoService.procurarEmail(email)) {
				adicionar.setStatus(true);
				adicionar.setMensagem("Sua solicitação de cadastro foi enviada para o adminstrador!");
				solicitacaoService.adicionarSolicitacaoCadastro(new SolicitacaoCadastro(nome, email, senha, celular, pcd));
			}  else adicionar.setMensagem("Uma solitação nesse email já foi solicitada! Aguarde o adminstrador!");

		} else adicionar.setMensagem("Já existe um usuário com o email inserido, tente outro!");
		
		return ResponseEntity.ok(adicionar);
	}
	
}
