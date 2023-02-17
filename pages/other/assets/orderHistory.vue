<template>
	<view class="app page">
		<uni-nav-bar class="nav-bar" statusBar backgroundColor="#f6f6f6" left-icon="left"
			:title="select2[currentvalue]+$t('record')" right-icon="search" @clickLeft="routeTo(1)"
			@clickRight="$refs.popup.open('bottom')">
		</uni-nav-bar>
		<!-- <scroll-view :scroll-top="scrollTop" scroll-y="true" :style="{height:windowHeight+'rpx'}"
			@scrolltolower="lower"> -->
		<view class="content main ">
			<template v-if="currentvalue==0">
				<view class="m-b-20 b-line" v-for="(item, index) in getLegalCurrencyTransactionData.list"
					:key="item.id">
					<view class="flex_sp_be m-b-20 font-28">
						<view class="">

							<text class="c999">{{select2[item.withdrawalCardType]}}</text>
							<text class="m-l-20">{{item.withdrawalBankName}}</text>
						</view>
						<text class="font-28" v-if="item.status=='0'">{{ select0[item.status] }}</text>
						<text class="  green font-28" v-if="item.status=='1'">{{ select0[item.status] }}</text>
						<text class="  red font-28" v-if="item.status=='2'">{{ select0[item.status] }}</text>
					</view>
					<view class="flex_sp_be m-b-20 ">
						<text class="c999">{{$t(('money'))}}</text>
						<view class=" flex_start font-28">
							<text class=" ">{{ item.status==1?item.payAmount:item.topUpMoney }} </text>
							<text class="m-l-10">{{item.withdrawalBankName}}</text>
						</view>

					</view>

					<view class="flex_sp_be m-b-20 c999">
						<text class="c999">{{$t('transferAddress')}}</text>
						<text>{{ item.address }}</text>
					</view>
					<view class="flex_sp_be m-b-20 c999">
						<text class="c999">{{$t('createTime')}}</text>
						<text>{{item.createTime}}</text>
					</view>
					<view class="flex_sp_be m-b-20 c999">
						<text class="c999">{{$t('confirmTime')}}</text>
						<text>{{item.accountTime}}</text>
					</view>
					<view class="flex_sp_be m-b-20 c999">
						<text class="c999">{{$t(('note'))}}</text>
						<text>{{item.note}}</text>
					</view>
				</view>

			</template>
			<template v-else>
				<view class="m-b-20 b-line" v-for="(item, index) in getLegalCurrencyTransactionData.list"
					:key="item.id">
					<view class="flex_sp_be m-b-20 font-28">
						<view class="">

							<text class="c999">{{select3[item.withdrawalCardType]}}</text>
							<text class="m-l-20">{{item.currency}}</text>
						</view>
						<text class="font-28" v-if="item.status=='0'">{{ select1[item.status] }}</text>
						<text class="green font-28" v-if="item.status=='1'">{{ select1[item.status] }}</text>
						<text class="red font-28" v-if="item.status=='2'">{{ select1[item.status] }}</text>
					</view>
					<view class="flex_sp_be m-b-20">
						<text class="c999">{{$t(('num'))}}</text>
						<text class="font-28">{{ item.withdrawalAmount }} {{item.currency}}</text>
					</view>

					<view class="flex_sp_be m-b-20 c999">
						<text class="c999">{{$t('commission')}}</text>
						<text>{{ item.poundage }} {{item.currency}}</text>
					</view>
					<view class="flex_sp_be m-b-20 c999">
						<text class="c999">{{$t(('collectionAccount'))}}</text>
						<text class="">{{ item.withdrawalCardId }}</text>
					</view>
					<view class="flex_sp_be m-b-20 c999">
						<text class="c999">{{$t(('payeeName'))}}</text>
						<text class="">{{ item.withdrawalPayeeName }}</text>
					</view>

					<view class="flex_sp_be m-b-20 c999">
						<text class="c999">{{$t('createTime')}}</text>
						<text>{{item.createTime}}</text>
					</view>
					<view class="flex_sp_be m-b-20 c999">
						<text class="c999">{{$t('confirmTime')}}</text>
						<text>{{item.processingTime }}</text>
					</view>
					<view class="flex_sp_be m-b-20 c999">
						<text class="c999">{{$t(('note'))}}</text>
						<text>{{item.withdrawalNote}}</text>
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
					{{$t(('screen'))}}
				</view>
				<view class="m-b-20">
					{{$t(('type'))}}
				</view>
				<view class="m-b-40">

					<uni-data-checkbox mode="tag" v-model="current.value" :localdata="items"></uni-data-checkbox>
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
				scrollTop: 0,
				currentvalue: 0,
				items: [{
					value: '0',
					text: this.$t('recharge')
				}, {
					value: '1',
					text: this.$t('disbursement')
				}],
				current: {
					value: '0',
					text: this.$t('recharge')
				},
				params: {
					page: 1, //是 int 页码
					pageSize: 20, //是 int 每页条数
					status: 0,
					type: 0, //是 int 交易类型（ 0： 充币， 1： 提币）
				},

				select0: [this.$t('incomplete'), this.$t('success'), this.$t('fail')],
				select1: [this.$t('processing'), this.$t('success'), this.$t('fail')],
				select2: [this.$t('recharge'),
					this.$t('disbursement')
				],
				select3: [this.$t('withdrawCoins'),
					this.$t('sell')
				],
				getLegalCurrencyTransactionData: '',

			}
		},
		onReachBottom(val) {
			this.lower()
		},

		onLoad(options) {
			if (options.orderHistory == 1) {
				this.params.type = 1
				this.current = {
					value: '1',
					text: this.$t('disbursement')
				}
				this.getLegalCurrencyTransaction(1)
			} else {
				this.params.type = 0
				this.current = {
					value: '0',
					text: this.$t('recharge')
				}
				this.getLegalCurrencyTransaction(0)
			}
		},
		methods: {
			rest() {
				this.current = {
					value: '0',
					text: this.$t('recharge')
				}
				this.params = {
					page: 1, //是 int 页码
					pageSize: 20, //是 int 每页条数
					status: 0,
					type: 0, //是 int 交易类型（ 0： 充币， 1： 提币）
				}
				this.$refs.popup.close()
				this.getLegalCurrencyTransaction(0)
			},
			confirm(value) {
				this.params = {
					page: 1, //是 int 页码
					pageSize: 20, //是 int 每页条数
					status: 0,
					type: value, //是 int 交易类型（ 0： 充币， 1： 提币）
				}
				this.$refs.popup.close()
				this.getLegalCurrencyTransaction(value)
			},
			lower(e) {
				this.params.page++
				if (this.params.page <= this.getLegalCurrencyTransactionData.pages) {

					this.getLegalCurrencyTransaction(this.current.value, 'push')
				}
			},
			getLegalCurrencyTransaction(type, pushtype) {
				this.params.type = type
				this.$api.finance.getLegalCurrencyTransaction(this.params).then((res) => {
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
