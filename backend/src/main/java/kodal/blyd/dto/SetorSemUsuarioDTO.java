package kodal.blyd.dto;

import kodal.blyd.entities.Setor;

public class SetorSemUsuarioDTO {

    private long id;
    private String nome, descricao;

    public SetorSemUsuarioDTO(long id, String nome, String descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }

    public SetorSemUsuarioDTO(Setor setor) {
        id = setor.getId();
        nome = setor.getNome();
        descricao = setor.getDescricao();
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
