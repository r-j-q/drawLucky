import request from "@/utils/request.js"

export default {
	// 查询地区/币种接口
	getRegion(params) {
		return request("/usdttrade/tbRegion/getRegion", params, {
			method: "GET",
			loading: true
		})
	},
	// 查询地区/币种接口
	updateUserPricingMethod(params) {
		return request("/usdttrade/users/updateUserPricingMethod", params, {
			method: "PUT",
			loading: true
		})
	},







}
