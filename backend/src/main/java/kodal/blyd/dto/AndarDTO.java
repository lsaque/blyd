package kodal.blyd.dto;

import java.io.Serializable;
import kodal.blyd.entities.Andar;
import kodal.blyd.entities.Mapa;

public class AndarDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;

	private long id;
	private String nome, descricao;
	private MapaDTO mapa;
	
	public AndarDTO() {}

	public AndarDTO(long id, String nome, String descricao, Mapa mapa) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.mapa = new MapaDTO(mapa);
	}
	
	public AndarDTO(Andar andar) {
		id = andar.getId();
		nome = andar.getNome();
		descricao = andar.getDescricao();
		mapa = new MapaDTO(andar.getMapa());
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

	public MapaDTO getMapa() {
		return mapa;
	}

	public void setMapa(MapaDTO mapa) {
		this.mapa = mapa;
	}
}
