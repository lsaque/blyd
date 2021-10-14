package kodal.blyd.dto;

import java.io.Serializable;
import kodal.blyd.entities.Mapa;

import javax.persistence.Column;

public class MapaDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;

	private long id;
	private String nome, descricao, imagem;
	@Column(columnDefinition = "String")
	private String matriz;
	private AndarDTO andar;

	public MapaDTO() {}

	public MapaDTO(long id, String nome, String descricao, String imagem, String matriz, AndarDTO andar) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.imagem = imagem;
		this.matriz = matriz;
		this.andar = andar;
	}

	public MapaDTO(Mapa mapa) {
		id = mapa.getId();
		nome = mapa.getNome();
		descricao = mapa.getDescricao();
		imagem = mapa.getImagem();
		matriz = mapa.getMatriz();
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

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public String getMatriz() {
		return matriz;
	}

	public void setMatriz(String matriz) {
		this.matriz = matriz;
	}

	public AndarDTO getAndar() {
		return andar;
	}

	public void setAndar(AndarDTO andar) {
		this.andar = andar;
	}
}
