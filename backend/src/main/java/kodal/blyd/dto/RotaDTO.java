package kodal.blyd.dto;

import java.io.Serializable;
import java.util.List;

public class RotaDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private List<PopUpDirectionDTO> popUps;
    private List<AvisoDTO> avisos;

    public RotaDTO() {}

    public RotaDTO(List<PopUpDirectionDTO> popUps, List<AvisoDTO> avisos) {
        this.popUps = popUps;
        this.avisos = avisos;
    }

    public List<PopUpDirectionDTO> getPopUps() {
        return popUps;
    }

    public void setPopUps(List<PopUpDirectionDTO> popUps) {
        this.popUps = popUps;
    }

    public List<AvisoDTO> getAvisos() {
        return avisos;
    }

    public void setAvisos(List<AvisoDTO> avisos) {
        this.avisos = avisos;
    }
}
