package kodal.blyd.utils.scripts;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.entities.SolicitacaoCadastro;
import kodal.blyd.services.SolicitacaoCadastroService;
import kodal.blyd.services.UsuarioService;

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
                status.setMensagem("Solicitação informada foi cadastrada!");
                solicitacaoService.adicionarSolicitacaoCadastro(new SolicitacaoCadastro(nome, email, senha, celular, pcd, true));
            }  else status.setMensagem("Solicitação informada não foi cadastrada! Email existente!");

        } else status.setMensagem("Solicitação informada não foi cadastrada! Email existente!\"");
        return status;
    }
}
