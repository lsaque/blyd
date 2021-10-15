package kodal.blyd.dto;

import java.io.Serializable;
import java.util.List;
import kodal.blyd.entities.Comodo;

public class ComodoDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;

	private long id;
	private String nome, tipo;
	private String pontoEntrada;
	private AndarDTO andar;
	
	public ComodoDTO() {}

	public ComodoDTO(long id, String nome, String tipo, String pontoEntrada, AndarDTO andar) {
		this.id = id;
		this.nome = nome;
		this.tipo = tipo;
		this.pontoEntrada = pontoEntrada;
		this.andar = andar;
	}

	public ComodoDTO(Comodo comodo) {
		id = comodo.getId();
		nome = comodo.getNome();
		tipo = comodo.getTipo();
		pontoEntrada = comodo.getPontoEntrada();
		andar = new AndarDTO(comodo.getAndar());
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

	public AndarDTO getAndar() {
		return andar;
	}

	public void setAndar(AndarDTO andar) {
		this.andar = andar;
	}
}
