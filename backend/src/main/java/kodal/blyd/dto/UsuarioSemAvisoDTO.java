package kodal.blyd.dto;

import kodal.blyd.entities.Usuario;

public class UsuarioSemAvisoDTO {

    private long id;
    private String nome, email, senha, celular, foto;
    private long totalChamadas, totalAvisos, totalRotas;
    private Boolean pcd, admin;
    private SetorSemUsuarioDTO setor;

    public UsuarioSemAvisoDTO(long id, String nome, String email, String senha, String celular, String foto, long totalChamadas, long totalAvisos, long totalRotas, Boolean pcd, Boolean admin, SetorSemUsuarioDTO setor) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.celular = celular;
        this.foto = foto;
        this.totalChamadas = totalChamadas;
        this.totalAvisos = totalAvisos;
        this.totalRotas = totalRotas;
        this.pcd = pcd;
        this.admin = admin;
        this.setor = setor;
    }

    public UsuarioSemAvisoDTO(Usuario usuario) {
        id = usuario.getId();
        nome = usuario.getNome();
        email = usuario.getEmail();
        senha = usuario.getSenha();
        celular = usuario.getCelular();
        foto = usuario.getFoto();
        totalChamadas = usuario.getTotalChamadas();
        totalAvisos = usuario.getTotalAvisos();
        totalRotas = usuario.getTotalRotas();
        pcd = usuario.isPcd();
        admin = usuario.isAdmin();
        setor = new SetorSemUsuarioDTO(usuario.getSetor());
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public long getTotalChamadas() {
        return totalChamadas;
    }

    public void setTotalChamadas(long totalChamadas) {
        this.totalChamadas = totalChamadas;
    }

    public long getTotalAvisos() {
        return totalAvisos;
    }

    public void setTotalAvisos(long totalAvisos) {
        this.totalAvisos = totalAvisos;
    }

    public long getTotalRotas() {
        return totalRotas;
    }

    public void setTotalRotas(long totalRotas) {
        this.totalRotas = totalRotas;
    }

    public Boolean isPcd() {
        return pcd;
    }

    public void setPcd(Boolean pcd) {
        this.pcd = pcd;
    }

    public Boolean isAdmin() {
        return admin;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
    }

    public SetorSemUsuarioDTO getSetor() {
        return setor;
    }

    public void setSetor(SetorSemUsuarioDTO setor) {
        this.setor = setor;
    }
}
