import request from "@/utils/request.js"

export default {
	// 用户添加银行账户接口
	addUserBankCard(params) {
		return request("/usdttrade/bankCard/addUserBankCard", params, {
			method: "POST",
			loading: true
		})
	},







}
