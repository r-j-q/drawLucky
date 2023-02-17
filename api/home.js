import request from "@/utils/request.js"

export default {
	// 查询公告接口
	getWebSiteAnnouncement(params) {
		return request("/usdttrade/announcement/getWebSiteAnnouncement", params, {
			method: "GET",
			loading: true
		})
	},
	// 查询首页轮播图接口
	getImages(params) {
		return request("/usdttrade/images/getImages", params, {
			method: "GET",
			loading: true
		})
	},





}
