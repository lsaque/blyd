package kodal.blyd.dto;

public class LoginDTO {

    private boolean status;
    private String mensagem;
    private UsuarioDTO usuario;

    public LoginDTO() {}

    public LoginDTO(boolean status, String mensagem, UsuarioDTO usuarioDTO) {
        this.status = status;
        this.mensagem = mensagem;
        this.usuario = usuarioDTO;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    public UsuarioDTO getUsuario() {
        return usuario;
    }

    public void setUsuario(UsuarioDTO usuarioDTO) {
        this.usuario = usuarioDTO;
    }
}
