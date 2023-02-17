import request from "@/utils/request.js"

export default {
	// addUserBankCard(params) {
	// 	return request("/usdttrade/bankCard/addUserBankCard", params, {
	// 		method: "POST",
	// 		loading: true
	// 	})
	// },
	// 获取交易对（币币/期货）历史K线数据
	getUsdttradeKlineHistory(params) {
		return request("/usdttrade/kline/history", params, {
			method: "GET",
			loading: true
		})
	},
	// 删除银行卡账号接口
	// delBankCard(params) {
	// 	return request("/usdttrade/bankCard/delBankCard", params, {
	// 		method: "POST",
	// 		contentType: 'application/x-www-form-urlencoded',
	// 		loading: true
	// 	})
	// },







}
