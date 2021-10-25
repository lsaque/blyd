package kodal.blyd.entities;

import javax.persistence.*;

@Entity
@Table(name = "t_andar")
public class Andar {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String nome, descricao;

	@OneToOne(mappedBy = "andar")
	private Mapa mapa;

	public Andar() {}
	
	public Andar(long id, String nome, String descricao, Mapa mapa) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.mapa = mapa;
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

	public Mapa getMapa() {
		return mapa;
	}

	public void setMapa(Mapa mapa) {
		this.mapa = mapa;
	}
}
