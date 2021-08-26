package kodal.blyd.dto;

import java.io.Serializable;

import kodal.blyd.entities.Andar;

public class AndarDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;

	private long id;
	private String nome, descricao;
	
	public AndarDTO() {}

	public AndarDTO(long id, String nome, String descricao) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
	}
	
	public AndarDTO(Andar andar) {
		id = andar.getId();
		nome = andar.getNome();
		descricao = andar.getDescricao();
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
}
