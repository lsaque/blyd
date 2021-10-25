package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.entities.Aviso;
import kodal.blyd.utils.commons.RemoverAvisoScript;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.AvisoDTO;
import kodal.blyd.repositories.AvisoRepository;


@Service
public class AvisoService {

	@Autowired
	private AvisoRepository repository;

	@Transactional(readOnly = true)
	public List<AvisoDTO> findAll() {

		List<Aviso> lista = repository.findAll();
		List<Aviso> novaLista = new RemoverAvisoScript(this).gerarNovaLista(lista);

		return novaLista.stream().map(aviso -> new AvisoDTO(aviso)).collect(Collectors.toList());
	}

	@Transactional
	public Aviso procurarAviso(long id){
		return repository.procurarAviso(id);
	}

	public void marcarAviso(Aviso aviso){
		repository.saveAndFlush(aviso);
	}

	public void removerAviso(Aviso aviso) {
		repository.delete(aviso);
	}

	@Transactional
	public StatusDTO atualizarAviso(long id, String descricao, String local, String duracao, String tempoFinal, boolean transitavel) {
		StatusDTO status = new StatusDTO();
		Aviso aviso = repository.procurarAviso(id);
		System.out.println(descricao + local + duracao + tempoFinal + transitavel);
		aviso.setDescricao(descricao);
		aviso.setLocal(local);
		aviso.setDuracao(duracao);
		aviso.setTempoFinal(tempoFinal);
		aviso.setTransitavel(transitavel);

		try {
			repository.save(aviso);
			status.setStatus(true);
			status.setMensagem("Aviso atualizado com sucesso!");
		}catch (Exception e) {
			status.setStatus(false);
			status.setMensagem("Erro: "+ e);
		}
		return status;
	}
}
