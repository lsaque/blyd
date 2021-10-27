package kodal.blyd.controllers;

import java.util.List;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.entities.Aviso;
import kodal.blyd.utils.scripts.MarcarAvisoScript;
import kodal.blyd.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
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

	@GetMapping(value = "/desativar/{id}")
	public ResponseEntity<StatusDTO> desativarAviso(@PathVariable long id){
		return ResponseEntity.ok(avisoService.desativarAviso(id));
	}

	@GetMapping(value = "/procurar/{id}")
	public ResponseEntity<StatusDTO> procurarAviso(@PathVariable long id) {
		StatusDTO status = new StatusDTO();
		Aviso aviso = avisoService.procurarAviso(id);
		if(aviso == null) {
			status.setStatus(false);
			status.setMensagem("Aviso informado não foi encontrado!");
		} else {
			status.setStatus(true);
			status.setMensagem("Aviso informado foi encontrado!");
		}
		return ResponseEntity.ok(status);
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
