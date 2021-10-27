package kodal.blyd.controllers;

import kodal.blyd.dto.PopUpDirectionDTO;
import kodal.blyd.entities.Usuario;
import kodal.blyd.services.UsuarioService;
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

	@Autowired
	UsuarioService usuarioService;

	@GetMapping(value = "/astar/{idMapa}/{xFim}/{yFim}/{idUser}")
	public ResponseEntity<List<PopUpDirectionDTO>> aStar(
			@PathVariable long idMapa,
			@PathVariable int xFim,
			@PathVariable int yFim,
			@PathVariable long idUser
	) {

		List<PopUpDirectionDTO> popUpDirectionDTOList = new ArrayList<>();

		Usuario usuario = usuarioService.procurarId(idUser);

		if(usuario != null) {
			List<PopUpDirectionDTO> popUpDirectionDTOList2 = new GerarRotaScript(mapaService, avisoService).gerarRota(idMapa, xFim,yFim, usuario, usuarioService);

			if(popUpDirectionDTOList2 == null) popUpDirectionDTOList.add(new PopUpDirectionDTO("", "wrong-location", "Mapa inserido", "inválido"));
			else popUpDirectionDTOList = popUpDirectionDTOList2;
		} else popUpDirectionDTOList.add(new PopUpDirectionDTO("", "wrong-location", "Usuário selecionado", "inexistente"));

		return ResponseEntity.ok(popUpDirectionDTOList);
	}
}