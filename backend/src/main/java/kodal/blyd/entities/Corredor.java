package kodal.blyd.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "t_corredor")
public class Corredor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String nome, descricao;
	
	@OneToOne
	@JoinColumn(name = "ponto_inicial")
	private Ponto pontoInicial;
	
	@OneToOne
	@JoinColumn(name = "ponto_final")
	private Ponto pontoFinal;
	
	public Corredor() {}

	public Corredor(long id, String nome, String descricao, Ponto pontoInicial, Ponto pontoFinal) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.pontoInicial = pontoInicial;
		this.pontoFinal = pontoFinal;
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

	public Ponto getPontoInicial() {
		return pontoInicial;
	}

	public void setPontoInicial(Ponto pontoInicial) {
		this.pontoInicial = pontoInicial;
	}

	public Ponto getPontoFinal() {
		return pontoFinal;
	}

	public void setPontoFinal(Ponto pontoFinal) {
		this.pontoFinal = pontoFinal;
	}


}
