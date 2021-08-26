package kodal.blyd.dto;

import java.io.Serializable;

import kodal.blyd.entities.Mapa;

public class MapaDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;

	private long id;
	private String nome, descricao;
	private String linkImagem;
	private double m2;
	private AndarDTO andar;
	
	public MapaDTO() {}

	public MapaDTO(long id, String nome, String descricao, String linkImagem, double m2, AndarDTO andar) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.linkImagem = linkImagem;
		this.m2 = m2;
		this.andar = andar;
	}
	
	public MapaDTO(Mapa mapa) {
		id = mapa.getId();
		nome = mapa.getNome();
		descricao = mapa.getDescricao();
		linkImagem = mapa.getLinkImagem();
		m2 = mapa.getM2();
		andar = new AndarDTO(mapa.getAndar());
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

	public String getLinkImagem() {
		return linkImagem;
	}

	public void setLinkImagem(String linkImagem) {
		this.linkImagem = linkImagem;
	}

	public double getM2() {
		return m2;
	}

	public void setM2(double m2) {
		this.m2 = m2;
	}

	public AndarDTO getAndar() {
		return andar;
	}

	public void setAndar(AndarDTO andar) {
		this.andar = andar;
	}
}
