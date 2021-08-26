package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.PrivilegioDTO;
import kodal.blyd.entities.Privilegio;
import kodal.blyd.repositories.PrivilegioRepository;

@Service
public class PrivilegioService {

	@Autowired
	private PrivilegioRepository repository;
	
	@Transactional(readOnly = true)
	public List<PrivilegioDTO> findAll() {
		List<Privilegio> listaPrivilegio = repository.findAll();
		return listaPrivilegio.stream().map(privilegio -> new PrivilegioDTO(privilegio)).collect(Collectors.toList());
	}
	
}
