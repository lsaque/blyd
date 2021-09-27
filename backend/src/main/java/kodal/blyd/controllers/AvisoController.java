package kodal.blyd.controllers;

import java.util.List;

import jdk.javadoc.doclet.Reporter;
import kodal.blyd.dto.StatusDTO;
import kodal.blyd.entities.Aviso;
import kodal.blyd.entities.Ponto;
import kodal.blyd.entities.Usuario;
import kodal.blyd.script.MarcarAvisoScript;
import kodal.blyd.script.RemoverAvisoScript;
import kodal.blyd.services.PontoService;
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

	@Autowired
	private PontoService pontoService;

	@GetMapping
	public ResponseEntity<List<AvisoDTO>> findAll() {
		List<AvisoDTO> listaAvisoDTO = avisoService.findAll();
		return ResponseEntity.ok(listaAvisoDTO);
	}

	@GetMapping(value = "/marcar/{descricao}/{local}/{tempoDuracao}/{transitavel}/{idUsuario}")
	public ResponseEntity<StatusDTO> marcarAviso(
			@PathVariable String descricao,
			@PathVariable String local,
			@PathVariable String tempoDuracao,
			@PathVariable boolean transitavel,
			@PathVariable long idUsuario
	){
		return ResponseEntity.ok(new MarcarAvisoScript(usuarioService, pontoService, avisoService).marcarAviso(descricao, local, tempoDuracao, transitavel, idUsuario));
	}

	public List<AvisoDTO> findAllList() {
		return avisoService.findAll();
	}

	@GetMapping(value = "/remover/{id}")
	public ResponseEntity<StatusDTO> removerAviso(@PathVariable long id){
		return ResponseEntity.ok(new RemoverAvisoScript(avisoService).removerAviso(id));
	}
}
