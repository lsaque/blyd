package kodal.blyd.dto;

import kodal.blyd.entities.Andar;

public class AndarSemMapaDTO {

    private long id;
    private String nome, descricao;

    public AndarSemMapaDTO(long id, String nome, String descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }

    public AndarSemMapaDTO(Andar andar) {
        id = andar.getId();
        nome = andar.getNome();
        descricao = andar.getDescricao();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
