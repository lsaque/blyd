package kodal.blyd.utils.commons;

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
                avisoService.marcarAviso(new Aviso(descricao, local, tempoInicio, tempoFinal, duracao, listaPonto, transitavel, usuario));
                status.setMensagem("Aviso marcado.");
                status.setStatus(true);
            }
        }
        catch(UsuarioNull e){
            status.setMensagem("Usuario nao encontrado.");
        }
        catch (Exception e) {
            status.setMensagem("Erro " + e.toString());
        }
        return status;
    }
}
