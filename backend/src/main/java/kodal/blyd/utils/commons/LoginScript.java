package kodal.blyd.utils.commons;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.services.UsuarioService;

public class LoginScript {

	public StatusDTO verificarLogin(String inputEmail, String inputSenha, UsuarioService service) {

		StatusDTO status = new StatusDTO();
		status.setStatus(false);
		
		if(verificarEmail(inputEmail, service)) {
			
			if(service.requisitarSenha(inputEmail).equals(inputSenha)) {
				status.setStatus(true);
				status.setMensagem("Logado com sucesso!");
			} else status.setMensagem("Senha inválida!");
			
		} else status.setMensagem("Email inválido!");
		return status;
	}
	
	
	private Boolean verificarEmail(String inputEmail, UsuarioService service) {
		return service.procurarEmail(inputEmail);
	}
}
