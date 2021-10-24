package kodal.blyd.dto;

import java.io.Serializable;
import kodal.blyd.entities.Andar;
import kodal.blyd.entities.Mapa;

public class AndarDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;

	private long id;
	private String nome, descricao;
	private MapaSemAndarDTO mapa;
	
	public AndarDTO() {}

	public AndarDTO(long id, String nome, String descricao, Mapa mapa) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.mapa = new MapaSemAndarDTO(mapa);
	}
	
	public AndarDTO(Andar andar) {
		id = andar.getId();
		nome = andar.getNome();
		descricao = andar.getDescricao();
		mapa = new MapaSemAndarDTO(andar.getMapa());
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

	public MapaSemAndarDTO getMapa() {
		return mapa;
	}

	public void setMapa(MapaSemAndarDTO mapa) {
		this.mapa = mapa;
	}
}
