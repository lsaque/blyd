package kodal.blyd.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.MapaDTO;
import kodal.blyd.services.MapaService;

@RestController
@RequestMapping(value = "/mapas")
public class MapaController {
	
	@Autowired
	private MapaService service;
	
	@GetMapping
	public ResponseEntity<List<MapaDTO>> findAll() {
		List<MapaDTO> listaMapaDTO = service.findAll();
		return ResponseEntity.ok(listaMapaDTO);
	}

}
