package kodal.blyd.dto;

import java.util.List;

public class RotaDTO {

    private List<PopUpDirectionDTO> popUps;
    private List<AvisoDTO> avisos;
    private int tempoEstimado;

    public RotaDTO() {}

    public RotaDTO(List<PopUpDirectionDTO> popUps, List<AvisoDTO> avisos, int tempoEstimado) {
        this.popUps = popUps;
        this.avisos = avisos;
        this.tempoEstimado = tempoEstimado;
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

    public int getTempoEstimado() {
        return tempoEstimado;
    }

    public void setTempoEstimado(int tempoEstimado) {
        this.tempoEstimado = tempoEstimado;
    }
}
