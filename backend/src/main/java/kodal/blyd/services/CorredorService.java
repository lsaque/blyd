package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.CorredorDTO;
import kodal.blyd.repositories.CorredorRepository;

@Service
public class CorredorService {

	@Autowired
	private CorredorRepository repository;
	
	
	@Transactional(readOnly = true)
	public List<CorredorDTO> findAll() {
		return repository.findAll().stream().map(corredor -> new CorredorDTO(corredor)).collect(Collectors.toList());
	}
	
}
