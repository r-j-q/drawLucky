import register from '@/api/register.js'
export default {
	namespaced: true, //开启命名空间
	state: {
		timeCode: null,
		timeNum: 5,
		timeStats: false,
		timeCode1: null,
		timeNum1: 5,
		timeStats1: false,
		loading: false, //正在请求 用于分页
	},

	mutations: {
		// 验证码倒计时---定时器
		TIME_CODE: (state, timeCode) => {


			state.timeCode = timeCode;

		},
		// 验证码倒计时---定时器
		TIME_CODE1: (state, timeCode1) => {


			state.timeCode1 = timeCode1;

		},
		// 验证码倒计时
		TIME_NUM: (state, timeNum) => {


			state.timeNum = timeNum;

		},
		// 验证码倒计时
		TIME_NUM1: (state, timeNum1) => {


			state.timeNum1 = timeNum1;

		},
		// 验证码发送状态
		TIME_STATS: (state, timeStats) => {


			state.timeStats = timeStats;

		},
		// 验证码发送状态
		TIME_STATS1: (state, timeStats1) => {


			state.timeStats1 = timeStats1;

		},
		show_loading: (state, loading) => {
			state.loading = loading
		}
	},
	actions: {

		oninpCode({
			commit,
			state
		}, params) {
			if (state.timeCode != null || state.timeStats)
				return
			commit('TIME_STATS', true)
			commit('TIME_NUM', 60)
			commit('TIME_CODE', setInterval(() => {
				commit('TIME_NUM', state.timeNum - 1)
				if (state.timeNum <= 0) {
					clearTimeout(state.timeCode)
					commit('TIME_CODE', null)
					commit('TIME_NUM', 60)
				}
			}, 1000))
			register.getVerificationCode(params).then(res => {
				commit('TIME_NUM', res.date)
				commit('TIME_STATS', false)
			}).catch(err => {
				clearTimeout(state.timeCode)
				commit('TIME_CODE', null)
				commit('TIME_NUM', '')
				commit('TIME_STATS', false)
			})

		},
		oninpCode1({
			commit,
			state
		}, params) {
			if (state.timeCode1 != null || state.timeStats1)
				return
			commit('TIME_STATS1', true)
			commit('TIME_NUM1', 60)
			commit('TIME_CODE1', setInterval(() => {
				commit('TIME_NUM1', state.timeNum1 - 1)
				if (state.timeNum1 <= 0) {
					clearTimeout(state.timeCode1)
					commit('TIME_CODE1', null)
					commit('TIME_NUM1', 60)
				}
			}, 1000))
			register.getVerificationCode(params).then(res => {
				commit('TIME_NUM1', res.date)
				commit('TIME_STATS1', false)
			}).catch(err => {
				clearTimeout(state.timeNum1)
				commit('TIME_CODE1', null)
				commit('TIME_NUM1', '')
				commit('TIME_STATS1', false)
			})

		}

	}
}
