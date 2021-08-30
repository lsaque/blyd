package kodal.blyd.script;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.entities.Aviso;
import kodal.blyd.entities.Ponto;
import kodal.blyd.entities.Usuario;
import kodal.blyd.exceptions.AvisoNull;
import kodal.blyd.exceptions.PontoNull;
import kodal.blyd.exceptions.UsuarioNull;
import kodal.blyd.services.AvisoService;
import kodal.blyd.services.PontoService;
import kodal.blyd.services.UsuarioService;

public class MarcarAvisoScript {

    private UsuarioService usuarioService;
    private PontoService pontoService;
    private AvisoService avisoService;

    public MarcarAvisoScript(UsuarioService usuarioService, PontoService pontoService, AvisoService avisoService){
        this.usuarioService = usuarioService;
        this.pontoService = pontoService;
        this.avisoService = avisoService;
    }

    public StatusDTO marcarAviso(String descricao, String local, String tempoDuracao, boolean transitavel, long usuarioId) {

        StatusDTO status = new StatusDTO();
        status.setStatus(false);

        Usuario usuario = usuarioService.procurarId(usuarioId);
        Ponto ponto = pontoService.procurarId(1);
        Aviso aviso = new Aviso(descricao, local, tempoDuracao, transitavel, usuario, ponto);

        try {

            if(usuario == null) {
                throw new UsuarioNull();
            } else {

                if(ponto == null) {
                    throw new PontoNull();
                } else {

                    if(aviso == null) {
                        throw new AvisoNull();
                    } else {
                        avisoService.marcarAviso(aviso);
                        status.setMensagem("Aviso marcado");
                        status.setStatus(true);
                    }
                }
            }
        }
        catch(UsuarioNull e){
            status.setMensagem("Usuario não encontrado.");
        }
        catch(PontoNull e) {
            status.setMensagem("Ponto não encontrado.");
        }
        catch (AvisoNull e) {
            status.setMensagem("Aviso não setado");
        }
        return status;
    }

}
