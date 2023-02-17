<template>
	<view class="app assets ">
		<view class="head" :style="{paddingTop: statusBarHeight+'rpx'}">
			<view class="flex_sp_be m-b-40">
				<view class="cfff">
					{{$t('totalAssets')}}(USDT)
				</view>
				<view class="cfff">
					UUID:{{shownum(getUser.invitationCode)}}
				</view>
				<uni-icons v-if='showEye' type="eye" size="20" @click="showEye=!showEye"></uni-icons>
				<uni-icons v-else type="eye-slash-filled" size="20" @click="showEye=!showEye"></uni-icons>
			</view>
			<view class=" flex_sp_be">
				<view class="">
					<view class="weight700 cfff font-40">

						{{shownum(getFloat((getBalanceOrAssetsData[0].usableAB+getBalanceOrAssetsData[1].usableAB+getBalanceOrAssetsData[2].usableAB+getBalanceOrAssetsData[3].usableAB),4))}}
					</view>
					<view class="cfff font-32">
						{{shownum('≈'+(getFloat((getBalanceOrAssetsData[0].usableABC+getBalanceOrAssetsData[1].usableABC+getBalanceOrAssetsData[2].usableABC+getBalanceOrAssetsData[3].usableABC),2))+' '+currentRegion.regionCode)}}
					</view>
				</view>
				<view class="cfff font-28 flex_start" v-show="current==0"
					@click="routeTo('/pages/other/assets/orderHistory')">
					<uni-icons type="calendar" color="#fff" size="20"></uni-icons>
					<text>{{$t('record')}}</text>
				</view>
				<view class="cfff font-28 flex_start" v-show="current==2"
					@click="routeTo('/pages/other/assets/c2cRecord')">
					<uni-icons type="calendar" color="#fff" size="20"></uni-icons>
					<text>{{$t('record')}}</text>
				</view>
			</view>
		</view>
		<view class=" main">
			<z-tabs ref="tabs" :scroll-count="2" :tabs-style="tabsStyle" bg-color="#12b888" :list="[this.$t('currencyAccount'), this.$t('futuresAccount'), this.$t('legalAccount'), this.$t(
					'trustAccount')]" :current="current" activeColor="#fff" inactiveColor="#333" @change="tabsChange" />
			<!-- <v-tabs v-model="current" :tabs="tabList" activeColor="#fff" @change="tabsChange"></v-tabs> -->

			<view class="content">
				<!-- 	<swiper :current="current" :style="'max-height:'+'100vh;' " @transition="swiperTransition"
					@animationfinish="swiperAnimationfinish"> -->
				<view v-show="current==0">


					<view class="swiper-item">

						<uni-card class="bgfff " margin='0' :is-shadow="false" :border="false">
							<view class="c333">
								<view class="  p-b-20 topp">
									<view class=" m-b-20">
										{{$t('nowAssets')}} (USDT)
									</view>
									<view class="weight700 font-36 m-b-10">
										{{shownum(getFloat(getBalanceOrAssetsData[current].usableAB,4)) }}
									</view>
									<view class="cB3B3B3">
										{{shownum('≈'+getFloat(getBalanceOrAssetsData[current].usableABC,2)+' '+currentRegion.regionCode)}}
									</view>
								</view>
								<view class="flex_sp_be " :class="current==0||current==2?'':'flex_start'">
									<view class="m-t-20" v-show="current==0"
										@click="routeTo('/pages/other/assets/depositDetail')">
										<image class="image50" src="@/static/img/ic_user_center_child_bb_coin.png"
											mode="widthFix">
										</image>
										<text class="m-l-10">{{$t('rechargeMoney')}}</text>
									</view>
									<view class="m-t-20" v-show="current==0"
										@click="routeTo('/pages/other/assets/withdrawDetail')">
										<image class="image50" src="@/static/img/ic_user_center_child_bb_put.png"
											mode="widthFix">
										</image>
										<text class="m-l-10">{{$t('withdrawCoins')}}</text>
									</view>
									<view class="m-t-20" v-show="current==2"
										@click="routeTo('/pages/other/me/serviceCenter')">
										<image class="image50" src="@/static/img/ic_user_center_child_bb_coin.png"
											mode="widthFix">
										</image>
										<text class="m-l-10">{{$t('buyCoins')}}</text>
									</view>
									<view class="m-t-20" v-show="current==2" @click="sellCoins()">
										<image class="image50" src="@/static/img/ic_user_center_child_bb_put.png"
											mode="widthFix">
										</image>
										<text class="m-l-10">{{$t('sellCoins')}}</text>
									</view>
									<view class="m-t-20" @click="routeTo('/pages/other/assets/transfer')">
										<image class="image50" src="@/static/img/ic_user_center_child_transfer.png"
											mode="widthFix">
										</image>
										<text class="m-l-10">{{$t('transfer')}}</text>
									</view>

								</view>
							</view>
						</uni-card>
						<view class="flex_sp_be searchhideSmall">
							<uni-search-bar class="uni-mt-10 search" v-model="currency" radius="5"
								:placeholder="$t('searchCurrency')" clearButton="auto" cancelButton="none" />
							<view class="flex_start m-b-40 m-t-40 ">

								<checkbox-group @change="checkboxChange">
									<label class="flex_start hideSmall-box">
										<checkbox color="#1abb97" value="showPetty" :checked="showPetty[0]"
											style="transform:scale(0.7)" />
										<text class="hideSmall">{{$t('hideSmall')}}</text>

									</label>
								</checkbox-group>
							</view>
						</view>
						<view class="asda" v-for="(item,index) in getBalanceOrAssetsData[0][current]">
							<uni-card
								v-show="(!showPetty[0]||Number(item.amount)>0)&&(currency==''||item.currency.toLowerCase().indexOf(currency.toLowerCase()) >= 0)"
								:key="item.currency" class="bgfff " margin='0' :is-shadow="false" :border="false"
								@click="routeTo('/pages/other/assets/assetsDetail','?item='+JSON.stringify( item))">
								<view class="c333  ">
									<view class="flex_sp_be  ">
										<view class="flex_start">
											<view class="image55">
												<image class="image55 " v-if="!item.defaultSrc"
													:src="'../../../static/trade/'+item.currency+'.png'" mode="widthFix"
													@error="ErrSrc($event, item)">
												</image>
												<image v-else src="../../../static/trade/default.png" />
											</view>

											<view class="font-30  m-l-20">{{item.currency}}</view>

										</view>
										<view class="tar fonth">
											<view class="font-36 weight500">
												{{shownum(item.total)}}
											</view>
											<view class="font-24 cB3B3B3" v-show="item.usableABC">
												{{shownum('≈'+getFloat(item.usableABC||0,2)+' '+currentRegion.regionCode)}}
											</view>
										</view>
									</view>
								</view>
							</uni-card>
						</view>
					</view>
				</view>
				<view v-show="current!=0">


					<view class="swiper-item">

						<uni-card class="bgfff " margin='0' :is-shadow="false" :border="false">
							<view class="c333">
								<view class="  p-b-20 topp">
									<view class=" m-b-20">
										{{$t('nowAssets')}} (USDT)
									</view>
									<view class="weight700 font-36 m-b-10">
										{{shownum(getFloat(getBalanceOrAssetsData[current].usableAB,4)) }}
									</view>
									<view class="cB3B3B3">
										{{shownum('≈'+getFloat(getBalanceOrAssetsData[current].usableABC,2)+' '+currentRegion.regionCode)}}
									</view>
								</view>
								<view class="flex_sp_be " :class="current==0||current==2?'':'flex_start'">
									<view class="m-t-20" v-show="current==0"
										@click="routeTo('/pages/other/assets/depositDetail')">
										<image class="image50" src="@/static/img/ic_user_center_child_bb_coin.png"
											mode="widthFix">
										</image>
										<text class="m-l-10">{{$t('rechargeMoney')}}</text>
									</view>
									<view class="m-t-20" v-show="current==0"
										@click="routeTo('/pages/other/assets/withdrawDetail')">
										<image class="image50" src="@/static/img/ic_user_center_child_bb_put.png"
											mode="widthFix">
										</image>
										<text class="m-l-10">{{$t('withdrawCoins')}}</text>
									</view>
									<view class="m-t-20" v-show="current==2"
										@click="routeTo('/pages/other/me/serviceCenter')">
										<image class="image50" src="@/static/img/ic_user_center_child_bb_coin.png"
											mode="widthFix">
										</image>
										<text class="m-l-10">{{$t('buyCoins')}}</text>
									</view>
									<view class="m-t-20" v-show="current==2" @click="sellCoins()">
										<image class="image50" src="@/static/img/ic_user_center_child_bb_put.png"
											mode="widthFix">
										</image>
										<text class="m-l-10">{{$t('sellCoins')}}</text>
									</view>
									<view class="m-t-20" @click="routeTo('/pages/other/assets/transfer')">
										<image class="image50" src="@/static/img/ic_user_center_child_transfer.png"
											mode="widthFix">
										</image>
										<text class="m-l-10">{{$t('transfer')}}</text>
									</view>

								</view>
							</view>
						</uni-card>
						<view class="flex_sp_be searchhideSmall">
							<uni-search-bar class="uni-mt-10 search" v-model="currency" radius="5"
								:placeholder="$t('searchCurrency')" clearButton="auto" cancelButton="none" />
							<view class="flex_start m-b-40 m-t-40 ">

								<checkbox-group @change="checkboxChange">
									<label class="flex_start hideSmall-box">
										<checkbox color="#1abb97" value="showPetty" :checked="showPetty[0]"
											style="transform:scale(0.7)" />
										<text class="hideSmall">{{$t('hideSmall')}}</text>

									</label>
								</checkbox-group>
							</view>
						</view>
						<template v-for="(item,index) in getBalanceOrAssetsData[current][current]">
							<uni-card
								v-show="(!showPetty[0]||Number(item.amount)>0)&&(currency==''||item.currency.toLowerCase().indexOf(currency.toLowerCase()) >= 0)"
								:key="item.currency" class="bgfff " margin='0' :is-shadow="false" :border="false"
								@click="routeTo('/pages/other/assets/assetsDetail','?item='+JSON.stringify( item))">
								<view class="c333">
									<view class="flex_sp_be  ">
										<view class="flex_start">
											<image class="image55 " v-if="!item.defaultSrc"
												:src="'../../../static/trade/'+item.currency+'.png'" mode="widthFix"
												@error="ErrSrc($event, item)">
											</image>
											<image v-else src="../../../static/trade/default.png" />
											<view class="font-30  m-l-20">{{item.currency}}</view>

										</view>
										<view class="tar fonth">
											<view class="font-36 weight500">
												{{shownum(item.total)}}
											</view>
											<view class="font-24 cB3B3B3" v-show="item.usableABC">
												{{shownum('≈'+getFloat(item.usableABC||0,2)+' '+currentRegion.regionCode)}}
											</view>
										</view>
									</view>
								</view>
							</uni-card>
						</template>
					</view>
				</view>
			</view>
		</view>
		<tabbar index="4"></tabbar>
	</view>
</template>

<script>
	// https://ext.dcloud.net.cn/plugin?id=8308  <z-tabs> 
	import {
		// mapState,
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				showEye: true,
				tabList: [this.$t('currencyAccount'), this.$t('futuresAccount'), this.$t('legalAccount'), this.$t(
					'trustAccount')],
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				tabsStyle: {
					width: '100% ',
					position: 'sticky',
					top: '0rpx',
					paddingTop: this.statusBarHeight + 'rpx',
					zIndex: 999,
				},


				//
				currency: "",
				showPetty: [],
				getBalanceOrAssetsData: [{
					0: [],
					usableABC: 0,
					usableAB: 0,
				}, {
					1: [],
					usableABC: 0,
					usableAB: 0,
				}, {
					2: [],
					usableABC: 0,
					usableAB: 0,
				}, {
					3: [],
					usableABC: 0,
					usableAB: 0,
				}],
				C2CMarketDelayed: [],
				currentRegion: '',
				showwatch: ''
			}
		},
		computed: {
			currencyAccount() {
				return this.$t('currencyAccount')
			},
			stroeChange() {
				return this.$store.state.socket.stroeChange;
			},
			//借助mapGetters生成计算属性：
			...mapGetters('user', ['getUser']),
		},
		watch: {
			currencyAccount() {
				this.tabList = [this.$t('currencyAccount'), this.$t('futuresAccount'), this.$t('legalAccount'),
					this.$t(
						'trustAccount')
				]
			},
			stroeChange: {
				handler: function(newVal, oldVal) {
					if (newVal.C2CMarketDelayed && this.showwatch) {
						this.calculation()
					}
				},
				deep: true,
			},
		},
		created() {
			// console.log(this.getUser, "getUser")
		},
		onHide() {
			this.showwatch = false
		},
		async onShow() {

			if (!uni.getStorageSync('currentRegion')) {

				uni.setStorageSync('currentRegion', {
					exchangeRate: "1",
					id: 16,
					regionCode: "USD",
					regionName: this.$t('USD'),
					type: 1,
				})
			}
			this.showwatch = true
			this.currentRegion = uni.getStorageSync('currentRegion')
			await this.getBalanceOrAssets()
			await this.calculation()
		},
		methods: {
			// withdrawCoins() {
			// 	console.log(this.getUser.certificationStatus, "this.getUser.certificationStatus")
			// 	if (this.getUser.certificationStatus == "0" || this.getUser.certificationStatus == "4") {
			// 		this.$qxPop.show({
			// 			message: this.$t('noCcertification'),
			// 			showTitle: false,
			// 			showConfirmButton: true,
			// 			confirmButtonText: this.$t('confirm'),
			// 			duration: 0,
			// 			success: () => {
			// 				this.routeTo('/pages/other/home/verification')
			// 			}
			// 		})
			// 	} else if (this.getUser.payPassword == "0") {
			// 		this.$qxPop.show({
			// 			message: this.$t('noSetWithdrawalPassword'),
			// 			showTitle: false,
			// 			showConfirmButton: true,
			// 			confirmButtonText: this.$t('confirm'),
			// 			duration: 0,
			// 			success: () => {
			// 				this.routeTo('/pages/other/me/setPayPassword')
			// 			}
			// 		})
			// 	} else {
			// 		this.routeTo('/pages/other/assets/withdrawDetail')
			// 	}
			// },
			sellCoins() {
				if (this.getUser.payPassword == "0") {
					this.$qxPop.show({
						message: this.$t('noSetWithdrawalPassword'),
						showTitle: false,
						showConfirmButton: true,
						confirmButtonText: this.$t('confirm'),
						duration: 0,
						success: () => {
							this.routeTo('/pages/other/me/setPayPassword')
						}
					})
				} else {
					this.routeTo('/pages/other/home/c2cPaymentMethods')
				}
			},
			calculation() {
				if (!this.$store.state.socket.websocketData.C2CMarketDelayed)
					return
				let arr = JSON.parse(JSON.stringify(this.$store.state.socket.websocketData.C2CMarketDelayed));
				this.C2CMarketDelayed = arr.reduce(
					(accumulator, current) => {
						accumulator[current.symbolPretty.split('/')[0]] = current;
						return accumulator;
					}, {}
				);
				if (this.getBalanceOrAssetsData[0][0]) {
					this.getBalanceOrAssetsData.map((AssetsData, Assetsindex) => {
						AssetsData.usableABC = 0
						AssetsData.usableAB = 0
						AssetsData[Assetsindex].map((item) => {
							item.usableABC = typeof(this
								.C2CMarketDelayed[this
									.getval(
										item.currency)]) !== 'undefined' ? Math.floor((
									Number(
										item
										.amount) +
									Number(item.frozenAmount)) * this.currentRegion
								.exchangeRate *
								this.C2CMarketDelayed[this.getval(item.currency)]
								.currentDaysClosePrice *
								10000 / 100) / 100 : 0.00
							item.usableAB = typeof(this
								.C2CMarketDelayed[this
									.getval(
										item.currency)]) !== 'undefined' ? Math.floor((
									Number(
										item
										.amount) +
									Number(item.frozenAmount)) * this.C2CMarketDelayed[this
									.getval(item
										.currency)]
								.currentDaysClosePrice *
								10000) / 100 / 100 : 0.0000
							AssetsData.usableABC += item.usableABC
							AssetsData.usableAB += item.usableAB
						})

					})

				}

			},
			ErrSrc(e, item) {
				this.$set(item, "defaultSrc", true);
				// this.ImgSrc = this.errSrc;
			},
			getval(val) {
				return val
			},
			shownum(num) {
				if (this.showEye) {

					return num
				} else {
					return '******'
				}
			},
			checkboxChange(event) {
				this.showPetty = event.detail.value
				// console.log(event.detail.value, this.showPetty, "event.detail.value");
				// if (event.detail.value.length != 0 && event.detail.value[0] == 'showPetty') {
				// 	// this.showPetty = event.detail.value
				// } else {
				// 	// this.showPetty[0] = ''

				// }
			},
			//tabs通知swiper切换
			tabsChange(index) {
				this.current = index;
			},
			// //swiper滑动中
			// swiperTransition(e) {
			// 	this.$refs.tabs.setDx(e.detail.dx);
			// },
			// //swiper滑动结束
			// swiperAnimationfinish(e) {
			// 	this.current = e.detail.current;
			// 	this.$refs.tabs.unlockDx();
			// },
			getBalanceOrAssets() {
				let params = {
					type: 0, //是	int	类型（0：查询资产，1：查询余额）
					currency: '', //否	string	币种（查询 余额时必传）
					walletType: '', //	否	int	钱包类型（1 币币钱包 2 期货钱包 3 法币钱包 4质押钱包）（查询 余额时必传）
				}
				return this.$api.assets.getBalanceOrAssets(params).then((res) => {
					for (let key in res) {
						this.getBalanceOrAssetsData[key - 1][key - 1] = res[key]

						res[key].map((item) => {

							this.getBalanceOrAssetsData[key - 1].usableABC = 0
							this.getBalanceOrAssetsData[key - 1].usableAB = 0
						})
					}

					// this.getBalanceOrAssetsData[0][0].splice(10)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.asda {
		content-visibility: auto;
	}

	.head {
		padding: 30rpx;
		position: relative;
		height: 400rpx;
		background-color: #12b888;

	}

	.bgfff {
		background-color: #fff;
	}

	.fonth {
		height: 88rpx !important;
	}

	.assets {
		background-color: #f6f6f6;
		min-height: 100vh;
		color: #333;

	}

	.main {
		position: relative;
		top: -250rpx;
		left: 0;
		right: 0;

		/deep/ .z-tabs-list-container {
			min-width: 100vw;

			.z-tabs-list {
				min-width: 100vw;


			}

			.z-tabs-item {
				min-width: 20%;
			}
		}


		// .topp {
		// 	border-bottom: 1rpx solid #b6c4d5 !important;

		// }

		/deep/ .uni-checkbox-input {
			border-radius: 50%;
		}

		.searchhideSmall {
			flex-flow: row nowrap;
		}

		.hideSmall-box {
			flex-flow: row nowrap;
		}

		.search {
			flex: 0 1 48%;

			padding: 0 !important;

			/deep/ .uni-searchbar__box {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-flow: row nowrap;
			}
		}

		.hideSmall {
			word-break: break-all;
			word-wrap: break-word;
		}

	}
</style>
