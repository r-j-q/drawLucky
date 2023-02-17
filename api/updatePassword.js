import request from "@/utils/request.js"

export default {
	// 修改密码接口
	updatePWD(params) {
		return request("/usdttrade/users/updatePWD", params, {
			method: "PUT",
			loading: true
		})
	},
	// 修改支付密码接口
	updatePayPWD(params) {
		return request("/usdttrade/users/updatePayPWD", params, {
			method: "PUT",
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
