package kodal.blyd.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.AndarDTO;
import kodal.blyd.services.AndarService;

@RestController
@RequestMapping(value = "/andares")
public class AndarController {
	
	@Autowired
	private AndarService service;
	
	@GetMapping
	public ResponseEntity<List<AndarDTO>> findAll() {
		List<AndarDTO> listaAndarDTO = service.findAll();
		System.out.println("Entrou");
		return ResponseEntity.ok(listaAndarDTO);
	}
}
