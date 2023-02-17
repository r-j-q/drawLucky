import request from "@/utils/request.js"

export default {
	// 获取交易对（币币/期货）历史K线数据
	getKlineHistory(params) {
		return request("/usdttrade/kline/history", params, {
			method: "GET",
			loading: true
		})
	},







}
