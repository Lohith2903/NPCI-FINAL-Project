package com.project.news.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.project.news.entity.Comments;

@RepositoryRestResource(path="comments")
@CrossOrigin("http://localhost:4200/")
public interface CommentsRepository extends JpaRepository<Comments, Integer>{
	
	public List<Comments> findByUserId(Integer userId);
	
	public List<Comments> findByArticleId(Integer articleId);
	
	public Integer countByArticleId(Integer articleId);

}
