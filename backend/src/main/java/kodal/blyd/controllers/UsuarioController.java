package kodal.blyd.controllers;

import java.util.List;

import kodal.blyd.dto.LoginDTO;
import kodal.blyd.dto.StatusDTO;
import kodal.blyd.services.SetorService;
import kodal.blyd.utils.scripts.CriarUsuarioScript;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.UsuarioDTO;
import kodal.blyd.utils.scripts.LoginScript;
import kodal.blyd.services.UsuarioService;

@RestController
@RequestMapping(value = "/usuarios")
public class UsuarioController {

	@Autowired
	private UsuarioService service;

	@Autowired
	private SetorService setorService;
	
	@GetMapping
	public ResponseEntity<List<UsuarioDTO>> findAll(){
		return ResponseEntity.ok(service.findAll());
	}

	@GetMapping(value = "/criar/{nome}/{email}/{senha}/{celular}/{foto}/{pcd}/{admin}/{idSetor}")
	public ResponseEntity<StatusDTO> criarUsuario(
			@PathVariable String nome,
			@PathVariable String email,
			@PathVariable String senha,
			@PathVariable String celular,
			@PathVariable String foto,
			@PathVariable boolean pcd,
			@PathVariable boolean admin,
			@PathVariable long idSetor
	) {
		StatusDTO status = new StatusDTO();
		return ResponseEntity.ok(new CriarUsuarioScript(service, setorService).criarUsuario(nome, email, senha, celular, foto, pcd, admin, idSetor));
	}

	@GetMapping(value = "/login/{inputEmail}/{inputSenha}")
	public ResponseEntity<LoginDTO> login(
			@PathVariable String inputEmail, 
			@PathVariable String inputSenha)
	{
		return ResponseEntity.ok(new LoginScript().verificarLogin(inputEmail, inputSenha, service));
	}

	@GetMapping(value = "/atualizar/{id}/{nome}/{email}/{senha}/{celular}/{pcd}/{admin}/{status}/{setorId}")
	public ResponseEntity<StatusDTO> atualizarUsuario(
			@PathVariable long id,
			@PathVariable String nome,
			@PathVariable String email,
			@PathVariable String senha,
			@PathVariable String celular,
			@PathVariable boolean pcd,
			@PathVariable boolean admin,
			@PathVariable boolean status,
			@PathVariable long setorId
	){
		return ResponseEntity.ok(service.atualizarUsuario(id, nome, email, senha, celular, pcd, admin, status, setorId));
	}

	@GetMapping(value = "/desativar/{id}")
	public ResponseEntity<StatusDTO> desativarUsuario(@PathVariable long id) {
		return ResponseEntity.ok(service.desativarUsuario(id));
	}

	@GetMapping(value = "/ativar/{id}")
	public ResponseEntity<StatusDTO> ativarUsuario(@PathVariable long id) {
		return ResponseEntity.ok(service.ativarUsuario(id));
	}

	@GetMapping(value = "/adicionar-chamada/{id}")
	public ResponseEntity<StatusDTO> adicionarChamada(@PathVariable long id) {
		return ResponseEntity.ok(service.adicionarChamada(id));
	}
}
