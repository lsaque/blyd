package kodal.blyd.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.ObstaculoDTO;
import kodal.blyd.services.ObstaculoService;

@RestController
@RequestMapping(value = "/obstaculos")
public class ObstaculoController {
	
	@Autowired
	private ObstaculoService service;
	
	@GetMapping
	public ResponseEntity<List<ObstaculoDTO>> findAll() {
		List<ObstaculoDTO> listaObstaculoDTO = service.findAll();
		return ResponseEntity.ok(listaObstaculoDTO);
	}

}
