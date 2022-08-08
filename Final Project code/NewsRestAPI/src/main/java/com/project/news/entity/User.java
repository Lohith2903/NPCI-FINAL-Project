package com.project.news.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {
	
	@Id		// primary key
	@GeneratedValue(strategy=GenerationType.IDENTITY)	// auto_increment
	@Column(name="userid")
	private Integer userId;
	
	@Column(name="fullname")
	private String fullName;
	
	@Column(name="username")
	private String userName;
	
	@Column(name="emailid")
	private String emailId;
	
	@Column(name="password")
	private String password;
	
	@Column(name="dob")
	private Date dob;
	
	@Column(name="isadmin")
	private Boolean isAdmin;
	
	public User() {
		// default constructor
	}

	public User(Integer userId, String fullName, String userName, String emailID, String password, Date dob,
			Boolean isAdmin) {
		this.userId = userId;
		this.fullName = fullName;
		this.userName = userName;
		this.emailId = emailID;
		this.password = password;
		this.dob = dob;
		this.isAdmin = isAdmin;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailID) {
		this.emailId = emailID;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public Boolean getIsAdmin() {
		return isAdmin;
	}

	public void setIsAdmin(Boolean isAdmin) {
		this.isAdmin = isAdmin;
	}
	
}
