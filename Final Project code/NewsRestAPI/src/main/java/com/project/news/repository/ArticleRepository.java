package com.project.news.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.project.news.entity.Article;

@RepositoryRestResource(path="article")
@CrossOrigin("http://localhost:4200/")
public interface ArticleRepository extends JpaRepository<Article, Integer> {
	
	public boolean existsByTitle(String title);
	
	public Article findByTitle(String title);

}
