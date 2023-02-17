// 子模块moduleA路径：store/modules/moduleA.js 
export default {
	state: {
		socketTask: null,
		websocketData: {}, // 存放从后端接收到的websocket数据
		stroeChange: {}
	},
	getters: {

	},
	mutations: {
		setWebsocketData(state, data) {
			state.stroeChange = data
			// Object.keys(state.websocketData).forEach(function (key) {
			// 	console.log(key)
			// })
			state.websocketData = Object.assign(state.websocketData, data)
		}
	},
	actions: {
		websocketInit({
			state,
			dispatch
		}, url) {
			console.log('websocket开始连接.....！')
			state.socketTast = uni.connectSocket({
				url, // url是websocket连接ip
				success: () => {
					console.log('websocket连接成功！')
				},
				fail: e => {
					console.log('连接失败' + e)
				}
			})
			state.socketTast.onOpen(() => dispatch('websocketOnOpen'))
			state.socketTast.onMessage(res => dispatch('websocketOnMessage', res))
			state.socketTast.onClose(e => dispatch('websocketOnClose'))
			state.socketTast.onError(e => dispatch('websocketOnError'))
		},
		websocketOnOpen({
			commit
		}) {
			console.log('WebSocket连接正常打开中...！')
		},
		// 收到数据
		websocketOnMessage({
			commit
		}, res) {
			// console.log('收到服务器内容：' + res.data)
			if (res.data !== '连接成功') {
				commit('setWebsocketData', (res && JSON.parse(res.data) || null))
			} else {
				console.log('WebSocket重新连接,websocketOnMessage', res.data)
				// uni.showToast({
				// 	title: '重新连接',
				// 	duration: 1000,
				// 	icon: 'none'
				// })
				setTimeout(() => {

					dispatch('websocketInit', 'ws://47.245.34.221:810/ws/market/guest')
				}, 3000)
			}
		},
		websocketOnClose({
			commit,
			dispatch
		}) {
			console.log('WebSocket连接关闭,websocketOnClose')
			console.log('WebSocket重新连接')
			// uni.showToast({
			// 	title: '连接关闭 重新连接',
			// 	duration: 1000,
			// 	icon: 'none'
			// })
			setTimeout(() => {

				let userInfo = uni.getStorageSync("userInfo")
				let param = 'guest'
				if(userInfo){
					param = userInfo.id
				}
				dispatch('websocketInit', `ws://47.245.34.221:810/ws/market/${param}`)
				// dispatch('websocketInit', 'ws://192.168.1.3:810/ws/market')
			}, 3000)
		},
		websocketOnError({
			commit,
			dispatch
		}) {
			// uni.showToast({
			// 	title: 'WebSocket连接错误',
			// 	duration: 1000,
			// 	icon: 'none'
			// })
			console.log('WebSocket连接错误,websocketOnError')

		},
		websocketClose({
			state
		}) {
			if (!state.socketTast) return
			state.socketTast.close({
				success(res) {
					console.log('关闭成功', res)
				},
				fail(err) {
					console.log('关闭失败', err)
				}
			})
		},
		// 发送数据
		websocketSend({
			state
		}, data) {
			uni.sendSocketMessage({
				data,
				success: res => {
					console.log('发送成功', res)
				},
				fail: e => {
					console.log('发送失败', e)
				}
			})
		}
	}
}
