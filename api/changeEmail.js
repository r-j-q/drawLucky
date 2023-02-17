import request from "@/utils/request.js"

export default {
	// 用户修改邮箱接口
	updateEmail(params) {
		return request("/usdttrade/users/updateEmail", params, {
			method: "PUT",
			loading: true
		})
	},







}
