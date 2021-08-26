package kodal.blyd.dto;

import java.io.Serializable;

import kodal.blyd.entities.Comodo;

public class ComodoDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private long id;
	private String nome, tipo;
	private PontoDTO pontoInicial;
	private PontoDTO pontoFinal;
	private PontoDTO pontoEntrada;
	private AndarDTO andar;
	
	public ComodoDTO() {}

	public ComodoDTO(long id, String nome, String tipo, PontoDTO pontoInicial, PontoDTO pontoFinal,
			AndarDTO andar) {
		this.id = id;
		this.nome = nome;
		this.tipo = tipo;
		this.pontoInicial = pontoInicial;
		this.pontoFinal = pontoFinal;
		this.andar = andar;
	}
	
	public ComodoDTO(long id, String nome, String tipo, PontoDTO pontoInicial, PontoDTO pontoFinal,
			PontoDTO pontoEntrada ,AndarDTO andar) {
		this();
		this.pontoEntrada = pontoEntrada;
	}

	public ComodoDTO(Comodo comodo) {
		id = comodo.getId();
		nome = comodo.getNome();
		tipo = comodo.getTipo();
		pontoInicial = new PontoDTO(comodo.getPontoInicial());
		pontoFinal = new PontoDTO(comodo.getPontoFinal());
		pontoEntrada = comodo.getPontoEntrada() != null ? new PontoDTO(comodo.getPontoEntrada()) : null;
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

	public PontoDTO getPontoInicial() {
		return pontoInicial;
	}

	public void setPontoInicial(PontoDTO pontoInicial) {
		this.pontoInicial = pontoInicial;
	}

	public PontoDTO getPontoFinal() {
		return pontoFinal;
	}

	public void setPontoFinal(PontoDTO pontoFinal) {
		this.pontoFinal = pontoFinal;
	}

	public AndarDTO getAndar() {
		return andar;
	}

	public void setAndar(AndarDTO andar) {
		this.andar = andar;
	}

	public PontoDTO getPontoEntrada() {
		return pontoEntrada;
	}

	public void setPontoEntrada(PontoDTO pontoEntrada) {
		this.pontoEntrada = pontoEntrada;
	}
}
