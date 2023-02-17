import request from "@/utils/request.js"

export default {
	// 用户发起币币提款
	withdrawal(params) {
		return request("/usdttrade/cryptoAsset/outcome/withdrawal", params, {
			method: "POST",
			loading: true
		})
	},

	// 查询银行卡接口
	getUserBankCard(params) {
		return request("/usdttrade/bankCard/getUserBankCard", params, {
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
	// 查询余额/查询资产接口
	getBalanceOrAssets(params) {
		return request("/usdttrade/tbWallet/getBalanceOrAssets", params, {
			method: "POST",
			loading: true
		})
	},







}
