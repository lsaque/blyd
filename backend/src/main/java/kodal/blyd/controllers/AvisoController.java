package kodal.blyd.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.AvisoDTO;
import kodal.blyd.services.AvisoService;

@RestController
@RequestMapping(value = "/avisos")
public class AvisoController {
	
	@Autowired
	private AvisoService service;
	
	@GetMapping
	public ResponseEntity<List<AvisoDTO>> findAll() {
		List<AvisoDTO> listaAvisoDTO = service.findAll();
		return ResponseEntity.ok(listaAvisoDTO);
	}

	public List<AvisoDTO> findAllList() {
		return service.findAll();
	}

}
