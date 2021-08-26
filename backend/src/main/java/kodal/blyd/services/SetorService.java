package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.SetorDTO;
import kodal.blyd.entities.Setor;
import kodal.blyd.repositories.SetorRepository;

@Service
public class SetorService {

	@Autowired
	private SetorRepository repository;
	
	@Transactional(readOnly = true)
	public List<SetorDTO> findAll() {
		List<Setor> listaSetores = repository.findAll();
		return listaSetores.stream().map(setor -> new SetorDTO(setor)).collect(Collectors.toList());
	}
}
