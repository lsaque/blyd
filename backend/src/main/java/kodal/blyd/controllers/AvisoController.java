package kodal.blyd.controllers;

import java.util.List;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.utils.commons.MarcarAvisoScript;
import kodal.blyd.utils.commons.RemoverAvisoScript;
import kodal.blyd.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodal.blyd.dto.AvisoDTO;
import kodal.blyd.services.AvisoService;

@RestController
@RequestMapping(value = "/avisos")
public class AvisoController {
	
	@Autowired
	private AvisoService avisoService;

	@Autowired
	private UsuarioService usuarioService;

	@GetMapping
	public ResponseEntity<List<AvisoDTO>> findAll() {
		List<AvisoDTO> listaAvisoDTO = avisoService.findAll();
		return ResponseEntity.ok(listaAvisoDTO);
	}

	@GetMapping(value = "/marcar/{descricao}/{local}/{tempoInicio}/{tempoFinal}/{duracao}/{listaPonto}/{transitavel}/{idUsuario}")
	public ResponseEntity<StatusDTO> marcarAviso(
			@PathVariable String descricao,
			@PathVariable String local,
			@PathVariable String tempoInicio,
			@PathVariable String tempoFinal,
			@PathVariable String duracao,
			@PathVariable String listaPonto,
			@PathVariable boolean transitavel,
			@PathVariable long idUsuario
	){
		return ResponseEntity.ok(new MarcarAvisoScript(usuarioService, avisoService).marcarAviso(descricao, local, tempoInicio, tempoFinal, listaPonto, duracao, transitavel, idUsuario));
	}

	@GetMapping(value = "/remover/{id}")
	public ResponseEntity<StatusDTO> removerAviso(@PathVariable long id){
		return ResponseEntity.ok(new RemoverAvisoScript(avisoService).removerAviso(id));
	}

	@GetMapping(value = "/atualizar/{id}/{descricao}/{local}/{duracao}/{tempoFinal}/{transitavel}")
	public ResponseEntity<StatusDTO> atualizarAviso(
			@PathVariable long id,
			@PathVariable String descricao,
			@PathVariable String local,
			@PathVariable String duracao,
			@PathVariable String tempoFinal,
			@PathVariable boolean transitavel
	){
		return ResponseEntity.ok(avisoService.atualizarAviso(id, descricao, local, duracao, tempoFinal, transitavel));
	}
}
