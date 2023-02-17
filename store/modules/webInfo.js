import login from '@/api/login.js';
export default {
	namespaced: true, //开启命名空间
	state: {
		siteConfiguration: {}, //网站信息  站点配置

	},
	getters: {},
	mutations: {
		// 设置网站信息

		SET_WEBINFO: (state, siteConfiguration) => {
			state.siteConfiguration = siteConfiguration
		}
	},
	actions: {
		// 获取站点信息
		GET_WEBINFO({
			commit,
			state
		}) {
			return new Promise((resolve, reject) => {
				login.getSiteConfiguration()
					.then((res) => {
						commit('SET_WEBINFO', res);
						uni.setStorageSync('WEBINFO', res)
						resolve();
					})
					.catch((error) => {
						console.log(456456)
						reject(error);
					});
			});
		},



	}
}
