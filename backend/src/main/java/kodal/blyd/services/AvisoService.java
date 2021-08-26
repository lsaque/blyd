package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

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
		return repository.findAll().stream().map(aviso -> new AvisoDTO(aviso)).collect(Collectors.toList());
	}
	
}
