import request from "@/utils/request.js"

export default {
	// 用户注册接口
	addTBUsers(params) {
		return request("/usdttrade/users/addTBUsers", params, {
			method: "POST",
			loading: true
		})
	},
	// 获取登录验证码接口
	getVerificationCode(params) {
		return request("/usdttrade/login/getVerificationCode", params, {
			method: "GET",
			loading: true
		})
	},







}
