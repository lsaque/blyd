package kodal.blyd.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "t_wifi")
public class Wifi {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String nome, descricao;
	
	@OneToOne
	@JoinColumn(name = "ponto_id")
	private Ponto ponto;
	
	@OneToOne
	@JoinColumn(name = "andar_id")
	private Andar andar;
	
	public Wifi() {}

	public Wifi(long id, String nome, String descricao, Ponto ponto, Andar andar) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
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
