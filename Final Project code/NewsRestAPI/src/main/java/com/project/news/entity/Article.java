package com.project.news.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="article")
public class Article {
	
	@Id		// primary key
	@GeneratedValue(strategy=GenerationType.IDENTITY)	// auto_increment
	@Column(name="articleid")
	private Integer articleId;
	
	@Column(name="title") 
	private String title;
	
	public Article() {
		// default constructor
	}

	public Article(Integer articleId, String title) {
		this.articleId = articleId;
		this.title = title;
	}

	public Integer getArticleId() {
		return articleId;
	}

	public void setArticleId(Integer articleId) {
		this.articleId = articleId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	
}
