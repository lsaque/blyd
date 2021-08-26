package kodal.blyd.dto;

import java.io.Serializable;

import kodal.blyd.entities.Beacon;

public class BeaconDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private long id;
	private String nome, descricao;
	private PontoDTO ponto;
	private AndarDTO andar;
	
	public BeaconDTO() {}

	public BeaconDTO(long id, String nome, String descricao, PontoDTO ponto, AndarDTO andar) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.ponto = ponto;
		this.andar = andar;
	}
	
	public BeaconDTO(Beacon beacon) {
		id = beacon.getId();
		nome = beacon.getNome();
		descricao = beacon.getDescricao();
		ponto = new PontoDTO(beacon.getPonto());
		andar = new AndarDTO(beacon.getAndar());
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

	public PontoDTO getPonto() {
		return ponto;
	}

	public void setPonto(PontoDTO ponto) {
		this.ponto = ponto;
	}

	public AndarDTO getAndar() {
		return andar;
	}

	public void setAndar(AndarDTO andar) {
		this.andar = andar;
	}

}
