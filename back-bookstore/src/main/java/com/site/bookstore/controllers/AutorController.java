package com.site.bookstore.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.site.bookstore.entities.Autor;
import com.site.bookstore.repositories.AutorRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/autores")
public class AutorController {
	
	@Autowired
	private AutorRepository autorRepository;
	
	// GET
	@GetMapping
	public ResponseEntity<List<Autor>> findAll() {
		
		List<Autor> autores = autorRepository.findAll();
		return ResponseEntity.ok().body(autores);
	}
	
	//GET by ID
	@GetMapping(value = "/{id}")
	public ResponseEntity<Autor> findById(@PathVariable Long id) {
		
		Autor autor = autorRepository.findById(id).get();
		return ResponseEntity.ok().body(autor);
	}
	
	//CREATE
	@PostMapping
	public Autor create(@RequestBody Autor autor) {
		return autorRepository.save(autor);
	}
	
	//UPDATE
	@PutMapping("{id}")
	public ResponseEntity<Autor> update(@PathVariable Long id, @RequestBody Autor autorDetails) {
		Autor updateAutor = autorRepository.findById(id).get();
		
		updateAutor.setNome(autorDetails.getNome());
		updateAutor.setSobrenome(autorDetails.getSobrenome());
		
		autorRepository.save(updateAutor);
		
		return ResponseEntity.ok(updateAutor);
	}
	
	//DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
		Autor autor = autorRepository.findById(id).get();
		
		autorRepository.delete(autor);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
