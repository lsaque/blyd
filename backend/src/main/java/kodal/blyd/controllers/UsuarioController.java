package kodal.blyd.controllers;

import java.util.List;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.services.SetorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.UsuarioDTO;
import kodal.blyd.utils.commons.LoginScript;
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

//	@GetMapping(value = "procurarPorSetor/{id}")
//	public ResponseEntity<List<UsuarioDTO>> buscaDeUsuarioPorSetor(@PathVariable Long id){
//		return ResponseEntity.ok(service.findAllBySetorId(id));
//	}

	@GetMapping(value = "/login/{inputEmail}/{inputSenha}")
	public ResponseEntity<StatusDTO> login(
			@PathVariable String inputEmail, 
			@PathVariable String inputSenha)
	{
		return ResponseEntity.ok(new LoginScript().verificarLogin(inputEmail, inputSenha, service));
	}

	@GetMapping(value = "/atualizar/{id}/{nome}/{email}/{senha}/{celular}/{foto}/{pcd}/{admin}/{setorId}")
	public ResponseEntity<StatusDTO> atualizarUsuario(
			@PathVariable long id,
			@PathVariable String nome,
			@PathVariable String email,
			@PathVariable String senha,
			@PathVariable String celular,
			@PathVariable String foto,
			@PathVariable boolean pcd,
			@PathVariable boolean admin,
			@PathVariable long setorId
	){
		return ResponseEntity.ok(service.atualizarUsuario(id, nome, email, senha, celular, foto, pcd, admin, setorId));
	}
}
