package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import kodal.blyd.entities.Ponto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.PontoDTO;
import kodal.blyd.repositories.PontoRepository;

@Service
public class PontoService {

	@Autowired
	private PontoRepository repository;
	
	
	@Transactional(readOnly = true)
	public List<PontoDTO> findAll() {
		return repository.findAll().stream().map(ponto -> new PontoDTO(ponto)).collect(Collectors.toList());
	}

	@Transactional
	public Ponto procurarId(long id) { return repository.procurarId(id); }
	
}
