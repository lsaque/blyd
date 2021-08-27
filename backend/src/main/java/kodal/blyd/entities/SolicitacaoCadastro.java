package kodal.blyd.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "t_solicitacao_cadastro")
public class SolicitacaoCadastro {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String nome, email, senha, celular;
	private boolean pcd;
	
	public SolicitacaoCadastro() {}
	
	public SolicitacaoCadastro(String nome, String email, String senha, String celular, boolean pcd) {
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.celular = celular;
		this.pcd = pcd;
	}
	
	public SolicitacaoCadastro(long id, String nome, String email, String senha, String celular, boolean pcd) {
		this();
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

	public boolean isPcd() {
		return pcd;
	}

	public void setPcd(boolean pcd) {
		this.pcd = pcd;
	}
}
