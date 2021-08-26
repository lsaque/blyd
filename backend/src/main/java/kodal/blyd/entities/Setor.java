package kodal.blyd.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "t_setor")
public class Setor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String nome, descricao;
	@Column(name = "num_pessoas")
	private long numPessoas;
	
	public Setor() {}
	
	public Setor(long id, String nome, String descricao, long numPessoas) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.numPessoas = numPessoas;
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
