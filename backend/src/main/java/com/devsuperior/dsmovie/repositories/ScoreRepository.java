package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.ScorePK;

// Interface responsável por fazer os acessos ao banco de dados
public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

	
}
