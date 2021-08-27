package kodal.blyd.dto;

import java.util.List;

public class ComodoCategorizadoDTO {
	
	private String tipo;
	private List<ComodoDTO> comodos;
	
	
	public ComodoCategorizadoDTO(String tipo, List<ComodoDTO> comodos) {
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
}
