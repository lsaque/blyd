package kodal.blyd.dto;

import java.io.Serializable;

public class SolicitacaoCadastroAdicionarDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private boolean status;
	private String mensagem;
	
	public SolicitacaoCadastroAdicionarDTO() {}
	
	public SolicitacaoCadastroAdicionarDTO(boolean status, String mensagem) {
		this.status = status;
		this.mensagem = mensagem;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
}
