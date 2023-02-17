<template>
	<view class="app">
		<view class="head weight600">
			<uni-nav-bar class="nav-bar" statusBar :border="false" backgroundColor="#12b888" :title="$t('managedOrder')"
				left-icon="left" rightText="" @clickLeft="routeTo(1)">
			</uni-nav-bar>
		</view>
		<view class="main">
			<z-tabs ref="tabs" :tabs-style="tabsStyle" bg-color="#12b888" :list="[$t('underway'), $t('completed')]"
				:current="current" activeColor="#fff" inactiveColor="#333" @change="tabsChange" />
			<view class="">
				<scroll-view scroll-y="true" :scroll-top="scrollTop" scroll-with-animation
					style="height: calc(100vh - 170rpx);" @scroll="scroll" @scrolltolower="lowerRecords">
					<!-- <template v-show="current=='0'"> -->
					<view class="swiper-item font-24 c333 b-line " v-for="(item, index) in getPledgeRecordsData.list"
						:key='item.id'>
						<view class="text1 flex_sp_be">
							<view class="">
								{{ item.productName }}
							</view>

							<view class=" font-26 c1abb97 cancelOrder " v-if="item.redemptionEarly =='1' &&current=='0'"
								@click="order(item)">
								{{$t('cancelOrder')}}
							</view>
						</view>
						<view class="flex_sp_be text2">
							<view class="">

								{{$t('purchaseAmount')}}
							</view>
							<view class="weight600">
								{{ item.amount }} {{item.currency}}
							</view>
						</view>
						<view class="flex_sp_be text2">
							<view class="">
								{{$t('dailyRate')}}

							</view>
							<view class="">
								{{ item.profitRate*10000/100 }}%
							</view>
						</view>
						<view class="flex_sp_be text2">
							<view class="">
								{{$t('profit')}}
							</view>
							<!-- <view class="" v-show="current=='0'">
								{{item.amount*getDistanceSpecifiedTime(item.createTime)*10000/10000*item.profitRate*10000/10000||0}}
								<text class="m-l-10">{{item.currency}}</text>

							</view> -->
							<view class="">
								{{ item.profitAmount }}
								<text class="m-l-10">{{item.currency}}</text>

							</view>
						</view>
						<view class="flex_sp_be text2">
							<view class="">
								{{$t('createTime')}}
							</view>
							<view class="">
								{{ item.pledgeTime }}
							</view>
						</view>
						<view class="flex_sp_be text2">
							<view class="">
								{{$t('callDate')}}
							</view>
							<view class="">
								{{ item.redemptionTime }}
							</view>
						</view>
					</view>
					<loadMore :total="getPledgeRecordsData.total" :nowPage="paramsRecords.page"
						:pages="getPledgeRecordsData.pages">
					</loadMore>
					<!-- <template v-show="current=='1'">
						<view class="swiper-item font-24 c333 weight600"
							v-for="(item, index) in getPledgeRecordsData1.list" :key='item.id'>
							<view class="text1">
								{{ item.productName }}
							</view>
							<view class="flex_sp_be text2">
								<view class="">
									购买金额
								</view>
								<view class="">
									{{ item.amount }} USDT
								</view>
							</view>
							<view class="flex_sp_be text2">
								<view class="">
									日收益率
								</view>
								<view class="">
									{{ item.profitRate*100 }}%
								</view>
							</view>
							<view class="flex_sp_be text2">
								<view class="">
									收益
								</view>
								<view class="">
									{{ item.redemptionAmount-item.amount }} USDT
								</view>
							</view>
							<view class="flex_sp_be text2">
								<view class="">
									支付时间
								</view>
								<view class="">
									{{ item.pledgeTime }}
								</view>
							</view>
							<view class="flex_sp_be text2">
								<view class="">
									赎回日期
								</view>
								<view class="">
									{{ item.redemptionTime }}
								</view>
							</view>
						</view>
						<loadMore :total="getPledgeRecordsData1.total" :nowPage="paramsRecords.page"
							:pages="getPledgeRecordsData1.pages">
						</loadMore>
					</template> -->


					<view class="image60 anchor" v-show="showAnchor" @tap="toScroll">
						<image class="image60" src="@/static/img/anchor.png" mode="widthFix"></image>
					</view>
				</scroll-view>

			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				tabsStyle: {
					width: '100% ',
					position: 'sticky',
					top: "88rpx",
					zIndex: 999,
				},
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				intoindex: '',
				num: 0, //动态模拟需要跳到的位置
				showAnchor: false,
				getPledgeRecordsData: '',
				// getPledgeRecordsData1: '',
				paramsRecords: {
					page: 1, //是 int 页码
					pageSize: 20, //是 int 每页条数
					status: 0, //是 int 交易类型（ 0： 充币， 1： 提币）
				},
			}
		},



		onLoad() {
			this.getPledgeRecords()
		},
		methods: {
			order(item) {
				let _this = this
				this.$store.state.user.id
				uni.showModal({
					content: _this.$t('whether'),
					cancelText: _this.$t('cancelText'),
					confirmText: _this.$t('confirm'),
					success: (res) => {
						if (res.confirm) {
							_this.$api.financial.redemption({
								userId: _this.$store.state.user.id,
								orderCode: item.orderCode
							}).then(res => {
								_this.tabsChange(0)
							})
						}
					}
				})
			},
			//tabs通知swiper切换
			tabsChange(index) {
				this.current = index;
				this.paramsRecords.page = 1
				this.paramsRecords.status = index
				this.getPledgeRecords()
			},
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
				this.showAnchor = this.old.scrollTop > 1000 ? true : false
			},
			toScroll() {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
					this.showAnchor = false
				});

			},
			lowerRecords(e) {
				this.paramsRecords.page++
				if (this.paramsRecords.page <= this.getPledgeRecordsData.pages) {

					this.getPledgeRecords('push')
				}
			},
			getPledgeRecords(pushtype) {

				this.$api.financial.getPledgeRecords(this.paramsRecords).then((res) => {
					if (pushtype) {
						this.getPledgeRecordsData.list.push(...res.list)
					} else {

						this.getPledgeRecordsData = res
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.head {
		height: 90rpx;
		position: sticky;
		top: 0;
		z-index: 99;
		background-color: #12b888;
		color: #333;
	}

	.main {
		.cancelOrder {
			text-decoration: underline
		}

		.swiper-item {
			padding: 30rpx;

			.text1 {
				line-height: 70rpx;
			}

			.text2 {
				line-height: 50rpx;
			}

		}

		.anchor {
			position: fixed;
			top: 80vh;
			right: 30rpx;
		}
	}

	/deep/ .noData {
		margin-top: 0;
		padding-top: 80rpx;
	}

	.normal-btn {
		// color: #fff;
		min-width: 100rpx;
		line-height: 50rpx;
		text-align: center;
		padding: 0 14rpx;
		background-color: #12b888;
		border-radius: 24rpx;
	}
</style>
