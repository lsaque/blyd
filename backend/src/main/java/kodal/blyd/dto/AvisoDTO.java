package kodal.blyd.dto;

import java.io.Serializable;

import kodal.blyd.entities.Aviso;
import kodal.blyd.entities.Ponto;
import kodal.blyd.entities.Usuario;

public class AvisoDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	public long id;
	private String descricao, local, tempoDuracao;
	private boolean transitavel;
	private UsuarioDTO usuario;
	private PontoDTO ponto;
	
	public AvisoDTO() {}

	public AvisoDTO(long id, String descricao, String local, String tempoDuracao, boolean transitavel, UsuarioDTO usuario, PontoDTO ponto) {
		this.id = id;
		this.descricao = descricao;
		this.local = local;
		this.transitavel = transitavel;
		this.tempoDuracao = tempoDuracao;
		this.usuario = usuario;
		this.ponto = ponto;
	}

	public AvisoDTO(Aviso aviso) {
		id = aviso.getId();
		descricao = aviso.getDescricao();
		local = aviso.getLocal();
		tempoDuracao = aviso.getTempoDuracao();
		transitavel = aviso.isTransitavel();
		usuario = new UsuarioDTO(aviso.getUsuario());
		ponto = new PontoDTO(aviso.getPonto());
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

	public boolean isTransitavel() {
		return transitavel;
	}

	public void setTransitavel(boolean transitavel) {
		this.transitavel = transitavel;
	}

	public String getTempoDuracao() {
		return tempoDuracao;
	}

	public void setTempoDuracao(String tempoDuracao) {
		this.tempoDuracao = tempoDuracao;
	}

	public UsuarioDTO getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioDTO usuario) {
		this.usuario = usuario;
	}

	public PontoDTO getPonto() {
		return ponto;
	}

	public void setPonto(PontoDTO ponto) {
		this.ponto = ponto;
	}

	public String getLocal() {
		return local;
	}

	public void setLocal(String local) {
		this.local = local;
	}
}
