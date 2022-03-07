package com.site.bookstore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.bookstore.entities.Editora;

@Repository
public interface EditoraRepository extends JpaRepository<Editora, Long>{

}
