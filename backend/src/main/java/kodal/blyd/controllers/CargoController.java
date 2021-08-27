package kodal.blyd.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.CargoDTO;
import kodal.blyd.services.CargoService;

@RestController
@RequestMapping(value = "/cargos")
public class CargoController {
	
	@Autowired
	private CargoService service;
	
	@GetMapping
	public ResponseEntity<List<CargoDTO>> findAll() {
		List<CargoDTO> listaCargoDTO = service.findAll();
		return ResponseEntity.ok(listaCargoDTO);
	}

}
