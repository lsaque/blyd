package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.AndarDTO;
import kodal.blyd.repositories.AndarRepository;

@Service
public class AndarService {

	@Autowired
	private AndarRepository repository;
	
	@Transactional(readOnly = true)
	public List<AndarDTO> findAll() {
		return repository.findAll().stream().map(andar -> new AndarDTO(andar)).collect(Collectors.toList());
	}
	
}
