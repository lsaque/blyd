package kodal.blyd.dto;

import java.io.Serializable;

import kodal.blyd.entities.Cargo;

public class CargoDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private long id;
	private String nome;
	
	public CargoDTO() {}

	public CargoDTO(long id, String nome) {
		this.id = id;
		this.nome = nome;
	}
	
	public CargoDTO(Cargo cargo) {
		id = cargo.getId();
		nome = cargo.getNome();
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
}
