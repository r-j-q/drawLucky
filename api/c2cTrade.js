import request from "@/utils/request.js"

export default {
	// 查询余额/查询资产接口
	getBalanceOrAssets(params) {
		return request("/usdttrade/tbWallet/getBalanceOrAssets", params, {
			method: "POST",
			loading: true
		})
	},







}
