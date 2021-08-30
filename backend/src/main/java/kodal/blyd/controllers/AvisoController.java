package kodal.blyd.controllers;

import java.util.List;

import jdk.javadoc.doclet.Reporter;
import kodal.blyd.dto.StatusDTO;
import kodal.blyd.entities.Aviso;
import kodal.blyd.entities.Ponto;
import kodal.blyd.entities.Usuario;
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

		StatusDTO status  = new StatusDTO();
		status.setStatus(false);

		Usuario usuario = usuarioService.procurarId(idUsuario);
		Ponto ponto = pontoService.procurarId(1);

		if(usuario != null) {
			if(ponto != null) {

				avisoService.marcarAviso(new Aviso(descricao, local, tempoDuracao, transitavel, usuario, ponto));
				status.setStatus(true);
				status.setMensagem("Aviso foi marcado com sucesso.");

			} else status.setMensagem("Ponto nao encontrado");
		} else status.setMensagem("Usuario nao encontrado");


		return ResponseEntity.ok(status);
	}

	public List<AvisoDTO> findAllList() {
		return avisoService.findAll();
	}
}
