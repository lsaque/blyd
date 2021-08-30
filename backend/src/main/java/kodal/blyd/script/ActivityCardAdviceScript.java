package kodal.blyd.script;

import kodal.blyd.dto.ActivityCardAdviceDTO;
import kodal.blyd.dto.AvisoDTO;

import java.util.ArrayList;
import java.util.List;

public class ActivityCardAdviceScript {

    public List<ActivityCardAdviceDTO> createActivityCardAdviceList(List<AvisoDTO> avisos){
        List<ActivityCardAdviceDTO> activityCardAdviceList = new ArrayList<>();

        for (AvisoDTO aviso : avisos) {
            activityCardAdviceList.add(new ActivityCardAdviceDTO(aviso.getId(), aviso.getUsuario().getNome(),  aviso.getDescricao(), aviso.getLocal(), aviso.getTempoDuracao()));
        }
        return activityCardAdviceList;
    }

}
