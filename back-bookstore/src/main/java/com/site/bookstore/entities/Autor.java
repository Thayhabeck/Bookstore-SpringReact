package com.site.bookstore.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Autor implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_autor;
	private String nome;
	private String sobrenome;
	
	@JsonIgnore
	@OneToMany(mappedBy = "autor")
	private List<Livro> livros = new ArrayList<Livro>();
	
	public Autor() {
		super();
	}
	
	public Autor(Long id_autor, String nome, String sobrenome) {
		super();
		this.Id_autor = id_autor;
		this.nome = nome;
		this.sobrenome = sobrenome;
	}
	
	public Long getId_autor() {
		return Id_autor;
	}
	
	public void setId_autor(Long id_autor) {
		Id_autor = id_autor;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getSobrenome() {
		return sobrenome;
	}
	
	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}
	
	public List<Livro> getLivros() {
		return livros;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(Id_autor);
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Autor other = (Autor) obj;
		return Objects.equals(Id_autor, other.Id_autor);
	}

}
