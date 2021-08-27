package kodal.blyd.script;

import kodal.blyd.dto.UsuarioLoginDTO;
import kodal.blyd.services.UsuarioService;

public class LoginScript {

	public UsuarioLoginDTO verificarLogin(String inputEmail, String inputSenha, UsuarioService service) {
		
		System.out.println("Olha Aqui!" + inputEmail + inputSenha);
		
		UsuarioLoginDTO userLogin = new UsuarioLoginDTO();
		userLogin.setStatus(false);
		
		if(verificarEmail(inputEmail, service)) {
			
			if(service.requisitarSenha(inputEmail).equals(inputSenha)) {
				userLogin.setStatus(true);
				userLogin.setMensagem("Logado com sucesso!");
			} else userLogin.setMensagem("Senha inválida!");
			
		} else userLogin.setMensagem("Email inválido!");
		System.out.println("Olha a resposta!" + userLogin.getMensagem() + userLogin.isStatus());
		return userLogin;
	}
	
	
	private Boolean verificarEmail(String inputEmail, UsuarioService service) {
		return service.procurarEmail(inputEmail);
	}
}
