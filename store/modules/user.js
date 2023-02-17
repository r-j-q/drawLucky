import {
	routeTo,
	removeStorageAPI,

} from '@/utils/common.js'
import {
	langTranslate,

} from '@/utils/language.js'
import login from "@/api/login.js"
export default {
	namespaced: true, //开启命名空间
	state: {
		headPortrait: '', //登录后返回的用户token
		token: '', //登录后返回的用户token
		email: '',
		id: '',
		certificationStatus: '',
		invitationCode: '',
		nickname: '',
		payPassword: '',
		realName: '',
		realRegionCode: '',
		username: '',
		vipLevel: '',
		languageInfo: {
			// 默认
			value: 'en', //前端组件对应的标识符||或者i18n对应的内置文件名称
			interface: 'en-US', //后端接口传值标识符
			name: 'English', //语言名称
			image: '/static/language/0.png', //语言国旗
			checked: 'true'
		},
		realRegionobj: '', // 选择地区号临时存储
	},
	getters: {
		getUser(state) {
			if (state.token) {

				return state;
			} else {
				console.log("getters获取失败，未登录，关闭所有页面reLaunch，前往登录")

				if (uni.getSystemInfoSync().platform != 'windows') {
					console.log('跳转H5login')
					routeTo('/pages/user/login/login')
				} else {
					console.log('跳转PClogin')
					routeTo('/pages/pc/src/login/login')

				}
				return false;

			}
		}
	},
	mutations: {
		// 设置登录信息
		USER_INFO: (state, userInfo) => {
			uni.setStorageSync("token", userInfo.token)
			uni.setStorageSync("userInfo", userInfo)
			let getRegion = uni.getStorageSync('getRegion')
			if (getRegion) {

				getRegion.map((item) => {
					if (item.regionCode == userInfo.pricingMethod) {
						uni.setStorageSync("currentRegion", item)
						return
					}
					if (userInfo.pricingMethod == '' || userInfo.pricingMethod == null) {
						return
					}
				})
			}
			for (let key in userInfo) {
				state[key] = userInfo[key];
			}

		},
		USER_INFO_pricingMethod: (state, pricingMethod) => {
			state.pricingMethod = pricingMethod
		},
		LANGUAGE_INFO: (state, language) => {
			state.languageInfo = language
		},
		LOGOUT: (state) => {
			removeStorageAPI()
			for (let key in state) {
				if (key != 'languageInfo') {

					state[key] = '';
					console.log(state[key], "state." + key);
				}
			}
			if (uni.getSystemInfoSync().platform != 'windows') {
				console.log('跳转H5login')
				routeTo('/pages/user/login/login', 'reLaunch')
			} else {
				console.log('跳转PClogin')
				routeTo('/pages/pc/src/login/login', 'reLaunch')

			}

		},
		// 选择地区号临时存储
		setrealRegionobj(state, realRegionobj) {
			state.realRegionobj = realRegionobj
		}
	},
	actions: {
		// 读取缓存用户登录信息
		GETUSER({
			commit
		}) {
			let userInfo = uni.getStorageSync('userInfo')
			// console.log(userInfo, "GETUSER");
			commit('USER_INFO', userInfo)

		},
		// 设置系统语言
		SET_LANGUAGE({
			commit
		}, locale) {
			console.log(locale, "locale")
			let language
			if (locale) {
				if (Object.prototype.toString.call(locale) === '[object Object]') {
					language = locale

					console.log(language, '[object Objec')
				} else {
					language = langTranslate(locale)

					console.log(language, locale, langTranslate(locale), 'uni.setLocale')
				}
				console.log(language.value, 'language.valuelanguage.valuelanguage.valuelanguage.valuelanguage.value')
				uni.setLocale(language.value)

			} else {
				console.log(uni.getSystemInfoSync().language, "语言对了吗");
				language = uni.getStorageSync('LANGUAGE') || langTranslate(uni.getSystemInfoSync().language)
				uni.setLocale(language.value)
			}
			uni.setStorageSync("LANGUAGE", language)
			commit('LANGUAGE_INFO', language)
		},
		GET_USERINFO({
			commit,
			state
		}, data) {
			// setTimeout(() => {
			return login.userInfo().then(res => {
				console.log(res, state.token)
				commit('USER_INFO', Object.assign(res, {
					token: state.token
				}))
				routeTo(data || 1)
			})
			// }, 2000)
		}

	}
}
