package kodal.blyd.entities;

import javax.persistence.*;

@Entity
@Table(name = "t_aviso")
public class Aviso {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long id;
	
	private String descricao, local;
	@Column(name = "tempo_inicio")
	private String tempoInicio;
	@Column(name = "tempo_final")
	private String tempoFinal;

	private String duracao;

	@Column(name = "lista_ponto")
	private String listaPonto;

	private boolean transitavel;

	@ManyToOne
	@JoinColumn(name = "usuario_id")
	private Usuario usuario;
	
	public Aviso() {}

	public Aviso(String descricao, String local, String tempoInicio, String tempoFinal, String duracao, String listaPonto, boolean transitavel, Usuario usuario) {
		this.descricao = descricao;
		this.local = local;
		this.tempoInicio = tempoInicio;
		this.tempoFinal = tempoFinal;
		this.duracao = duracao;
		this.listaPonto = listaPonto;
		this.transitavel = transitavel;
		this.usuario = usuario;
	}

	public Aviso(long id, String descricao, String local, String tempoInicio, String tempoFinal, String duracao, String listaPonto, boolean transitavel, Usuario usuario) {
		this(descricao, local, tempoInicio, tempoFinal, duracao, listaPonto, transitavel, usuario);
		this.id = id;
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

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
}
