<template>
	<view class="app page">
		<uni-nav-bar class="nav-bar" statusBar backgroundColor="#f6f6f6" left-icon="left" :title="$t('transferRecord')"
			right-icon="search" @clickLeft="routeTo(1)" @clickRight="$refs.popup.open('bottom')">
		</uni-nav-bar>
		<!-- <scroll-view :scroll-top="scrollTop" scroll-y="true" :style="{height:windowHeight+'rpx'}"
			@scrolltolower="lower"> -->
		<view class="content main c333 p-t-40">
			<template v-for="(item, index) in getTransferRecordsData.list">
				<uni-card class="bgfff  cardad m-b-20" margin='0' padding="10rpx" :is-shadow="false" :border="false">
					<view class="" :key="index">
						<view class="flex_sp_be m-b-20">
							<text>{{ select2[item.walletType-1] }}</text>
							<!-- <text class="weight700">{{select3[item.direction] }}</text> -->
							<text class="m-l-10">{{ item.currency }}</text>
						</view>
						<view class="flex_sp_be m-b-20">
							<text>{{$t('num')}}</text>
							<view class="">
								<text class="font-40 red" v-if="item.direction==0">- {{item.amount}} </text>
								<text class="font-40 green " v-if="item.direction==1">+ {{item.amount}} </text>

							</view>
						</view>
						<view class="flex_sp_be c999">
							<text>{{$t('time')}}</text>
							<text class="weight700 ">{{item.operationTime}}</text>
						</view>
					</view>
				</uni-card>
			</template>
			<loadMore :total="getTransferRecordsData.total" :nowPage="params.page"
				:pages="getTransferRecordsData.pages"></loadMore>
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
				items: [{
					value: '1',
					text: this.$t('currencyAccount')
				}, {
					value: '2',
					text: this.$t('futuresAccount')
				}, {
					value: '3',
					text: this.$t('legalAccount')
				}, {
					value: '4',
					text: this.$t('trustAccount')
				}],
				current: {
					value: '',
					text: ''
				},

				//
				params: {
					page: 1, //是 int 页码
					pageSize: 20, //是 int 每页条数
					walletType: ''
				},
				select2: [this.$t('currencyAccount'),
					this.$t('futuresAccount'),
					this.$t('legalAccount'),
					this.$t('trustAccount'),
				],
				select3: [this.$t('rollout'), this.$t('rollin')],
				getTransferRecordsData: '',

			}
		},


		onReachBottom(val) {
			this.lower()
		},

		onLoad() {
			this.getTransferRecords()
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
					walletType: ''
				}
				this.$refs.popup.close()
				this.getTransferRecords()
			},
			confirm(value) {

				this.params = {
					page: 1, //是 int 页码
					pageSize: 20, //是 int 每页条数
					walletType: value
				}
				this.$refs.popup.close()
				this.getTransferRecords(value)
			},
			lower(e) {
				this.params.page++
				if (this.params.page <= this.getTransferRecordsData.pages) {

					this.getTransferRecords(this.current.value, 'push')
				}
			},
			getTransferRecords(type = '', pushtype) {

				this.params.walletType = type
				this.$api.finance.getTransferRecords(this.deleteInvalidParam(this.params)).then((res) => {
					if (pushtype) {
						this.getTransferRecordsData.list.push(...res.list)
					} else {

						this.getTransferRecordsData = res
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		background-color: #f6f6f6;
		min-height: 100vh;
	}

	/deep/.uni-nav-bar-right-text {
		font-size: 30rpx;
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
