package com.site.bookstore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.bookstore.entities.Autor;

@Repository
public interface AutorRepository extends JpaRepository<Autor, Long>{

}
