package kodal.blyd.dto;

public class LoginDTO {

    private boolean status;
    private String mensagem;
    private UsuarioDTO usuarioDTO;

    public LoginDTO() {}

    public LoginDTO(boolean status, String mensagem, UsuarioDTO usuarioDTO) {
        this.status = status;
        this.mensagem = mensagem;
        this.usuarioDTO = usuarioDTO;
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

    public UsuarioDTO getUsuarioDTO() {
        return usuarioDTO;
    }

    public void setUsuarioDTO(UsuarioDTO usuarioDTO) {
        this.usuarioDTO = usuarioDTO;
    }
}
