package kodal.blyd.entities;

import javax.persistence.*;

@Entity
@Table(name = "t_aviso")
public class Aviso {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long id;
	
	private String descricao, local;
	@Column(name = "tempo_duracao")
	private String tempoDuracao;
	private boolean transitavel;
	
	@ManyToOne
	@JoinColumn(name = "usuario_id")
	private Usuario usuario;
	
	@OneToOne
	@JoinColumn(name = "ponto_id")
	private Ponto ponto;
	
	public Aviso() {}
	
	public Aviso(String descricao, String local, String tempoDuracao, boolean transitavel, Usuario usuario, Ponto ponto) {
		this.descricao = descricao;
		this.local = local;
		this.tempoDuracao = tempoDuracao;
		this.transitavel = transitavel;
		this.usuario = usuario;
		this.ponto = ponto;
	}
	public Aviso(long id, String descricao, String local, String tempoDuracao, boolean transitavel, Usuario usuario, Ponto ponto) {
		this();
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

	public String getTempoDuracao() {
		return tempoDuracao;
	}

	public void setTempoDuracao(String tempoDuracao) {
		this.tempoDuracao = tempoDuracao;
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

	public Ponto getPonto() {
		return ponto;
	}

	public void setPonto(Ponto ponto) {
		this.ponto = ponto;
	}

	public String getLocal() {
		return local;
	}

	public void setLocal(String local) {
		this.local = local;
	}
}
