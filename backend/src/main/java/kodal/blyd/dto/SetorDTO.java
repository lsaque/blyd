package kodal.blyd.dto;

import java.io.Serializable;

import kodal.blyd.entities.Setor;

public class SetorDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private long id;
	
	private String nome, descricao;
	private long numPessoas;
	
	public SetorDTO() {}
	
	public SetorDTO(long id, String nome, String descricao, long numPessoas) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.numPessoas = numPessoas;
	}
	
	public SetorDTO(Setor setor) {
		id = setor.getId();
		nome = setor.getNome();
		descricao = setor.getDescricao();
		numPessoas = setor.getNumPessoas();
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public long getNumPessoas() {
		return numPessoas;
	}
	public void setNumPessoas(long numPessoas) {
		this.numPessoas = numPessoas;
	}
	
}
