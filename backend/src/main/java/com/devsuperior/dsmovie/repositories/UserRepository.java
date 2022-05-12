package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.User;

// Interface responsável por fazer os acessos ao banco de dados
public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}
