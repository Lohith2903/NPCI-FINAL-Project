package com.project.news.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="likes")
public class Likes {
	
	@Id		// primary key
	@GeneratedValue(strategy=GenerationType.IDENTITY)	// auto_increment
	@Column(name="likeid")
	private Integer likeId;
	
	@Column(name="articleid")
	private Integer articleId;
	
	@Column(name="userid")
	private Integer userId;
	
	public Likes() {
		// default constructor
	}

	public Likes(Integer likeId, Integer articleId, Integer userId) {
		this.likeId = likeId;
		this.articleId = articleId;
		this.userId = userId;
	}

	public Integer getLikeId() {
		return likeId;
	}

	public void setLikeId(Integer likeId) {
		this.likeId = likeId;
	}

	public Integer getArticleId() {
		return articleId;
	}

	public void setArticleId(Integer articleId) {
		this.articleId = articleId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

}
