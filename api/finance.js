import request from "@/utils/request.js"

export default {
	//查询法币交易记录接口
	getLegalCurrencyTransaction(params) {
		return request("/usdttrade/cryptoAsset/income/getLegalCurrencyTransaction", params, {
			method: "GET",
			loading: true
		})
	},
	//分页查询用户划转记录接口
	getTransferRecords(params) {
		return request("/usdttrade/cryptoAsset/getTransferRecords", params, {
			method: "POST",
			loading: true
		})
	},








}
