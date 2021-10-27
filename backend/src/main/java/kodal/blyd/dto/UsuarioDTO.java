package kodal.blyd.dto;

import java.io.Serializable;
import java.util.List;
import java.util.stream.Collectors;

import kodal.blyd.entities.Aviso;
import kodal.blyd.entities.Setor;
import kodal.blyd.entities.Usuario;

public class UsuarioDTO implements Serializable{
	

	private static final long serialVersionUID = 1L;

	private long id;
	private String nome, email, senha, celular, foto;
	private long totalChamadas, totalAvisos, totalRotas;
	private Boolean pcd, admin, status;
	private SetorSemUsuarioDTO setor;
	private List<AvisoSemUsuarioDTO> avisos;
	
	public UsuarioDTO() {}

	public UsuarioDTO(long id, String nome, String email, String senha, String celular, String foto, long totalChamadas, long totalAvisos, long totalRotas, Boolean pcd, Boolean admin, Boolean status, Setor setor, List<Aviso> avisos) {
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.celular = celular;
		this.foto = foto;
		this.totalChamadas = totalChamadas;
		this.totalAvisos = totalAvisos;
		this.totalRotas = totalRotas;
		this.pcd = pcd;
		this.admin = admin;
		this.status = status;
		this.setor = new SetorSemUsuarioDTO(setor);
		this.avisos = avisos.stream().map(aviso -> new AvisoSemUsuarioDTO(aviso)).collect(Collectors.toList());
	}

	public UsuarioDTO(Usuario usuario) {
		id = usuario.getId();
		nome = usuario.getNome();
		email = usuario.getEmail();
		celular = usuario.getCelular();
		senha = usuario.getSenha();
		foto = usuario.getFoto();
		totalChamadas = usuario.getTotalChamadas();
		totalAvisos = usuario.getTotalAvisos();
		totalRotas = usuario.getTotalRotas();
		pcd = usuario.isPcd();
		admin = usuario.isAdmin();
		status = usuario.isStatus();
		setor = new SetorSemUsuarioDTO(usuario.getSetor());
		this.avisos = usuario.getAvisos().stream().map(aviso -> new AvisoSemUsuarioDTO(aviso)).collect(Collectors.toList());
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

	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public long getTotalChamadas() {
		return totalChamadas;
	}

	public void setTotalChamadas(long totalChamadas) {
		this.totalChamadas = totalChamadas;
	}

	public long getTotalAvisos() {
		return totalAvisos;
	}

	public void setTotalAvisos(long totalAvisos) {
		this.totalAvisos = totalAvisos;
	}

	public long getTotalRotas() {
		return totalRotas;
	}

	public void setTotalRotas(long totalRotas) {
		this.totalRotas = totalRotas;
	}

	public Boolean isPcd() {
		return pcd;
	}

	public void setPcd(Boolean pcd) {
		this.pcd = pcd;
	}

	public Boolean isAdmin() {
		return admin;
	}

	public void setAdmin(Boolean admin) {
		this.admin = admin;
	}

	public SetorSemUsuarioDTO getSetor() {
		return setor;
	}

	public void setSetor(SetorSemUsuarioDTO setor) {
		this.setor = setor;
	}

	public List<AvisoSemUsuarioDTO> getAvisos() {
		return avisos;
	}

	public void setAvisos(List<AvisoSemUsuarioDTO> avisos) {
		this.avisos = avisos;
	}

	public Boolean isStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}
}


