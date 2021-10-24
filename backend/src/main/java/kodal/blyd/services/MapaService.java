package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import kodal.blyd.entities.Mapa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.MapaDTO;
import kodal.blyd.repositories.MapaRepository;

@Service
public class MapaService {

	@Autowired
	private MapaRepository repository;

	@Cacheable("mapas")
	@Transactional(readOnly = true)
	public List<MapaDTO> findAll() {
		return repository.findAll().stream().map(mapa -> new MapaDTO(mapa)).collect(Collectors.toList());
	}

	@Cacheable("mapa")
	@Transactional(readOnly = true)
	public MapaDTO procurarMapa(long id) {
		Mapa mapa = repository.procurarMapa(id);
		if(mapa == null) return null;
		else return new MapaDTO(mapa);
	}
	
}
