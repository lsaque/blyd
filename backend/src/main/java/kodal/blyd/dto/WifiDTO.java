package kodal.blyd.dto;

import java.io.Serializable;
import kodal.blyd.entities.Wifi;

public class WifiDTO implements Serializable{

	private static final long serialVersionUID = 1L;

	private long id;
	private String nome, descricao;
	private String ponto;
	private AndarDTO andar;
	
	public WifiDTO() {}

	public WifiDTO(long id, String nome, String descricao, String ponto, AndarDTO andar) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.ponto = ponto;
		this.andar = andar;
	}
	
	public WifiDTO(Wifi wifi) {
		id = wifi.getId();
		nome = wifi.getNome();
		descricao = wifi.getDescricao();
		ponto = wifi.getPonto();
		andar = new AndarDTO(wifi.getAndar());
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

	public String getPonto() {
		return ponto;
	}

	public void setPonto(String ponto) {
		this.ponto = ponto;
	}

	public AndarDTO getAndar() {
		return andar;
	}

	public void setAndar(AndarDTO andar) {
		this.andar = andar;
	}
}
