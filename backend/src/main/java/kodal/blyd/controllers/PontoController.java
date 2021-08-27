package kodal.blyd.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.PontoDTO;
import kodal.blyd.services.PontoService;

@RestController
@RequestMapping(value = "/pontos")
public class PontoController {
	
	@Autowired
	private PontoService service;
	
	@GetMapping
	public ResponseEntity<List<PontoDTO>> findAll() {
		List<PontoDTO> listaPontoDTO = service.findAll();
		return ResponseEntity.ok(listaPontoDTO);
	}

}
