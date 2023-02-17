<script>
	export default {
		async created() {
			await this.getRegion()
		},
		onLaunch() {

			var pages = getCurrentPages();
			var page = pages[pages.length - 1];
			// #ifdef APP-PLUS
			// var currentWebview = page.$getAppWebview();
			// console.log(currentWebview.id); //获得当前webview的id
			// conssole.log(currentWebview.__uniapp_route, "__uniapp_route"); //查询当前webview是否可见
			// #endif
			// #ifndef APP-PLUS
			if (uni.getSystemInfoSync().platform != 'windows') {
				console.log('跳转H5')

				if (location.hash == '#/pages/pc/src/home/home' || location.hash == '#/') {
					this.routeTo('/pages/tabbar/home/home')
				}
			} else {
				console.log('跳转PC')
				if (location.hash == '#/pages/tabbar/home/home') {
					this.routeTo('/pages/pc/src/home/home')
				}

			}
			// #endif
			// #ifdef APP-PLUS
			console.log('#ifdef APP-PLUS PC')
			this.routeTo('/pages/tabbar/home/home', 'reLaunch')
			// #endif
			console.log('App Launch')

			let userInfo = uni.getStorageSync("userInfo")
			let param = 'guest'
			if (userInfo) {
				param = userInfo.id
			}
			this.$store.dispatch('websocketInit', `ws://47.245.34.221:810/ws/market/${param}`)
			this.$store.dispatch('user/SET_LANGUAGE')
			this.$store.dispatch('webInfo/GET_WEBINFO')
			this.$store.dispatch('user/SET_LANGUAGE')


		},
		onShow: function() {

			console.log('App Show', uni.getSystemInfoSync().platform)
			this.$store.dispatch('user/GETUSER')

		},
		onHide: function() {
			console.log('App Hide')
		},
		computed: {
			i18n() {
				return this.$store.state.user.languageInfo.value
			}
		},
		watch: {
			i18n(val) {
				if (val) {
					this.$i18n.locale = val
					console.log(val, "this.$i18n.locale")
				}
			}
		},
		methods: {
			getRegion() {
				let params = {
					type: 1, //	是	int	类型
					page: 1, //	是	int	页码
					pageSize: 1000, //	是	int	每页条数
				}
				return this.$api.changeValuation.getRegion(params).then(res => {

					uni.setStorageSync('getRegion', res.list)
					if (!uni.getStorageSync('currentRegion')) {

						res.list.map((item) => {
							if (item.regionCode == 'USD') {
								uni.setStorageSync('currentRegion', item)
								console.log("没有获取到currentRegion，将设置默认汇率USD");
								return
							}

						})
					} else {
						res.list.map((item) => {
							if (item.regionCode == uni.getStorageSync('currentRegion').regionCode) {
								uni.setStorageSync('currentRegion', item)
								return
							}

						})
					}
					this.$store.dispatch('user/GETUSER')
				})
			},
		}
	}
</script>
<style>
	/* @import '@/node_modules/element-ui/lib/theme-chalk/index.css'; */
</style>
<style lang="scss">
	/*每个页面公共css */
	@import './App.css';

	// @import './node_modules/element-ui/lib/theme-chalk/index.css';
	.buttonp /deep/ .btn-next {
		height: 30px !important;
		line-height: 30px !important;
		border: none !important;
	}

	.buttonp /deep/ .btn-prev {
		height: 30px !important;
		line-height: 30px !important;
		border: none !important;
	}

	.page {
		background-color: #eef1f5;
		min-height: 100vh;

		button,
		input,
		select,
		textarea {
			font-size: 100%;
			outline: none;
		}



		// blockquote,
		// body,
		// button,
		// dd,
		// dl,
		// dt,
		// fieldset,
		// form,
		// h1,
		// h2,
		// h3,
		// h4,
		// h5,
		// h6,
		// hr,
		// input,
		// legend,
		// li,
		// ol,
		// p,
		// pre,
		// td,
		// textarea,
		// th,
		// ul {
		// 	margin: 0;
		// 	padding: 0;
		// }
	}

	.sendend {
		background-color: transparent !important;
		border: none !important;
		color: #999 !important;
	}

	.sendend::after {
		border: none !important;
	}

	.app {
		font-size: 24rpx;

		/deep/ .uni-easyinput__content-input {
			height: 80rpx !important;
		}

		/deep/ .uni-navbar__header-btns-right {
			.uni-icons.uniui-search {
				margin-right: 10rpx;
			}
		}

		// /deep/ .uni-body {
		// 	overflow: visible !important;
		// }

		.input-box {
			background-color: #f6f6f6;
			padding: 0 10rpx;
			border-radius: 8rpx;
			width: auto !important;

			/deep/ .uni-easyinput__content {
				background-color: #f6f6f6 !important;
			}
		}

		/deep/ .uni-forms-item {
			// margin-bottom: 0rpx !important;

			.uni-forms-item__label {
				padding-bottom: 0rpx !important;
				line-height: 1 !important;
				height: 40rpx
			}
		}

		// font-family: DINPro-Medium;
		// font-style: normal;
	}


	.popup-select {
		overflow: auto;
		padding: 30rpx;
		background-color: #fff;
		border-top-left-radius: 40rpx;
		border-top-right-radius: 40rpx;
		max-height: 60vh;

		.popuplabel {
			line-height: 100rpx;
		}
	}

	.listselect {
		background-color: #f6f6f6 !important;
		border: 1px solid #f6f6f6 !important;
		border-radius: 4px !important;
		overflow: hidden !important;

		/deep/ .uni-list-item {
			background-color: #f6f6f6 !important;
		}

		/deep/ .container--right {
			padding: 19rpx 30rpx !important;
		}

		.placeholderItem {
			color: #999;
			font-size: 12px;
		}
	}

	.content {
		padding: 0rpx 30rpx;
	}

	.w100 {
		width: 100%;
	}

	.b-line {
		border-bottom: 1rpx solid rgba(182, 196, 213, 0.2) !important;

	}


	.footFixedButton {
		position: fixed;
		bottom: 20rpx;
		width: calc(100% - 60rpx);
	}

	.green {
		color: #12b887;
	}

	.red {
		color: #e93f4f;
	}

	// font-size
	.font-40 {
		font-size: 40rpx;
	}

	.font-36 {
		font-size: 36rpx;
	}

	.font-32 {
		font-size: 32rpx;
	}

	.font-30 {
		font-size: 30rpx;
	}

	.font-28 {
		font-size: 28rpx;
	}

	.font-26 {
		font-size: 26rpx;
	}

	.font-24 {
		font-size: 24rpx;
	}

	.weight700 {
		font-weight: 700;
	}

	.weight600 {
		font-weight: 600;
	}

	.weight500 {
		font-weight: 500;
	}

	.weight400 {
		font-weight: 400;
	}

	.weight300 {
		font-weight: 300;
	}

	.weight200 {
		font-weight: 200;
	}

	.weight100 {
		font-weight: 100;
	}


	/* 间距 */
	/* top */
	.m-t-40 {
		margin-top: 40rpx !important;
	}

	.m-t-20 {
		margin-top: 20rpx !important;
	}

	.m-t-10 {
		margin-top: 10rpx !important;
	}

	/* bottom */
	.m-b-40 {
		margin-bottom: 40rpx !important;
	}

	.m-b-20 {
		margin-bottom: 20rpx !important;
	}

	.m-b-10 {
		margin-bottom: 10rpx !important;
	}

	/* left */
	.m-l-20 {
		margin-left: 20rpx !important;
	}

	.m-l-10 {
		margin-left: 10rpx !important;
	}

	/* padding-bottom */
	.p-b-40 {
		padding-bottom: 40rpx !important;
	}

	.p-b-20 {
		padding-bottom: 20rpx !important;
	}

	.p-b-10 {
		padding-bottom: 10rpx !important;
	}

	// padding-top
	.p-t-40 {
		padding-top: 40rpx !important;
	}

	/* 字体颜色 */
	.cfff {
		color: #fff;
	}

	.cB3B3B3 {
		color: #B3B3B3;
	}

	.c333 {
		color: #333;
	}

	.c999 {
		color: #999;
	}

	.c1abb97 {
		color: #1abb97;
	}

	.c666 {
		color: #666666;
	}

	// image大小
	.image20 {
		width: 20rpx;
		height: 20rpx;
		vertical-align: middle;
	}

	.image25 {
		width: 25rpx;
		height: 25rpx;
		vertical-align: middle;
	}

	.image30 {
		width: 30rpx;
		height: 30rpx;
		vertical-align: middle;
	}

	.image40 {
		width: 40rpx;
		height: 40rpx;
		vertical-align: middle;
	}

	.image50 {
		width: 50rpx;
		height: 50rpx;
		vertical-align: middle;
	}

	.image55 {
		width: 55rpx;
		height: 55rpx;
		vertical-align: middle;
	}

	.image60 {
		width: 60rpx;
		height: 60rpx;
		vertical-align: middle;
	}

	.button {
		color: rgb(255, 255, 255);
		background-color: #1abb97;
		font-size: 24rpx;
		border: none;
		overflow: hidden;
		height: 80rpx;
		line-height: 80rpx;
	}

	.forms-label {
		padding-bottom: 8px;

		.danger {
			font-size: 12px;
			color: #f56c6c;

			.primary {
				color: #1abb97;
			}
		}
	}
</style>
