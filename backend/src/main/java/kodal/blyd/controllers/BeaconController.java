package kodal.blyd.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.BeaconDTO;
import kodal.blyd.services.BeaconService;

@RestController
@RequestMapping(value = "/beacons")
public class BeaconController {
	
	@Autowired
	private BeaconService service;
	
	@GetMapping
	public ResponseEntity<List<BeaconDTO>> findAll() {
		List<BeaconDTO> listaBeaconDTO = service.findAll();
		return ResponseEntity.ok(listaBeaconDTO);
	}

}
