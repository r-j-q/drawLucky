import request from "@/utils/request.js"

export default {
	// 用户添加银行账户接口
	addUserBankCard(params) {
		return request("/usdttrade/bankCard/addUserBankCard", params, {
			method: "POST",
			loading: true
		})
	},
	// 查询支持提币/卖币的币种接口
	getCurrency(params) {
		return request("/usdttrade/tbOutFeeRate/getCurrency", params, {
			method: "GET",
			loading: true
		})
	},
	// 删除银行卡账号接口
	delBankCard(params) {
		return request("/usdttrade/bankCard/delBankCard", params, {
			method: "POST",
			contentType: 'application/x-www-form-urlencoded',
			loading: true
		})
	},







}
