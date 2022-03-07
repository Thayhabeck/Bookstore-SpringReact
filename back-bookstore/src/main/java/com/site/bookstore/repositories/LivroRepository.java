package com.site.bookstore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.bookstore.entities.Livro;

@Repository
public interface LivroRepository extends JpaRepository<Livro, Long>{

}
