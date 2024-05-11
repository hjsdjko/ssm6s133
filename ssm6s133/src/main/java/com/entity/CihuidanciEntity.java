package com.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * N2词汇
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2020-12-27 01:12:05
 */
@TableName("cihuidanci")
public class CihuidanciEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public CihuidanciEntity() {
		
	}
	
	public CihuidanciEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 单词
	 */
					
	private String danci;
	
	/**
	 * 播放
	 */
					
	private String bofang;
	
	/**
	 * 释义
	 */
					
	private String shiyi;
	
	/**
	 * 例句
	 */
					
	private String liju;
	
	/**
	 * 封面
	 */
					
	private String fengmian;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：单词
	 */
	public void setDanci(String danci) {
		this.danci = danci;
	}
	/**
	 * 获取：单词
	 */
	public String getDanci() {
		return danci;
	}
	/**
	 * 设置：播放
	 */
	public void setBofang(String bofang) {
		this.bofang = bofang;
	}
	/**
	 * 获取：播放
	 */
	public String getBofang() {
		return bofang;
	}
	/**
	 * 设置：释义
	 */
	public void setShiyi(String shiyi) {
		this.shiyi = shiyi;
	}
	/**
	 * 获取：释义
	 */
	public String getShiyi() {
		return shiyi;
	}
	/**
	 * 设置：例句
	 */
	public void setLiju(String liju) {
		this.liju = liju;
	}
	/**
	 * 获取：例句
	 */
	public String getLiju() {
		return liju;
	}
	/**
	 * 设置：封面
	 */
	public void setFengmian(String fengmian) {
		this.fengmian = fengmian;
	}
	/**
	 * 获取：封面
	 */
	public String getFengmian() {
		return fengmian;
	}

}
