package kodal.blyd.dto;

import kodal.blyd.entities.Aviso;

public class AvisoSemUsuarioDTO {

    private long id;
    private String descricao, local, tempoInicio, tempoFinal, duracao;
    private String listaPonto;
    private boolean transitavel, status;

    public AvisoSemUsuarioDTO() {}

    public AvisoSemUsuarioDTO(long id, String descricao, String local, String tempoInicio, String tempoFinal, String duracao, String listaPonto, boolean transitavel, boolean status) {
        this.id = id;
        this.descricao = descricao;
        this.local = local;
        this.tempoInicio = tempoInicio;
        this.tempoFinal = tempoFinal;
        this.duracao = duracao;
        this.listaPonto = listaPonto;
        this.transitavel = transitavel;
        this.status = status;
    }

    public AvisoSemUsuarioDTO(Aviso aviso) {
        id = aviso.getId();
        descricao = aviso.getDescricao();
        local = aviso.getLocal();
        tempoInicio = aviso.getTempoInicio();
        tempoFinal = aviso.getTempoFinal();
        duracao = aviso.getDuracao();
        listaPonto = aviso.getListaPonto();
        transitavel = aviso.isTransitavel();
        status = aviso.isStatus();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public String getTempoInicio() {
        return tempoInicio;
    }

    public void setTempoInicio(String tempoInicio) {
        this.tempoInicio = tempoInicio;
    }

    public String getTempoFinal() {
        return tempoFinal;
    }

    public void setTempoFinal(String tempoFinal) {
        this.tempoFinal = tempoFinal;
    }

    public String getDuracao() {
        return duracao;
    }

    public void setDuracao(String duracao) {
        this.duracao = duracao;
    }

    public String getListaPonto() {
        return listaPonto;
    }

    public void setListaPonto(String listaPonto) {
        this.listaPonto = listaPonto;
    }

    public boolean isTransitavel() {
        return transitavel;
    }

    public void setTransitavel(boolean transitavel) {
        this.transitavel = transitavel;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
