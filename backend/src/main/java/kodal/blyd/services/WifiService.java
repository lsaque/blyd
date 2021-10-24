package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.WifiDTO;
import kodal.blyd.repositories.WifiRepository;

@Service
public class WifiService {

	@Autowired
	private WifiRepository repository;
	
	@Cacheable("wifis")
	@Transactional(readOnly = true)
	public List<WifiDTO> findAll() {
		return repository.findAll().stream().map(wifi -> new WifiDTO(wifi)).collect(Collectors.toList());
	}
	
}
