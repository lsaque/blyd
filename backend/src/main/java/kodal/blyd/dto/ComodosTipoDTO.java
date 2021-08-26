package kodal.blyd.dto;

import java.util.List;

public class ComodosTipoDTO {
	
	private String tipo;
	private List<ComodoDTO> comodos;
	
	
	public ComodosTipoDTO(String tipo, List<ComodoDTO> comodos) {
		this.tipo = tipo;
		this.comodos = comodos;
	}
	
	public ComodosTipoDTO() {}

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
