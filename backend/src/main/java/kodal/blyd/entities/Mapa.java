package kodal.blyd.entities;

import javax.persistence.*;

@Entity
@Table(name = "t_mapa")
public class Mapa {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String nome, descricao, imagem;

	@Lob
	private String matriz;

	@OneToOne
	@JoinColumn(name = "andar_id")
	private Andar andar;

	public Mapa() {}

	public Mapa(long id, String nome, String descricao, String imagem, String matriz, Andar andar) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.imagem = imagem;
		this.matriz = matriz;
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

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public String getMatriz() {
		return matriz;
	}

	public void setMatriz(String matriz) {
		this.matriz = matriz;
	}

	public Andar getAndar() {
		return andar;
	}

	public void setAndar(Andar andar) {
		this.andar = andar;
	}
}
