package kodal.blyd.controllers;

import java.util.List;

import kodal.blyd.dto.ComodoCategorizadoDTO;
import kodal.blyd.utils.scripts.ComodosCategorizadoScript;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.ComodoDTO;
import kodal.blyd.services.ComodoService;

@RestController
@RequestMapping(value = "/comodos")
public class ComodoController {
	
	@Autowired
	private ComodoService service;
	
	@GetMapping
	public ResponseEntity<List<ComodoDTO>> findAll() {
		List<ComodoDTO> listaComodoDTO = service.findAll();
		return ResponseEntity.ok(listaComodoDTO);
	}

	@GetMapping(value = "/categorizados")
	public ResponseEntity<List<ComodoCategorizadoDTO>> getComodoCategorizadoDTO() {
		return ResponseEntity.ok(new ComodosCategorizadoScript().categorizarComodos(service.findAll()));
	}

}
