import request from "@/utils/request.js"

export default {
	//查询质押产品接口
	getPledgeProducts(params) {
		return request("/usdttrade/pledgeProducts/getPledgeProducts", params, {
			method: "GET",
			loading: true
		})
	},
	//查询质押记录接口
	getPledgeRecords(params) {
		return request("/usdttrade/pledgeRecords/getPledgeRecords", params, {
			method: "GET",
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
	//查询质押统计数据接口
	getPledgeStatistics(params) {
		return request("/usdttrade/pledgeRecords/getPledgeStatistics", params, {
			method: "GET",
			loading: true
		})
	},

	//用户发起质押
	hold(params) {
		return request("/usdttrade/pledgeRecords/hold", params, {
			method: "POST",
			loading: true
		})
	},
	//用户发起质押赎回，返还本金
	redemption(params) {
		return request("/usdttrade/pledgeRecords/redemption", params, {
			method: "POST",
			loading: true
		})
	},







}
