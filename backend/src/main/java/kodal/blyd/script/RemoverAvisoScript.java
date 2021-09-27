package kodal.blyd.script;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.entities.Aviso;
import kodal.blyd.exceptions.AvisoNull;
import kodal.blyd.services.AvisoService;

public class RemoverAvisoScript {

    private AvisoService service;

    public RemoverAvisoScript(AvisoService service) {
        this.service = service;
    }

    public StatusDTO removerAviso(long id) {
        StatusDTO status = new StatusDTO();
        status.setStatus(false);

        Aviso aviso = service.procurarAviso(id);

        try {
            if(aviso == null) throw new AvisoNull();
            else {
                service.removerAviso(aviso);
                status.setStatus(true);
                status.setMensagem("Aviso removido com sucesso!");
            }
        }catch (AvisoNull e) {
            status.setMensagem("O aviso nao pode ser removido, pois seus ID e inexistente.");
        }
        catch(Exception e) {
            status.setMensagem("Erro: " + e.toString());
        }

        return status;
    }
}
