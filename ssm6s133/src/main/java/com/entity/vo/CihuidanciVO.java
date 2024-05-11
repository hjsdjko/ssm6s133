package com.entity.vo;

import com.entity.CihuidanciEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
 

/**
 * N2词汇
 * 手机端接口返回实体辅助类 
 * （主要作用去除一些不必要的字段）
 * @author 
 * @email 
 * @date 2020-12-27 01:12:05
 */
public class CihuidanciVO  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
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
