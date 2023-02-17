import request from "@/utils/request.js"

export default {
	// 忘记登录密码接口
	updatePassword(params) {
		return request("/usdttrade/users/updateLoginPWD ", params, {
			method: "PUT",
			loading: true
		})
	},







}
