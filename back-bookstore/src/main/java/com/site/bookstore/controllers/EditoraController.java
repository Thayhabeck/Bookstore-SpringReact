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

import com.site.bookstore.entities.Editora;
import com.site.bookstore.repositories.EditoraRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/editoras")
public class EditoraController {
	
	@Autowired
	private EditoraRepository editoraRepository;
	
	//GET
	@GetMapping
	public ResponseEntity<List<Editora>> findAll() {
		
		List<Editora> editoras = editoraRepository.findAll();
		return ResponseEntity.ok().body(editoras);
	}
	
	//GET by ID
	@GetMapping(value = "/{id}")
	public ResponseEntity<Editora> findById(@PathVariable Long id) {
		
		Editora editora = editoraRepository.findById(id).get();
		return ResponseEntity.ok().body(editora);
	}
	
	//CREATE
	@PostMapping
	public Editora create(@RequestBody Editora editora) {
		return editoraRepository.save(editora);
	}
	
	//UPDATE
	@PutMapping("{id}")
	public ResponseEntity<Editora> update(@PathVariable Long id, @RequestBody Editora editoraDetails) {
		Editora updateEditora = editoraRepository.findById(id).get();
		
		updateEditora.setNome(editoraDetails.getNome());
		
		editoraRepository.save(updateEditora);
		
		return ResponseEntity.ok(updateEditora);
	}
	
	//DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
		Editora editora = editoraRepository.findById(id).get();
		
		editoraRepository.delete(editora);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
