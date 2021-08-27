package kodal.blyd.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "t_aviso")
public class Aviso {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long id;
	
	private String nome, descricao;
	private boolean transitavel;
	private int dia, mes, ano, hora, minuto;
	
	@ManyToOne
	@JoinColumn(name = "usuario_id")
	private Usuario usuario;
	
	@OneToOne
	@JoinColumn(name = "ponto_id")
	private Ponto ponto;
	
	@OneToOne
	@JoinColumn(name = "andar_id")
	private Andar andar;
	
	public Aviso() {}

	public Aviso(long id, String nome, String descricao, boolean transitavel, int dia, int mes, int ano, int hora, int minuto,
			Usuario usuario, Ponto ponto, Andar andar) {
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

	public boolean isTransitavel() {
		return transitavel;
	}

	public void setTransitavel(boolean transitavel) {
		this.transitavel = transitavel;
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

	public Andar getAndar() {
		return andar;
	}

	public void setAndar(Andar andar) {
		this.andar = andar;
	}
}
