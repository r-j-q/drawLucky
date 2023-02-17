<template>
	<view class="app">
		<view class="main">
			<view class="head weight600 cfff">

				<uni-nav-bar class="nav-bar" statusBar :border="false" backgroundColor="#12b888" left-icon="left" rightText=""
					right-icon="calendar" @clickLeft="routeTo(1)"
					@clickRight="routeTo('/pages/other/trust/trustOrders')">
				</uni-nav-bar>
				<view class="info-box" @click="routeTo('/pages/other/trust/trustOrders')">
					<view class="info flex_center m-b-20">
						<view class="info-asd tac">
							<view class="font-30">
								{{$t('managedOrder')}}
							</view>
							<view class="font-40 tac">

								<text>{{getPledgeStatisticsData.handAmount}}</text>
								<text class="font-26 m-l-20">USDT</text>
							</view>
						</view>
						<!-- <view class="order-btn font-26" @click="routeTo('/pages/other/trust/trustOrders')">
							托管订单
						</view> -->
					</view>
					<view class="info flex_sp_be">
						<view class=" info-item tac">
							<view class="tac font-32">
								<text>{{getPledgeStatisticsData.todayAmount}}</text>
								<text class="font-26 m-l-20">USDT</text>

							</view>
							<view class="font-26 ">
								{{$t('earningsToday')}}

							</view>
						</view>
						<view class="info-item tac">
							<view class="tac font-32">
								<text>{{getPledgeStatisticsData.cumulativeAmoun}}</text>
								<text class="font-26 m-l-20">USDT</text>
							</view>
							<view class="font-26">
								{{$t('accumulatedIncome')}}

							</view>
						</view>
						<!-- <view class="">
							<view class="tac font-32">
								0
							</view>
							<view class="font-26">
								托管中订单
							</view>
						</view> -->
					</view>
				</view>
			</view>

			<view class="item" v-for="(item,index) in getPledgeProductsData.list" :key="item.id">
				<view class="flex_sp_be">
					<view class="flex_start">
						<view class="">
							<image class="image50 image-box" :src="'../../../static/trade/'+item.currency+'.png'"
								mode="widthFix">
							</image>
						</view>
						<text class="m-l-20">{{item.productName}}</text>
					</view>
					<view class="normal-btn font-26"
						@click="routeTo('/pages/other/trust/buyBot','?item='+JSON.stringify(item) )">
						{{$t('buy')}}
					</view>
				</view>
				<view class="item-info flex_sp_be">
					<view class="">
						<view class="tal">
							{{$t('singleLimit')}}
						</view>
						<view class="tac ">
							{{item.minAmount}}-{{item.maxAmount}} {{item.currency}}
						</view>
					</view>
					<view class="flex_sp_be cycle">

						<view class="">
							<view class="tac">
								{{$t('dailyRate')}}
							</view>

							<view class="tac ">
								{{item.profitRate*10000/100}}%
							</view>
						</view>
						<view class="">
							<view class="tac">
								{{$t('cycle')}}
							</view>
							<view class="tac ">
								{{item.productLife}} {{$t('day')}}
							</view>
						</view>
					</view>
				</view>
			</view>
			<loadMore :total="getPledgeProductsData.total" :nowPage="params.page" :pages="getPledgeProductsData.pages">
			</loadMore>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				params: {
					page: 1, //是 int 页码
					pageSize: 20, //是 int 每页条数
				},
				getPledgeProductsData: '',
				getPledgeStatisticsData: "",
			}
		},


		onReachBottom(val) {
			this.lower()
		},
		onShow() {
			this.params = {
				page: 1, //是 int 页码
				pageSize: 20, //是 int 每页条数
			}
			this.getPledgeProducts()
			this.getPledgeStatistics()
		},
		methods: {

			lower(e) {
				this.params.page++
				if (this.params.page <= this.getPledgeProductsData.pages) {

					this.getPledgeProducts('push')
				}
			},
			getPledgeProducts(pushtype) {
				this.$api.trust.getPledgeProducts(this.deleteInvalidParam(this.params)).then(
					res => {
						console.log('res', res);
						if (pushtype) {

							this.getPledgeProductsData.list.push(res.list)
						} else {
							this.getPledgeProductsData = res

						}
						this.getPledgeProductsData.list.map(item => {
							if (this.maxprofitRate <= item.profitRate) {

								this.maxprofitRate = item.profitRate
							}
						})
					})

			},
			getPledgeStatistics() {
				this.$api.financial.getPledgeStatistics().then((res) => {

					this.getPledgeStatisticsData = res
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.order-btn {
		min-width: 100rpx;
		line-height: 50rpx;
		text-align: center;
		padding: 0 14rpx;
		background-color: rgb(95, 208, 183);
		border-radius: 24rpx;
	}

	.normal-btn {
		color: #fff;
		min-width: 100rpx;
		line-height: 50rpx;
		text-align: center;
		padding: 0 14rpx;
		background-color: #12b888;
		border-radius: 24rpx;
	}

	.head {
		position: sticky;
		top: 0;
		z-index: 99;
		background-color: #12b888;
	}

	.info-box {
		padding: 10rpx 30rpx 30rpx 30rpx;


		.info {
			height: 80rpx;

			.info-item {
				flex: 0 1 50%;
			}
		}

		.info-asd {
			flex: 0 1 auto;
		}
	}

	.main {
		background-color: #eef1f5;
		min-height: 100vh;
	}

	.item {
		background-color: #fff;
		margin: 20rpx 0rpx;
		padding: 30rpx;

		.image-box {
			border-radius: 50%;
			overflow: hidden;
		}

		.item-info {
			height: 100rpx;
		}
	}

	.cycle {
		flex: 0 1 40%;
	}
</style>
