package kodal.blyd.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.PrivilegioDTO;
import kodal.blyd.services.PrivilegioService;

@RestController
@RequestMapping(value = "/privilegios")
public class PrivilegioController {

	@Autowired
	private PrivilegioService service;
	
	@GetMapping
	public ResponseEntity<List<PrivilegioDTO>> findAll(){
		List<PrivilegioDTO> listaPrivilegioDTO = service.findAll();
		return ResponseEntity.ok(listaPrivilegioDTO);
	}
	
}
