package kodal.blyd.dto;

import java.io.Serializable;

import kodal.blyd.entities.Corredor;

public class CorredorDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;

	private long id;
	private String nome, descricao;
	private PontoDTO pontoInicial;
	private PontoDTO pontoFinal;
	
	public CorredorDTO() {}

	public CorredorDTO(long id, String nome, String descricao, PontoDTO pontoInicial, PontoDTO pontoFinal) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.pontoInicial = pontoInicial;
		this.pontoFinal = pontoFinal;
	}
	
	public CorredorDTO(Corredor corredor) {
		id = corredor.getId();
		nome = corredor.getNome();
		descricao = corredor.getDescricao();
		pontoInicial = new PontoDTO(corredor.getPontoInicial());
		pontoFinal = new PontoDTO(corredor.getPontoFinal());
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
}
