package kodal.blyd.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "t_mapa")
public class Mapa {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String nome, descricao;
	
	@Column(name = "link_imagem")
	private String linkImagem;
	
	private double m2;
	
	@OneToOne
	@JoinColumn(name = "andar_id")
	private Andar andar;
	
	public Mapa() {}

	public Mapa(long id, String nome, String descricao, String linkImagem ,double m2, Andar andar) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.m2 = m2;
		this.andar = andar;
		this.linkImagem = linkImagem;
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

	public double getM2() {
		return m2;
	}

	public void setM2(double m2) {
		this.m2 = m2;
	}

	public Andar getAndar() {
		return andar;
	}

	public void setAndar(Andar andar) {
		this.andar = andar;
	}

	public String getLinkImagem() {
		return linkImagem;
	}

	public void setLinkImagem(String linkImagem) {
		this.linkImagem = linkImagem;
	}
}
