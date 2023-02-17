import request from "@/utils/request.js"

export default {
	// 用户发起币币充值
	recharge(params) {
		return request("/usdttrade/cryptoAsset/income/recharge", params, {
			method: "POST",
			loading: true
		})
	},
	// 查询充值通道接口
	getChannel(params) {
		return request("/usdttrade/tbChannel/getChannel", params, {
			method: "GET",
			loading: true
		})
	},







}
