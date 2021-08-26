package kodal.blyd.dto;

import java.io.Serializable;

import kodal.blyd.entities.Usuario;

public class UsuarioDTO implements Serializable{
	

	private static final long serialVersionUID = 1L;
	private long id;
	private String nome, email, celular, senha;
	private Boolean pcd;
	
	private CargoDTO cargo;
	
	public UsuarioDTO() {}

	public UsuarioDTO(long id, String nome, String email, String celular,String senha, Boolean pcd, CargoDTO cargo) {
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.celular = celular;
		this.senha = senha;
		this.pcd = pcd;
		this.cargo = cargo;
	}
	
	public UsuarioDTO(Usuario usuario) {
		id = usuario.getId();
		nome = usuario.getNome();
		email = usuario.getEmail();
		celular = usuario.getCelular();
		senha = usuario.getSenha();
		pcd = usuario.getPcd();
		cargo = new CargoDTO(usuario.getCargo());
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Boolean getPcd() {
		return pcd;
	}

	public void setPcd(Boolean pcd) {
		this.pcd = pcd;
	}

	public CargoDTO getCargo() {
		return cargo;
	}

	public void setCargoDTO(CargoDTO cargo) {
		this.cargo = cargo;
	}

	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}
}
