package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import kodal.blyd.entities.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.SetorDTO;
import kodal.blyd.entities.Setor;
import kodal.blyd.repositories.SetorRepository;

@Service
public class SetorService {

	@Autowired
	private SetorRepository repository;

	@Autowired
	private UsuarioService usuarioService;

	@Cacheable("setores")
	@Transactional(readOnly = true)
	public List<SetorDTO> findAll() {
		List<Setor> listaSetores = repository.findAll();
		return listaSetores.stream().map(setor -> new SetorDTO(setor.getId(), setor.getNome(), setor.getDescricao(), usuarioService.findAllBySetorId(setor.getId()))).collect(Collectors.toList());
	}

	@Cacheable(value = "setor", key = "#id")
	@Transactional(readOnly = true)
	public Setor procurarId(long id) {
		return repository.procurarId(id);
	}
}
