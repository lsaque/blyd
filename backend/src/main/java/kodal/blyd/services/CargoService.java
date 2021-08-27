package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.CargoDTO;
import kodal.blyd.entities.Cargo;
import kodal.blyd.repositories.CargoRepository;

@Service
public class CargoService {

	@Autowired
	private CargoRepository repository;
	
	@Transactional(readOnly = true)
	public List<CargoDTO> findAll() {
		List<Cargo> listaCargos = repository.findAll();
		return listaCargos.stream().map(cargo -> new CargoDTO(cargo)).collect(Collectors.toList());
	}
	
}
