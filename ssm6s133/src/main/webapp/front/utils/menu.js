const menu = {
	list() {
		return [{
			"backMenu": [{
				"child": [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "用户",
					"menuJump": "列表",
					"tableName": "yonghu"
				}],
				"menu": "用户管理"
			}, {
				"child": [{
					"buttons": ["新增", "查看", "修改", "删除", "查看评论"],
					"menu": "N2词汇",
					"menuJump": "列表",
					"tableName": "cihuidanci"
				}],
				"menu": "N2词汇管理"
			}, {
				"child": [{
					"buttons": ["查看", "修改", "删除"],
					"menu": "签到打卡",
					"menuJump": "列表",
					"tableName": "qiandaodaka"
				}],
				"menu": "签到打卡管理"
			}, {
				"child": [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "试卷管理",
					"tableName": "exampaper"
				}],
				"menu": "试卷管理"
			}, {
				"child": [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "试题管理",
					"tableName": "examquestion"
				}],
				"menu": "试题管理"
			}, {
				"child": [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "轮播图管理",
					"tableName": "config"
				}, {
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "网站公告",
					"tableName": "news"
				}],
				"menu": "系统管理"
			}, {
				"child": [{
					"buttons": ["查看", "删除"],
					"menu": "练习记录",
					"tableName": "examrecord"
				}, {
					"buttons": ["查看", "删除"],
					"menu": "认错词汇",
					"tableName": "examfailrecord"
				}, {
					"buttons": ["查看", "删除"],
					"menu": "在线练习",
					"tableName": "exampaperlist"
				}],
				"menu": "考试管理"
			}],
			"frontMenu": [{
				"child": [{
					"buttons": ["查看"],
					"menu": "N2词汇列表",
					"menuJump": "列表",
					"tableName": "cihuidanci"
				}],
				"menu": "N2词汇模块"
			}, {
				"child": [{
					"buttons": ["查看", "新增", "删除"],
					"menu": "签到打卡列表",
					"menuJump": "列表",
					"tableName": "qiandaodaka"
				}],
				"menu": "签到打卡模块"
			}],
			"roleName": "管理员",
			"tableName": "users"
		}, {
			"backMenu": [{
				"child": [{
					"buttons": ["查看"],
					"menu": "N2词汇",
					"menuJump": "列表",
					"tableName": "cihuidanci"
				}],
				"menu": "N2词汇管理"
			}, {
				"child": [{
					"buttons": ["新增", "查看", "删除"],
					"menu": "签到打卡",
					"menuJump": "列表",
					"tableName": "qiandaodaka"
				}],
				"menu": "签到打卡管理"
			}, {
				"child": [{
					"buttons": ["查看", "删除"],
					"menu": "我的收藏",
					"tableName": "storeup"
				}],
				"menu": "我的收藏"
			}, {
				"child": [{
					"buttons": ["查看", "删除"],
					"menu": "练习记录",
					"tableName": "examrecord"
				}, {
					"buttons": ["查看", "删除"],
					"menu": "认错词汇",
					"tableName": "examfailrecord"
				}, {
					"buttons": ["查看"],
					"menu": "在线练习",
					"tableName": "exampaperlist"
				}],
				"menu": "考试管理"
			}],
			"frontMenu": [{
				"child": [{
					"buttons": ["查看"],
					"menu": "N2词汇列表",
					"menuJump": "列表",
					"tableName": "cihuidanci"
				}],
				"menu": "N2词汇模块"
			}, {
				"child": [{
					"buttons": ["查看", "新增", "删除"],
					"menu": "签到打卡列表",
					"menuJump": "列表",
					"tableName": "qiandaodaka"
				}],
				"menu": "签到打卡模块"
			}],
			"roleName": "用户",
			"tableName": "yonghu"
		}]
	}
}
export default menu;
