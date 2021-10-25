package kodal.blyd.dto;

import java.io.Serializable;
import java.util.List;

import kodal.blyd.entities.Setor;

public class SetorDTO implements Serializable{

	private static final long serialVersionUID = 1L;

	private long id;
	private String nome, descricao;
	private List<UsuarioSemSetorDTO> usuarios;
	
	public SetorDTO() {}
	
	public SetorDTO(long id, String nome, String descricao, List<UsuarioSemSetorDTO> usuarios) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.usuarios = usuarios;
	}

	public SetorDTO(Setor setor) {
		id = setor.getId();
		nome = setor.getNome();
		descricao = setor.getDescricao();
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

	public List<UsuarioSemSetorDTO> getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(List<UsuarioSemSetorDTO> usuarios) {
		this.usuarios = usuarios;
	}
}
