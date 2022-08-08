package com.project.news.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.project.news.entity.Likes;

@RepositoryRestResource(path="likes")
@CrossOrigin("http://localhost:4200/")
public interface LikesRepository extends JpaRepository<Likes, Integer> {
	
	public List<Likes> findByUserId(Integer userId); 
	
	public Integer countByArticleId(Integer articleId);
	
	@Transactional
	@Modifying
	@Query(value = "DELETE FROM Likes WHERE userId = ?1 AND articleId = ?2", nativeQuery=true)
	public Integer deleteByUserIdAndArticleId(Integer userId, Integer articleId);
	
	public Integer deleteByUserId(Integer userId);
	
	public Likes findByArticleIdAndUserId(Integer articleId, Integer userId); 
	public boolean existsByArticleIdAndUserId(Integer articleId, Integer userId);

}
