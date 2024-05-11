package com.dao;

import com.entity.CihuidanciEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.CihuidanciVO;
import com.entity.view.CihuidanciView;


/**
 * N2词汇
 * 
 * @author 
 * @email 
 * @date 2020-12-27 01:12:05
 */
public interface CihuidanciDao extends BaseMapper<CihuidanciEntity> {
	
	List<CihuidanciVO> selectListVO(@Param("ew") Wrapper<CihuidanciEntity> wrapper);
	
	CihuidanciVO selectVO(@Param("ew") Wrapper<CihuidanciEntity> wrapper);
	
	List<CihuidanciView> selectListView(@Param("ew") Wrapper<CihuidanciEntity> wrapper);

	List<CihuidanciView> selectListView(Pagination page,@Param("ew") Wrapper<CihuidanciEntity> wrapper);
	
	CihuidanciView selectView(@Param("ew") Wrapper<CihuidanciEntity> wrapper);
	
}
