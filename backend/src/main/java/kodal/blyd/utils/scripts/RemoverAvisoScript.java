package kodal.blyd.utils.scripts;

import kodal.blyd.dto.AvisoDTO;
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

    public List<AvisoDTO> gerarNovaLista(List<AvisoDTO> avisos) {

        List<AvisoDTO> novaLista = new ArrayList<>();

        if(!avisos.isEmpty()) {
            Calendar data1 = Calendar.getInstance();
            int day1 = data1.get(Calendar.DATE);
            int month1 = data1.get(Calendar.MONTH) + 1;
            int year1 = data1.get(Calendar.YEAR);
            int hour1 = data1.get(Calendar.HOUR);
            int minute1 = data1.get(Calendar.MINUTE);

            int sum1 = (day1 * 1440) + (month1 * 43800) + year1 + (hour1 * 60) + minute1;

            for (AvisoDTO aviso : avisos) {
                String[] splittedData;

                splittedData = aviso.getTempoFinal().split("-");
                int day2 = Integer.parseInt(splittedData[0]);
                int month2 = Integer.parseInt(splittedData[1]);
                int year2 = Integer.parseInt(splittedData[2]);
                int hour2 = Integer.parseInt(splittedData[3]);
                int minute2 = Integer.parseInt(splittedData[4]);

                int sum2 = (day2 * 1440) + (month2 * 43800) + year2 + (hour2 * 60) + minute2;

                if(sum1 >= sum2) System.out.println(removerAviso(aviso.getId()).getMensagem());
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
            status.setMensagem("Aviso selecionado foi removido!");
        } catch(Exception e) {status.setMensagem("Aviso selecionado não foi removido!");}
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
                status.setMensagem("Aviso selecionado foi removido!");
            }
        }catch (AvisoNull e) {
            status.setMensagem("Aviso selecionado não foi removido! ID inexistente!");
        }
        catch(Exception e) {
            status.setMensagem("Aviso selecionado não foi removido!");
        }
        return status;
    }
}
