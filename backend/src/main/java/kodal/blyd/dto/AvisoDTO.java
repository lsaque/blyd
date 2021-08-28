package kodal.blyd.dto;

import java.io.Serializable;

import kodal.blyd.entities.Aviso;

public class AvisoDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	public long id;
	
	private String nome, descricao;
	private boolean transitavel;
	private int dia, mes, ano, hora, minuto;
	private UsuarioDTO usuario;
	private PontoDTO ponto;
	private AndarDTO andar;
	
	public AvisoDTO() {}

	public AvisoDTO(long id, String nome, String descricao, boolean transitavel, int dia, int mes, int ano, int hora,
			int minuto, UsuarioDTO usuario, PontoDTO ponto, AndarDTO andar) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.transitavel = transitavel;
		this.dia = dia;
		this.mes = mes;
		this.ano = ano;
		this.hora = hora;
		this.minuto = minuto;
		this.usuario = usuario;
		this.ponto = ponto;
		this.andar = andar;
	}

	public AvisoDTO(Aviso aviso) {
		id = aviso.getId();
		nome = aviso.getNome();
		descricao = aviso.getDescricao();
		transitavel = aviso.isTransitavel();
		dia = aviso.getDia();
		mes = aviso.getMes();
		ano = aviso.getAno();
		hora = aviso.getHora();
		minuto = aviso.getMinuto();
		usuario = new UsuarioDTO(aviso.getUsuario());
		ponto = new PontoDTO(aviso.getPonto());
		andar = new AndarDTO(aviso.getAndar());
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getDia() {
		return dia;
	}

	public void setDia(int dia) {
		this.dia = dia;
	}

	public int getMes() {
		return mes;
	}

	public void setMes(int mes) {
		this.mes = mes;
	}

	public int getAno() {
		return ano;
	}

	public void setAno(int ano) {
		this.ano = ano;
	}

	public int getHora() {
		return hora;
	}

	public void setHora(int hora) {
		this.hora = hora;
	}

	public int getMinuto() {
		return minuto;
	}

	public void setMinuto(int minuto) {
		this.minuto = minuto;
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

	public AndarDTO getAndar() {
		return andar;
	}

	public void setAndar(AndarDTO andar) {
		this.andar = andar;
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

	public boolean isTransitavel() {
		return transitavel;
	}

	public void setTransitavel(boolean transitavel) {
		this.transitavel = transitavel;
	}
}
