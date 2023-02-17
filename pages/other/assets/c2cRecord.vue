<template>
	<view class="app page">
		<uni-nav-bar class="nav-bar" statusBar backgroundColor="#f6f6f6" left-icon="left"
			:title="type[currentvalue].text+$t('record')" right-icon="search" @clickLeft="routeTo(1)"
			@clickRight="$refs.popup.open('bottom')">
		</uni-nav-bar>
		<!-- <scroll-view :scroll-top="scrollTop" scroll-y="true" :style="{height:windowHeight+'rpx'}"
			@scrolltolower="lower"> -->
		<view class="content main ">
			<template v-if="currentvalue==0">
				<view class="m-b-20 b-line" v-for="(item, index) in getLegalCurrencyTransactionData.list"
					:key="item.id">

					<view class="flex_sp_be m-b-20 font-30 weight600">
						<text>{{select0[currentvalue]}} {{item.withdrawalBankName}}</text>
						<text class="" v-if="item.status=='0'">{{ select1[item.status] }}</text>
						<text class="green" v-if="item.status=='1'">{{ select1[item.status] }}</text>
						<text class="red" v-if="item.status=='2'">{{ select1[item.status] }}</text>
					</view>
					<view class="flex_sp_be m-b-20">
						<text>{{$t('price')}} {{item.exchangeRate}} {{item.realCurrency}}</text>
						<text>{{item.byTime }}</text>
					</view>
					<view class="flex_sp_be m-b-20">
						<text>{{$t('num')}} {{ item.topUpMoney }} {{item.withdrawalBankName}}</text>
						<text>{{ item.exchangeAmount }} {{item.realCurrency}} </text>
					</view>
					<!-- 	<view class="flex_sp_be m-b-20">
						<text>{{$t('bankName')}} {{item.withdrawalBankName}}</text>
						<text>{{item.withdrawalCardId}}</text>
					</view> -->
					<view class="flex_sp_be m-b-20">
						<text>{{$t('createTime')}} </text>
						<text>{{item.createTime}}</text>
					</view>
				</view>
			</template>
			<template v-else>
				<view class="m-b-20 b-line" v-for="(item, index) in getLegalCurrencyTransactionData.list" :key="index">

					<view class="flex_sp_be m-b-20 font-30 weight600">
						<text>{{select0[currentvalue]}} {{item.currency}}</text>
						<text class="" v-if="item.status=='0'">{{ select1[item.status] }}</text>
						<text class="green" v-if="item.status=='1'">{{ select1[item.status] }}</text>
						<text class="red" v-if="item.status=='2'">{{ select1[item.status] }}</text>
					</view>
					<view class="flex_sp_be m-b-20">
						<text>{{$t('price')}} {{item.exchangeRate}} {{item.realCurrency}}</text>
						<text>{{item.byTime }}</text>
					</view>
					<view class="flex_sp_be m-b-20">
						<text>{{$t('num')}} {{ item.withdrawalAmount }} {{item.currency}}</text>
						<text>{{ item.exchangeAmount }} {{item.realCurrency}} </text>
					</view>
					<view class="flex_sp_be m-b-20">
						<text>{{$t('bankName')}} {{item.withdrawalBankName}}</text>
						<text>{{item.withdrawalCardId}}</text>
					</view>
				</view>
			</template>
			<loadMore :total="getLegalCurrencyTransactionData.total" :nowPage="params.page"
				:pages="getLegalCurrencyTransactionData.pages"></loadMore>
		</view>
		<!-- </scroll-view> -->

		<uni-popup ref="popup" :is-mask-click="false">
			<view class="popup">
				<view class="weight700 tac m-b-20">
					{{$t('screen')}}
				</view>
				<view class="m-b-20">
					{{$t('account')}}
				</view>
				<view class="m-b-40">

					<uni-data-checkbox mode="tag" v-model="typeradio" :localdata="type"></uni-data-checkbox>
				</view>
				<view class="m-b-40">

					<uni-data-checkbox mode="tag" v-model="resultStatusradio" :localdata="resultStatus">
					</uni-data-checkbox>
				</view>
				<view class="flex_center">
					<view class="bu bu1" @click="rest()">
						{{$t('reset')}}
					</view>
					<view class="bu bu2" @click="confirm(current.value)">
						{{$t('confirm')}}
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentvalue: 0,
				scrollTop: 0,
				typeradio: 0,
				resultStatusradio: '',
				type: [{
					text: this.$t('buy'),
					value: 0
				}, {
					text: this.$t('sell'),
					value: 1
				}],
				resultStatus: [{
					text: this.$t('all'),
					value: ''
				}, {
					text: this.$t('processing'),
					value: 0
				}, {
					text: this.$t('success'),
					value: 1
				}, {
					text: this.$t('fail'),
					value: 2
				}],
				current: {
					value: '',
					text: ''
				},

				//
				params: {
					page: 1, //是 int 页码
					pageSize: 20, //是 int 每页条数
					type: 1, //是 int 交易类型（ 0： 充币， 1： 提币）
					status: 1, //是 
					resultStatus: '', //是 
				},
				select0: [this.$t('buyCoins'),
					this.$t('sellCoins'),
				],
				select1: [this.$t('processing'),
					this.$t('success'),
					this.$t('fail'),
				],
				getLegalCurrencyTransactionData: '',

			}
		},

		onReachBottom(val) {
			this.lower()
		},


		onLoad(options) {
			if (options.c2cRecord == 1) {
				this.typeradio = 1
				this.params.type = 1
			} else {
				this.typeradio = 0
				this.params.type = 0
			}
			this.getLegalCurrencyTransaction()
		},
		methods: {
			rest() {
				this.current = {
					value: '',
					text: ''
				}
				this.params = {
					page: 1, //是 int 页码
					pageSize: 20, //是 int 每页条数
					type: 0,
					status: 1, //
					resultStatus: '', //
				}
				this.typeradio = 0
				this.resultStatusradio = ''
				this.$refs.popup.close()
				this.getLegalCurrencyTransaction()
			},
			confirm(value) {

				this.params = {
					page: 1, //是 int 页码
					pageSize: 20, //是 int 每页条数
					type: this.typeradio,
					status: 1, //
					resultStatus: this.resultStatusradio, //
				}
				this.$refs.popup.close()
				this.getLegalCurrencyTransaction()
			},
			lower(e) {
				this.params.page++
				if (this.params.page <= this.getLegalCurrencyTransactionData.pages) {

					this.getLegalCurrencyTransaction('push')
				}
			},

			getLegalCurrencyTransaction(pushtype, type = "", resultStatus = "") {
				if (type != '') {
					this.params.page = 1
					this.params.type = type
				}
				if (resultStatus != '') {
					this.params.page = 1
					this.params.resultStatus = resultStatus

				}
				this.$api.c2cSale.getLegalCurrencyTransaction(this.deleteInvalidParam(this.params)).then(
					res => {
						console.log('res', res);
						if (pushtype) {

							this.getLegalCurrencyTransactionData.list.push(...res.list)
						} else {
							this.getLegalCurrencyTransactionData = res

						}
						this.currentvalue = this.params.type
					}).catch(err => {
					this.currentvalue = this.params.type
				})

			},
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		background-color: #f6f6f6;
		min-height: 100vh;
	}

	.main {
		padding-top: 30rpx;
	}

	.scroll {
		height: calc(100vh - 90rpx);
	}

	.popup {
		padding: 40rpx 30rpx 100rpx 30rpx;
		background-color: #fff;
		overflow: hidden;
		border-top-right-radius: 20rpx;
		border-top-left-radius: 20rpx;
		color: #333;

		/deep/ .is--tag {
			border: 2px solid transparent !important;

		}

		/deep/ .is-checked {
			border: 2px solid #1abb97 !important;

			.checklist-text {
				color: #000 !important;

			}

			background-color: #f5f5f5 !important;
		}

		.bu {
			flex: 0 1 48%;
		}

		.bu1 {
			border-radius: 8rpx;
			text-align: center;
			height: 60rpx;
			line-height: 60rpx;
			background-color: #f6f6f6;
			margin-right: 20rpx !important;
		}

		.bu2 {
			background: #1abb97;
			border-radius: 8rpx;
			text-align: center;
			height: 60rpx;
			line-height: 60rpx;
		}
	}
</style>
