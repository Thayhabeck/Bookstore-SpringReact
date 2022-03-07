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
public class Editora implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_editora;
	private String nome;
	
	@JsonIgnore
	@OneToMany(mappedBy = "editora")
	private List<Livro> livros = new ArrayList<Livro>();
	
	public Editora() {
		super();
	}

	public Editora(Long id_editora, String nome) {
		super();
		this.Id_editora = id_editora;
		this.nome = nome;
	}

	public Long getId_editora() {
		return Id_editora;
	}

	public void setId_editora(Long id_editora) {
		Id_editora = id_editora;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public List<Livro> getLivros() {
		return livros;
	}

	@Override
	public int hashCode() {
		return Objects.hash(Id_editora);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Editora other = (Editora) obj;
		return Objects.equals(Id_editora, other.Id_editora);
	}
}
