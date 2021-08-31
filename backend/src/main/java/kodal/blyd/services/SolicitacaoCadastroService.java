package kodal.blyd.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kodal.blyd.dto.SolicitacaoCadastroDTO;
import kodal.blyd.entities.SolicitacaoCadastro;
import kodal.blyd.repositories.SolicitacaoCadastroRepository;

@Service
public class SolicitacaoCadastroService {

	@Autowired
	private SolicitacaoCadastroRepository repository;
	
	@Transactional(readOnly = true)
	public List<SolicitacaoCadastroDTO> findAll(){
		return repository.findAll().stream().map(solicitacao -> new SolicitacaoCadastroDTO(solicitacao)).collect(Collectors.toList());
	}
	
	@Transactional(readOnly = true)
	public Boolean procurarEmail(String email) {
		return repository.procurarEmail(email);
	}
	
	@Transactional(readOnly = true)
	public void adicionarSolicitacaoCadastro(SolicitacaoCadastro solicitacao) {
		repository.saveAndFlush(solicitacao);
	}
	
}
