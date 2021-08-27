package kodal.blyd.dto;

import java.io.Serializable;

import kodal.blyd.entities.SolicitacaoCadastro;

public class SolicitacaoCadastroDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private long id;	
	private String nome, email, senha, celular;
	private boolean pcd;
	
	public SolicitacaoCadastroDTO() {}
	
	public SolicitacaoCadastroDTO(long id, String nome, String email, String senha, String celular, boolean pcd) {
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.celular = celular;
		this.pcd = pcd;
	}
	
	public SolicitacaoCadastroDTO(SolicitacaoCadastro solicitacao) {
		id = solicitacao.getId();
		nome = solicitacao.getNome();
		email = solicitacao.getEmail();
		senha  = solicitacao.getSenha();
		celular = solicitacao.getCelular();
		pcd = solicitacao.isPcd();
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
