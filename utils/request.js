import Vue from "@/main.js"
import NEV from "@/config/config.js"
// import logout from "@/utils/logout.js"
import store from '@/store'
import {
	langTranslate, //语言标识符转义
} from '@/utils/language.js'
import {
	removeStorageAPI,
	routeTo,
} from '@/utils/common.js'
const defauls = {
	method: "POST",
	loading: true
}

// 是否显示重新登录
export let isRelogin = {
	show: false
};
// 请求拦截操作就放在return行之前，响应拦截操作就放在success()、 fail() 、 complete()函数体里。
// 全局请求封装
export default (path, data = {}, config = defauls) => {
	/**
	config={
		method: "POST",
		contentType: 'application/x-www-form-urlencoded',
		loading: true
	}
	***/
	// console.log('%c请求拦截：', ' background:orange', data);
	const token = uni.getStorageSync("token") ? uni.getStorageSync("token") : '';
	// const token = store.state.user.token;
	// const language = uni.getLocale() == 'zh-Hans' ? 'zh-CN' : langTranslate(uni.getLocale()); //暂时就 简体中文
	const language = langTranslate(uni.getLocale()).interface; //暂时就 简体中文
	// const Authorization = token ? `Bearer ${uni.getStorageSync("token")}` : "";

	if (config.loading) {
		// uni.showLoading({
		// 	title: "",
		// 	mask: true
		// });
	};
	store.commit('system/show_loading', true)
	return new Promise((resolve, reject) => {
		uni.request({
			header: {
				'content-type': config.contentType ? config.contentType :
					'application/json;charset:utf-8',
				language: language,
				token
			},
			timeout: 30000,
			url: !config.IMG_URL ? NEV.BASE_URL + path : NEV.IMG_URL + path,
			method: config.method,
			data,
			success(response) {
				uni.hideLoading();

				// console.log('%c响应拦截：', ' background:green', response);
				if (response.data.status === 200) {
					// 成功
					if (response.data.data === null) {
						(async () => {

							await uni.showToast({
								icon: "none",
								duration: 2000,
								title: response.data.description
							});
							let Timeout = await setTimeout(() => {
								resolve(response.data.data);
								clearTimeout(Timeout)
							}, 2000)
						})()


					} else {
						resolve(response.data.data);

					}

				} else {
					uni.showToast({
						icon: "none",
						duration: 4000,
						title: response.data.description || response.data.error
					});
					switch (response.data.status) {

						case 404:
							// 未找到
							reject(response.data);
							break;
						case 406:
							if (!isRelogin.show) {
								isRelogin.show = true;
								console.log('账号信息  token过期');
								// 账号信息  token过期
								removeStorageAPI()
								store.commit('user/LOGOUT')
								if (uni.getSystemInfoSync().platform != 'windows') {
									console.log('跳转H5 ')
									routeTo('/pages/user/login/login')
								} else {
									console.log('跳转PC ')
									routeTo('/pages/pc/src/login/login')
								}
								isRelogin.show = false;
								// resolve(response.data);
							}
							break;
						case 407:
							// 账号未激活
							// resolve(response.data);
							break;
						case 409:
							uni.hideToast()
							//系统维护
							let returnData = {
								description: response.data.data,
								msg: response.data.msg,
								status: response.data.status,

							}
							Vue.app.$qxPop.show({
								message: returnData.description,
								showTitle: false,
								showConfirmButton: true,
								confirmButtonText: Vue.app.$t('confirm'),
								duration: 0,
								success: () => {
									if (location.hash != '#/pages/user/login/login') {
										uni.redirectTo({
											url: '/pages/user/login/login'
										});

									}

								}
							})

							// 系统维护中
							// resolve(response.data);
							break;
						case 500:
							// 异常

							reject(response.data);
							break;
						default:
							reject(response.data);
							break;
					}
				}

			},
			fail(err) {
				uni.hideLoading();
				uni.showToast({
					icon: "none",
					title: Vue.app.$t('serverResponseFailed')
				});
				console.error(err);
				reject(err);
			},
			complete() {
				store.commit('system/show_loading', false)
				// uni.hideLoading();
			}
		});
	});
};
