package kodal.blyd.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "t_comodo")
public class Comodo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String nome, tipo;
	
	@Column(name = "ponto_entrada")
	private String pontoEntrada;
	
	@OneToOne
	@JoinColumn(name = "andar_id")
	private Andar andar;
	
	public Comodo() {}

	public Comodo(String nome, String tipo, String pontoEntrada, Andar andar) {
		this.nome = nome;
		this.tipo = tipo;
		this.pontoEntrada = pontoEntrada;
		this.andar = andar;
	}

	public Comodo(long id, String nome, String tipo, String pontoEntrada, Andar andar) {
		this(nome, tipo, pontoEntrada, andar);
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

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getPontoEntrada() {
		return pontoEntrada;
	}

	public void setPontoEntrada(String pontoEntrada) {
		this.pontoEntrada = pontoEntrada;
	}

	public Andar getAndar() {
		return andar;
	}

	public void setAndar(Andar andar) {
		this.andar = andar;
	}
}
