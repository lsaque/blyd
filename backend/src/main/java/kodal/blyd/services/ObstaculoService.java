package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.ObstaculoDTO;
import kodal.blyd.repositories.ObstaculoRepository;

@Service
public class ObstaculoService {

	@Autowired
	private ObstaculoRepository repository;
	
	
	@Transactional(readOnly = true)
	public List<ObstaculoDTO> findAll() {
		return repository.findAll().stream().map(obstaculo -> new ObstaculoDTO(obstaculo)).collect(Collectors.toList());
	}
	
}
