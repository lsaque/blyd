package kodal.blyd.dto;

import java.io.Serializable;

import kodal.blyd.entities.Ponto;

public class PontoDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private long id;
	private double x, y;
	private MapaDTO mapa;
	
	public PontoDTO() {}

	public PontoDTO(long id, double x, double y, MapaDTO mapa) {
		this.id = id;
		this.x = x;
		this.y = y;
		this.mapa = mapa;
	}
	
	public PontoDTO(Ponto ponto) {
		id = ponto.getId();
		x = ponto.getX();
		y = ponto.getY();
		mapa = new MapaDTO(ponto.getMapa());
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public double getX() {
		return x;
	}

	public void setX(double x) {
		this.x = x;
	}

	public double getY() {
		return y;
	}

	public void setY(double y) {
		this.y = y;
	}

	public MapaDTO getMapa() {
		return mapa;
	}

	public void setMapa(MapaDTO mapa) {
		this.mapa = mapa;
	}
}
