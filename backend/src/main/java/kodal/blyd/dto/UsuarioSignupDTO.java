package kodal.blyd.dto;

import java.io.Serializable;

public class UsuarioSignupDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private boolean status;
	private boolean mensagem;
	
	public UsuarioSignupDTO() {}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public boolean isMensagem() {
		return mensagem;
	}

	public void setMensagem(boolean mensagem) {
		this.mensagem = mensagem;
	}
}
