package kodal.blyd.controllers;

import kodal.blyd.dto.PopUpDirectionDTO;
import kodal.blyd.utils.scripts.GerarRotaScript;
import kodal.blyd.services.AvisoService;
import kodal.blyd.services.MapaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/rota")
public class RotaController {

	@Autowired
	MapaService mapaService;

	@Autowired
	AvisoService avisoService;

	@GetMapping(value = "/astar/{idMapa}/{xFim}/{yFim}")
	public ResponseEntity<List<PopUpDirectionDTO>> aStar(
			@PathVariable long idMapa,
			@PathVariable int xFim,
			@PathVariable int yFim
	) {
		List<PopUpDirectionDTO> popUpDirectionDTOList = new ArrayList<>();
		List<PopUpDirectionDTO> popUpDirectionDTOList2 = new GerarRotaScript(mapaService, avisoService).gerarRota(idMapa, xFim,yFim);

		if(popUpDirectionDTOList2 == null) popUpDirectionDTOList.add(new PopUpDirectionDTO("", "wrong-location", "Mapa inserido", "inválido"));
		else popUpDirectionDTOList = popUpDirectionDTOList2;

		return ResponseEntity.ok(popUpDirectionDTOList);
	}
}