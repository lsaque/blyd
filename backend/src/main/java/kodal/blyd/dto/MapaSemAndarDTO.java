package kodal.blyd.dto;

import kodal.blyd.entities.Mapa;

public class MapaSemAndarDTO {

    private long id;
    private String nome, descricao, imagem;
    private String matriz;

    public MapaSemAndarDTO(Mapa mapa) {
        id = mapa.getId();
        nome = mapa.getNome();
        descricao = mapa.getDescricao();
        imagem = mapa.getImagem();
        matriz = mapa.getMatriz();
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

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getMatriz() {
        return matriz;
    }

    public void setMatriz(String matriz) {
        this.matriz = matriz;
    }
}
