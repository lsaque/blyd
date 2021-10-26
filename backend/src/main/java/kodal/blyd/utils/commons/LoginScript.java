package kodal.blyd.utils.commons;

import kodal.blyd.dto.LoginDTO;
import kodal.blyd.dto.StatusDTO;
import kodal.blyd.dto.UsuarioDTO;
import kodal.blyd.services.UsuarioService;

public class LoginScript {

	public LoginDTO verificarLogin(String inputEmail, String inputSenha, UsuarioService service) {

		LoginDTO login = new LoginDTO();
		login.setStatus(false);
		
		if(verificarEmail(inputEmail, service)) {

			UsuarioDTO usuario = service.verificarLogin(inputEmail, inputSenha);
			System.out.println("Usuario: " + usuario);
			
			if(usuario != null) {
				login.setStatus(true);
				login.setMensagem("Logado com sucesso!");
				login.setUsuario(usuario);
			} else login.setMensagem("Senha inválida!");
			
		} else login.setMensagem("Email inválido!");
		return login;
	}
	
	
	private Boolean verificarEmail(String inputEmail, UsuarioService service) {
		return service.procurarEmail(inputEmail);
	}
}
