package kodal.blyd.entities;
 
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "t_usuario")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String nome, email, senha, celular, foto;
	@Column(name = "total_chamadas")
	private long totalChamadas;
	@Column(name = "total_avisos")
	private long totalAvisos;
	@Column(name = "total_rotas")
	private long totalRotas;

	private Boolean pcd, admin;

	@ManyToOne
	@JoinColumn(name = "setor_id")
	private Setor setor;

	@OneToMany(mappedBy = "usuario")
	private List<Aviso> avisos = new ArrayList<>();

	public Usuario() {}

	public Usuario(String nome, String email, String senha, String celular, String foto, long totalChamadas, long totalAvisos, long totalRotas, Boolean pcd, Boolean admin, Setor setor ,List<Aviso> avisos) {
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
		this.setor = setor;
		this.avisos = avisos;
	}

	public Usuario(long id, String nome, String email, String senha, String celular, String foto, long totalChamadas, long totalAvisos, long totalRotas, Boolean pcd, Boolean admin, Setor setor ,List<Aviso> avisos) {
		this(nome, email, senha, celular, foto, totalChamadas, totalAvisos, totalRotas, pcd, admin, setor, avisos);
		this.id = id;
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

	public Setor getSetor() {
		return setor;
	}

	public void setSetor(Setor setor) {
		this.setor = setor;
	}

	public List<Aviso> getAvisos() {
		return avisos;
	}

	public void setAvisos(List<Aviso> avisos) {
		this.avisos = avisos;
	}
}
