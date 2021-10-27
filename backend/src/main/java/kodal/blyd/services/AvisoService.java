package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.entities.Aviso;
import kodal.blyd.entities.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.AvisoDTO;
import kodal.blyd.repositories.AvisoRepository;


@Service
public class AvisoService {

	@Autowired
	private AvisoRepository repository;

	@Transactional(readOnly = true)
	@Cacheable("avisos")
	public List<AvisoDTO> findAll() {
		System.out.println("Entrou no cache avisos");
		return repository.findAll().stream().map(aviso -> new AvisoDTO(aviso)).collect(Collectors.toList());
	}

	@Transactional
	@Cacheable(value = "aviso", key="#id")
	public Aviso procurarAviso(long id){
		System.out.println("Entrou no cache aviso");
		return repository.procurarAviso(id);
	}

	@Transactional
	@Caching(evict = @CacheEvict(value = "avisos", allEntries = true))
	public void marcarAviso(Aviso aviso){
		repository.saveAndFlush(aviso);
	}

	@Transactional
	@Caching(evict = {
			@CacheEvict(value = "avisos", allEntries = true),
			@CacheEvict(value = "aviso", key = "#id")
	})
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
			status.setMensagem("Aviso selecionado foi atualizado!");
		}catch (Exception e) {
			status.setStatus(false);
			status.setMensagem("Aviso selecionado não foi atualizado!");
		}
		return status;
	}

	@Transactional
	@Caching(evict = {
			@CacheEvict(value = "avisos", allEntries = true),
			@CacheEvict(value = "aviso", key = "#id")
	})
	public StatusDTO desativarAviso(long id) {
		StatusDTO status = new StatusDTO();
		Aviso aviso = procurarAviso(id);

		status.setStatus(false);

		if(aviso == null) status.setMensagem("Aviso selecionado não foi desativado! ID inexistente!");
		else {

			try {
				aviso.setStatus(false);
				repository.save(aviso);
				status.setStatus(true);
				status.setMensagem("Aviso selecionado foi desativado!");
			} catch (Exception e) {
				status.setMensagem("Aviso selecionado não foi desativado!");
			}

		}
		return status;
	}
}
