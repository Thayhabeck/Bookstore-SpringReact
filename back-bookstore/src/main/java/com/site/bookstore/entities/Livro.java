package com.site.bookstore.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Livro implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_Livro;
	private String titulo;
	private String isbn;
	private String urlImg;
	private double preco;
	
	@ManyToOne
	@JoinColumn(name = "Autor_id")
	private Autor autor;
	
	@ManyToOne
	@JoinColumn(name = "Editora_id")
	private Editora editora;

	public Livro() {
		super();
	}

	public Livro(Long id_Livro, String titulo, String isbn, String urlImg, double preco, Autor autor, Editora editora) {
		super();
		this.Id_Livro = id_Livro;
		this.titulo = titulo;
		this.isbn = isbn;
		this.urlImg = urlImg;
		this.preco = preco;
		this.autor = autor;
		this.editora = editora;
	}

	public String getUrlImg() {
		return urlImg;
	}

	public void setUrlImg(String urlImg) {
		this.urlImg = urlImg;
	}

	public Long getId_Livro() {
		return Id_Livro;
	}

	public void setId_Livro(Long id_Livro) {
		Id_Livro = id_Livro;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public double getPreco() {
		return preco;
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}

	public Autor getAutor() {
		return autor;
	}

	public void setAutor(Autor autor) {
		this.autor = autor;
	}

	public Editora getEditora() {
		return editora;
	}

	public void setEditora(Editora editora) {
		this.editora = editora;
	}

	@Override
	public int hashCode() {
		return Objects.hash(Id_Livro);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Livro other = (Livro) obj;
		return Objects.equals(Id_Livro, other.Id_Livro);
	}
	
	
}
