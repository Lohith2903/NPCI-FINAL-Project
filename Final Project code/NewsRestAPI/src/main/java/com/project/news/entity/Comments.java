package com.project.news.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="comments")
public class Comments {
	
	@Id		// primary key
	@GeneratedValue(strategy=GenerationType.IDENTITY)	// auto_increment
	@Column(name="commentid")
	private Integer commentId;
	
	@Column(name="articleid")
	private Integer articleId;
	
	@Column(name="userid")
	private Integer userId;
	
	@Column(name="comment")
	private String comment;
	
	public Comments() {
		// default constructor
	}

	public Comments(Integer commentId, Integer articleId, Integer userId, String comment) {
		this.commentId = commentId;
		this.articleId = articleId;
		this.userId = userId;
		this.comment = comment;
	}

	public Integer getCommentId() {
		return commentId;
	}

	public void setCommentId(Integer commentId) {
		this.commentId = commentId;
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

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

}
