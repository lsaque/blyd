package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.ComodoDTO;
import kodal.blyd.repositories.ComodoRepository;

@Service
public class ComodoService {

	@Autowired
	private ComodoRepository repository;
	
	
	@Transactional(readOnly = true)
	public List<ComodoDTO> findAll() {
		return repository.findAll().stream().map(comodo -> new ComodoDTO(comodo)).collect(Collectors.toList());
	}
	
}
