import request from "@/utils/request.js"

export default {
	// 用户登录接口
	login(params) {
		return request("/usdttrade/login/login", params, {
			method: "POST",
			loading: true
		})
	},
	// 获取自身信息接口
	userInfo(params) {
		return request("/usdttrade/login/userInfo", params, {
			method: "GET",
			loading: true
		})
	},
	// 查询网站信息接口

	getSiteConfiguration(params) {
		return request("/usdttrade/announcement/getSiteConfiguration", params, {
			method: "GET",
			loading: true
		})
	},
	// 设置支付密码接口

	setPayPassword(params) {
		return request("/usdttrade/users/setPayPassword", params, {
			method: "PUT",
			loading: true
		})
	},







}
