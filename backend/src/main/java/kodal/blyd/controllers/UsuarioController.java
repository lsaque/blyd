package kodal.blyd.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.UsuarioDTO;
import kodal.blyd.dto.UsuarioLoginDTO;
import kodal.blyd.dto.UsuarioSignupDTO;
import kodal.blyd.script.LoginScript;
import kodal.blyd.services.UsuarioService;

@RestController
@RequestMapping(value = "/usuarios")
public class UsuarioController {

	@Autowired
	private UsuarioService service;
	
	@GetMapping
	public ResponseEntity<List<UsuarioDTO>> findAll(){
		List<UsuarioDTO> listaUsuarioDTO = service.findAll();
		return ResponseEntity.ok(listaUsuarioDTO);
	}
	
	@GetMapping(value = "login/{inputEmail}/{inputSenha}")
	public ResponseEntity<UsuarioLoginDTO> login(
			@PathVariable String inputEmail, 
			@PathVariable String inputSenha)
	{
		return ResponseEntity.ok(new LoginScript().verificarLogin(inputEmail, inputSenha, service));
	}
	
	@GetMapping(value = "signup/{nome}/{email}/{celular}/{senha}/{pcd}")
	public ResponseEntity<UsuarioSignupDTO> signup(
			@PathVariable String nome, 
			@PathVariable String email, 
			@PathVariable String celular,
			@PathVariable String senha,
			@PathVariable boolean pcd)
	{
		UsuarioSignupDTO signup = new UsuarioSignupDTO();
		return ResponseEntity.ok(signup);
	}
	
}
