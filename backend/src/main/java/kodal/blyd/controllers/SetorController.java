package kodal.blyd.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	@GetMapping
	public ResponseEntity<List<SetorDTO>> findall() {
		List<SetorDTO> listaSetorDTO = service.findAll();
		return ResponseEntity.ok(listaSetorDTO);
	}
	
}
