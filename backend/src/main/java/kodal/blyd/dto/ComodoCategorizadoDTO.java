package kodal.blyd.dto;

import java.util.List;

public class ComodoCategorizadoDTO {

	private int id;
	private String tipo;
	private List<ComodoDTO> comodos;
	
	
	public ComodoCategorizadoDTO(int id, String tipo, List<ComodoDTO> comodos) {
		this.id = id;
		this.tipo = tipo;
		this.comodos = comodos;
	}
	
	public ComodoCategorizadoDTO() {}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public List<ComodoDTO> getComodos() {
		return comodos;
	}

	public void setComodos(List<ComodoDTO> comodos) {
		this.comodos = comodos;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
}
