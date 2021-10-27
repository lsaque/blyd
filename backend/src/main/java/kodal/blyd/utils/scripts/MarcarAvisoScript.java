package kodal.blyd.utils.scripts;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.entities.Aviso;
import kodal.blyd.entities.Usuario;
import kodal.blyd.exceptions.UsuarioNull;
import kodal.blyd.services.AvisoService;
import kodal.blyd.services.UsuarioService;

public class MarcarAvisoScript {

    private UsuarioService usuarioService;
    private AvisoService avisoService;

    public MarcarAvisoScript(UsuarioService usuarioService,AvisoService avisoService){
        this.usuarioService = usuarioService;
        this.avisoService = avisoService;
    }

    public StatusDTO marcarAviso(String descricao, String local, String tempoInicio, String tempoFinal, String listaPonto,String duracao, boolean transitavel, long usuarioId) {

        StatusDTO status = new StatusDTO();
        status.setStatus(false);

        Usuario usuario = usuarioService.procurarId(usuarioId);

        try {
            if(usuario == null) {
                throw new UsuarioNull();
            } else {
                StatusDTO statusUsuario = usuarioService.adicionarAviso(usuarioId);
                if(statusUsuario.isStatus()) {
                    usuario = usuarioService.procurarId(usuarioId);
                    avisoService.marcarAviso(new Aviso(descricao, local, tempoInicio, tempoFinal, duracao, listaPonto, transitavel, true, usuario));
                    status.setMensagem("Aviso informado foi criado!");
                    status.setStatus(true);
                } else status.setMensagem(statusUsuario.getMensagem());
            }
        }
        catch(UsuarioNull e){
            status.setMensagem("Aviso informado foi não foi criado! Usuário inexistente!");
        }
        catch (Exception e) {
            status.setMensagem("Aviso informado não foi criado!");
        }
        return status;
    }
}
