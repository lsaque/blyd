package kodal.blyd.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.CorredorDTO;
import kodal.blyd.services.CorredorService;

@RestController
@RequestMapping(value = "/corredores")
public class CorredorController {
	
	@Autowired
	private CorredorService service;
	
	@GetMapping
	public ResponseEntity<List<CorredorDTO>> findAll() {
		List<CorredorDTO> listaCorredorDTO = service.findAll();
		return ResponseEntity.ok(listaCorredorDTO);
	}

}
