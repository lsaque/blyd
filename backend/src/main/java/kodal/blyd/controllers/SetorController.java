package kodal.blyd.controllers;

import java.util.List;

import kodal.blyd.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.SetorDTO;
import kodal.blyd.services.SetorService;

@RestController
@RequestMapping(value = "/setores")
public class SetorController {

	@Autowired
	private SetorService service;

	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping
	public ResponseEntity<List<SetorDTO>> findAll() {
		return ResponseEntity.ok(service.findAll());
	}
}
