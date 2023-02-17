import request from "@/utils/request.js"

export default {
	// 分页查询账单接口
	getBills(params) {
		return request("/usdttrade/tBBills/getBills", params, {
			method: "GET",
			loading: true
		})
	},






}
