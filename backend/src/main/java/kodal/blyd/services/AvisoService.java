package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import kodal.blyd.entities.Aviso;
import kodal.blyd.entities.Ponto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.AvisoDTO;
import kodal.blyd.repositories.AvisoRepository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManager.*;

@Service
public class AvisoService {

	@Autowired
	EntityManager em;

	@Autowired
	private AvisoRepository repository;

	@Transactional(readOnly = true)
	public List<AvisoDTO> findAll() { return repository.findAll().stream().map(aviso -> new AvisoDTO(aviso)).collect(Collectors.toList()); }

	@Transactional(readOnly = true)
	public void marcarAviso(String descricao, String local, String tempoDuracao, boolean transitavel, long pontoId, long usuarioId){
		repository.marcarAviso(descricao, local, tempoDuracao, transitavel, pontoId, usuarioId);
	}
}
