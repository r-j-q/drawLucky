import request from "@/utils/request.js"

export default {
	//用户发起币币出售
	sell(params) {
		return request("/usdttrade/cryptoAsset/outcome/sell", params, {
			method: "POST",
			loading: true
		})
	},
	//查询银行卡接口
	getUserBankCard(params) {
		return request("/usdttrade/bankCard/getUserBankCard", params, {
			method: "POST",
			loading: true
		})
	},
	//查询支持提币/卖币的币种接口
	getCurrency(params) {
		return request("/usdttrade/tbOutFeeRate/getCurrency", params, {
			method: "GET",
			loading: true
		})
	},
	//查询法币交易记录接口
	getLegalCurrencyTransaction(params) {
		return request("/usdttrade/cryptoAsset/income/getLegalCurrencyTransaction", params, {
			method: "GET",
			loading: true
		})
	},







}
