import request from "@/utils/request.js"

export default {
	// 查询质押产品接口
	getPledgeProducts(params) {
		return request("/usdttrade/pledgeProducts/getPledgeProducts", params, {
			method: "GET",
			loading: true
		})
	},







}
