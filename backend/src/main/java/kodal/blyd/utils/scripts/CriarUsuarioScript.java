package kodal.blyd.utils.scripts;

import kodal.blyd.dto.StatusDTO;
import kodal.blyd.entities.Aviso;
import kodal.blyd.entities.Setor;
import kodal.blyd.entities.Usuario;
import kodal.blyd.services.SetorService;
import kodal.blyd.services.UsuarioService;

import java.util.ArrayList;

public class CriarUsuarioScript {

    private UsuarioService usuarioService;
    private SetorService setorService;

    public CriarUsuarioScript(UsuarioService usuarioService, SetorService setorService) {
        this.usuarioService = usuarioService;
        this.setorService = setorService;
    }

    public StatusDTO criarUsuario(String nome, String email, String senha, String celular, String foto, boolean pcd, boolean admin, long idSetor){
        StatusDTO status = new StatusDTO();
        Setor setor = setorService.procurarId(idSetor);

        status.setStatus(false);
        if(setor == null) status.setMensagem("Usuário informado não foi criado! Setor inexistente!");
        else {
            if(usuarioService.procurarEmail(email)) status.setMensagem("Usuário informado não foi criado! Email existente!");
            else {
                Usuario usuario = new Usuario(nome, email, senha, celular, foto, 0, 0, 0, pcd, admin, true, setor, new ArrayList<Aviso>(){});
                if(usuarioService.adicionarUsuario(usuario).isStatus()) {
                    status.setStatus(true);
                    status.setMensagem("Usuário informado foi criado!");
                } else status.setMensagem("Usuário informado não foi criado!");
            }
        }
        return status;
    }
}
