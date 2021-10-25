package kodal.blyd.utils.commons;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.entities.SolicitacaoCadastro;
import kodal.blyd.services.SolicitacaoCadastroService;
import kodal.blyd.services.UsuarioService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

public class SolicitacaoCadastroScript {

    private UsuarioService usuarioService;
    private SolicitacaoCadastroService solicitacaoService;

    public SolicitacaoCadastroScript(UsuarioService usuarioService, SolicitacaoCadastroService solicitacaoService) {
        this.usuarioService = usuarioService;
        this.solicitacaoService = solicitacaoService;
    }

    public StatusDTO adicionarSolicitacaoCadastro(String nome, String email, String senha, String celular, boolean pcd) {
        StatusDTO status = new StatusDTO();
        status.setStatus(false);
        if(!usuarioService.procurarEmail(email)) {
            if(!solicitacaoService.procurarEmail(email)) {
                status.setStatus(true);
                status.setMensagem("Sua solicitação de cadastro foi enviada para o adminstrador!");
                solicitacaoService.adicionarSolicitacaoCadastro(new SolicitacaoCadastro(nome, email, senha, celular, pcd));
            }  else status.setMensagem("Uma solitação nesse email já foi solicitada! Aguarde o adminstrador!");

        } else status.setMensagem("Já existe um usuário com o email inserido, tente outro!");
        return status;
    }
}
