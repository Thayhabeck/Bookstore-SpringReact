package com.site.bookstore;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.site.bookstore.entities.Autor;
import com.site.bookstore.entities.Editora;
import com.site.bookstore.entities.Livro;
import com.site.bookstore.repositories.AutorRepository;
import com.site.bookstore.repositories.EditoraRepository;
import com.site.bookstore.repositories.LivroRepository;

@SpringBootApplication
public class BookstoreApplication implements CommandLineRunner{
	
	@Autowired 
	private AutorRepository autorRepository;
	
	@Autowired 
	private EditoraRepository editoraRepository;
	
	@Autowired 
	private LivroRepository livroRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(BookstoreApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		/*
		Autor a1 = new Autor(null, "George", "R.R. Martin");
		Autor a2 = new Autor(null, "Tom", "Clancy");
		
		Editora e1 = new Editora(null, "Putnam");
		Editora e2 = new Editora(null, "Suma");
		Editora e3 = new Editora(null, "Matrix");
		
		Livro l1 = new Livro(null, "A guerra dos Tronos", "125996", "https://http2.mlstatic.com/D_NQ_NP_910444-MLB44269647004_122020-O.jpg", 45.75, a1, e2);
		Livro l2 = new Livro(null, "A Soma de Todos os Medos", "789574", "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_84be2992e3c4eaa2f7881537207781f15270b8f0.jpg", 38.87, a2, e1);
		
		a1.getLivros().addAll(Arrays.asList(l1));
		a2.getLivros().addAll(Arrays.asList(l2));
		
		e1.getLivros().addAll(Arrays.asList(l2));
		e2.getLivros().addAll(Arrays.asList(l1));
		
		autorRepository.save(a1);
		autorRepository.save(a2);
		
		editoraRepository.save(e1);
		editoraRepository.save(e2);
		editoraRepository.save(e3);
		
		livroRepository.save(l1);
		livroRepository.save(l2);
		*/
	}

}