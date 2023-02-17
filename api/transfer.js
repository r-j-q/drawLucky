import request from "@/utils/request.js"

export default {
	//用户发起币币划转
	transfer(params) {
		return request("/usdttrade/cryptoAsset/transfer", params, {
			method: "POST",
			loading: true
		})
	},
	//查询余额/查询资产接口
	getBalanceOrAssets(params) {
		return request("/usdttrade/tbWallet/getBalanceOrAssets", params, {
			method: "POST",
			loading: true
		})
	},







}
