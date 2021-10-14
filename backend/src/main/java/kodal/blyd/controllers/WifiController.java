package kodal.blyd.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.WifiDTO;
import kodal.blyd.services.WifiService;

@RestController
@RequestMapping(value = "/wifis")
public class WifiController {
	
	@Autowired
	private WifiService service;
	
	@GetMapping
	public ResponseEntity<List<WifiDTO>> findAll() {
		List<WifiDTO> listaWifiDTO = service.findAll();
		return ResponseEntity.ok(listaWifiDTO);
	}

}
