import request from "@/utils/request.js"

export default {
	// 用户上传充值证明图片
	uploadPrepayProof(params) {
		return request("/tiktok_uploader/uploadPrepayProof", params, {
			method: "POST",
			loading: true,
			IMG_URL: 'IMG_URL'
		})
	},
	// 用户实名认证
	realNameAuthentication(params) {
		return request("/usdttrade/users/realNameAuthentication", params, {
			method: "PUT",
			loading: true,
		})
	},







}
