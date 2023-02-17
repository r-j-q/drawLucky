import request from "@/utils/request.js"
export default {

	// 查询提币限额接口
	getWithdrawalLimite(params) {
		return request("/usdttrade/tbOutFeeRate/getWithdrawalLimite", params, {
			method: "GET",
			loading: true
		})
	},






}
