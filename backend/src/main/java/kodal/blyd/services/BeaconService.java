package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.BeaconDTO;
import kodal.blyd.repositories.BeaconRepository;

@Service
public class BeaconService {

	@Autowired
	private BeaconRepository repository;
	
	@Cacheable("beacons")
	@Transactional(readOnly = true)
	public List<BeaconDTO> findAll() {
		return repository.findAll().stream().map(beacon -> new BeaconDTO(beacon)).collect(Collectors.toList());
	}
	
}
