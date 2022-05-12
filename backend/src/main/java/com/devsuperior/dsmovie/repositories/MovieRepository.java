package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.Movie;

// Interface responsável por fazer os acessos ao banco de dados
public interface MovieRepository extends JpaRepository<Movie, Long> {

	
}
