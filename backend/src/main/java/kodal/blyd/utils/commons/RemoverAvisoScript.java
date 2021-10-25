package kodal.blyd.utils.commons;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.entities.Aviso;
import kodal.blyd.exceptions.AvisoNull;
import kodal.blyd.services.AvisoService;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

public class RemoverAvisoScript {

    private AvisoService service;

    public RemoverAvisoScript(AvisoService service) {
        this.service = service;
    }

    public RemoverAvisoScript() {}

    public List<Aviso> gerarNovaLista(List<Aviso> avisos) {

        List<Aviso> novaLista = new ArrayList<>();

        if(!avisos.isEmpty()) {
            Calendar data1 = Calendar.getInstance();
            Calendar data2 = Calendar.getInstance();

            for (Aviso aviso : avisos) {
                String[] splittedData;
                splittedData = aviso.getTempoFinal().split("-");
                data2.set(Calendar.DATE, Integer.parseInt(splittedData[0]));
                data2.set(Calendar.MONTH, Integer.parseInt(splittedData[1]) - 1);
                data2.set(Calendar.YEAR, Integer.parseInt(splittedData[2]));
                data2.set(Calendar.HOUR, Integer.parseInt(splittedData[3]));
                data2.set(Calendar.MINUTE, Integer.parseInt(splittedData[4]));

                if(data1.getTimeInMillis() > data2.getTimeInMillis()) System.out.println(removerAviso(aviso).getMensagem());
                else novaLista.add(aviso);
            }
        }
        return novaLista;
    }

    public StatusDTO removerAviso(Aviso aviso) {
        StatusDTO status = new StatusDTO();
        status.setStatus(false);

        service.removerAviso(aviso);
        try {
            service.removerAviso(aviso);
            status.setStatus(true);
            status.setMensagem("Aviso removido com sucesso.");
        } catch(Exception e) {status.setMensagem("Não foi possível remover o aviso.");}
        return status;
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
                status.setMensagem("Aviso removido com sucesso.");
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
