<template>
	<view class="app assetsDetail">
		<!-- <scroll-view :scroll-top="scrollTop" scroll-y="true" :style="{height:windowHeight+'rpx'}"
			@scrolltolower="lower"> -->

		<uni-nav-bar class="nav-bar" statusBar :border="false" backgroundColor="#1abb97" left-icon="left" rightText=""
			@clickLeft="routeTo(1)">
			<view class="flex_center navtitle ">
				<image class="image55 " :src="'../../../static/trade/'+assetsDetail.currency+'.png'" mode="widthFix">
				</image>
				<view class="font-36  m-l-20 weight700">{{assetsDetail.currency}}</view>
			</view>
		</uni-nav-bar>
		<view class="head m-b-20">

			<uni-card class="bgfff  cardad" margin='0' padding="10rpx" :is-shadow="false" :border="false">
				<view class="tac c333 m-b-20 m-t-20 weight400">
					{{$t('total')}}

				</view>
				<view class="tac  c333 m-b-40    weight500  zhongji">
					{{ assetsDetail.total}}


				</view>
				<view class="flex_sp_be m-t-40 c333 numbox">

					<view class="num-box">
						<view class="m-l-10 tac">{{$t('availablenum')}}</view>
						<view class="m-l-10 tac font-32 weight400">
							{{ assetsDetail.amount}}
						</view>
					</view>
					<view class="dongjie tac num-box">
						<view class="m-l-10 tac">{{$t('frozen')}}</view>
						<view class="m-l-10 tac font-32 weight400">{{ assetsDetail.frozenAmount}}</view>
					</view>
				</view>
			</uni-card>

		</view>
		<view class=" main c333">
			<view class="content m-b-10">


				<uni-card class="bgfff  " margin='0' :is-shadow="false" :border="false"
					v-for="(item,index) in getBillsData.list" :key="item.id">

					<view class="flex_sp_be  c333">
						<view class="tal">
							<view class="m-l-10 font-30">{{item.billType}}</view>
							<view class="m-l-10 font-24 cB3B3B3">{{item.createTime}}</view>
						</view>

						<view class="tar fonth " :class="item.direction==0?'red':'green'">
							<view class="m-l-10 font-30">
								{{item.direction==0?'-'+item.amountDone:'+'+item.amountDone}}
							</view>
							<view class="m-l-10 font-24 cB3B3B3 ">
								{{ item.amountChargeFee>0?$t('commission')+
									item.amountChargeFee:''}}
							</view>
						</view>
					</view>
				</uni-card>
				<loadMore :total="getBillsData.total" :nowPage="params.page" :pages="getBillsData.pages"></loadMore>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				getSystemInfoSync: uni.getSystemInfoSync(),
				scrollTop: 0,
				assetsDetail: '',
				params: {
					page: 1, //是 int 页码
					pageSize: 20, // 是 int 每页条数
					currency: '', // 否 string 币种
					walletType: '', // 否 string 钱包类型（ 1 币币钱包 2 期货钱包 3 法币钱包
				},
				getBillsData: []
			}
		},
		onReachBottom(val) {
			this.lower()
		},


		onLoad(options) {

			// console.log(uni.getSystemInfoSync().windowWidth, uni.getSystemInfoSync().safeAreaInsets, "options")
			if (options.item) {
				this.assetsDetail = JSON.parse(options.item)
				this.params.currency = this.assetsDetail.currency
				this.params.walletType = this.assetsDetail.walletType
			}
			this.getBills()
		},
		methods: {
			lower(e) {
				this.params.page++
				if (this.params.page <= this.getBillsData.pages) {

					this.getBills('push')
				}
			},
			getBills(pushtype) {
				this.loading = true
				this.$api.assetsDetail.getBills(this.params).then((res) => {
					this.loading = false
					if (pushtype) {

						this.getBillsData.list.push(...res.list)

					} else {
						this.getBillsData = res

					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.navtitle {

		width: 100%;
	}

	.red {
		color: rgb(233, 63, 79);
	}

	.green {
		color: rgb(18, 184, 135)
	}

	.dongjie {
		// margin-left: 250rpx;
	}

	.zhongji {
		font-size: 50rpx !important;
	}

	.scroll {
		height: calc(100vh - 90rpx - 312rpx -20rpx);
		// height: 600rpx;
	}

	.fonth {
		height: 88rpx !important;
	}

	.head {
		position: relative;
		padding: 30rpx 30rpx 0 30rpx;
		height: 312rpx;
		background-color: #1abb97;
	}

	.bgfff {
		background-color: #fff;
	}

	.assetsDetail {
		background-color: #f6f6f6;
		min-height: 100vh;

	}

	.cardad {
		position: absolute;
		bottom: 30rpx;
		left: 30rpx;
		right: 30rpx;


	}

	.numbox {
		flex-flow: row nowrap;
	}

	.num-box {
		flex: 0 1 50%;
	}
</style>
