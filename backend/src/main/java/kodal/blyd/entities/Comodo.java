package kodal.blyd.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "t_comodo")
public class Comodo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String nome, tipo;
	
	@OneToOne
	@JoinColumn(name = "ponto_inicial")
	private Ponto pontoInicial;
	
	@OneToOne
	@JoinColumn(name = "ponto_final")
	private Ponto pontoFinal;
	
	@OneToOne
	@JoinColumn(name = "ponto_entrada")
	private Ponto pontoEntrada;
	
	@OneToOne
	@JoinColumn(name = "andar_id")
	private Andar andar;
	
	public Comodo() {}

	public Comodo(long id, String nome, String tipo, Ponto pontoInicial, Ponto pontoFinal,
			Andar andar) {
		this.id = id;
		this.nome = nome;
		this.tipo = tipo;
		this.pontoInicial = pontoInicial;
		this.pontoFinal = pontoFinal;
		this.andar = andar;
	}
	
	public Comodo(long id, String nome, String tipo, Ponto pontoInicial, Ponto pontoFinal,
			Ponto pontoEntrada, Andar andar) {
		this();
		this.pontoEntrada = pontoEntrada;
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

	public String getTipo() {
		return tipo;
	}

	public void setDescricao(String tipo) {
		this.tipo = tipo;
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

	public Andar getAndar() {
		return andar;
	}

	public void setAndar(Andar andar) {
		this.andar = andar;
	}

	public Ponto getPontoEntrada() {
		return pontoEntrada;
	}

	public void setPontoEntrada(Ponto pontoEntrada) {
		this.pontoEntrada = pontoEntrada;
	}
}
