<template>
	<view class="app">
		<view class="main">
			<view class="image-box">
				<image class="finance" src="@/static/icon-finance-background.baf9a962.png" mode="widthFix"></image>
			</view>
			<view class="content-box">
				<view class="content-box-text" @click="routeTo('/pages/other/trust/bot')">
					<view class="category">
						<view class="category-box">
							<view class="category-row">
								<view class="flex"><span class="triangle"></span>
									<p class="title">{{$t('pledgeMining')}}</p>
								</view>
								<p class="status">{{$t('underway')}}</p>
							</view>
							<view class="category-center"> {{$t('stabilize')}} </view>
							<view class="category-row number">
								<p class="l" v-if="maxprofitRate*10000/100">{{maxprofitRate*10000/100}}%</p>
								<p class="l" v-else></p>
								<p class="r">{{$t('income')}} </p>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>


		<tabbar index="3"></tabbar>
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
				maxprofitRate: 0,
			}
		},




		onShow() {
			this.getPledgeProducts()
		},
		methods: {


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
		}
	}
</script>

<style lang="scss" scoped>
	.finance {
		width: 100%;
	}

	.main {
		margin-bottom: 148rpx;
		position: relative;
	}

	.flex {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	.content-box {
		position: absolute;
		bottom: -158rpx;
		left: 30rpx;
		right: 30rpx;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		// min-height: 80vh;
	}

	.content-box .content-box-text {
		flex: 1 1 auto;
		// width: 85%;
		// max-width: 1200px;
		// padding: 0 15px;
		color: #999;
	}

	.content-box .content-box-text .back {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		width: 100%;
		margin-bottom: 40rpx;
	}

	.content-box .content-box-text .back .backBtn {
		width: 100rpx;
	}

	.content-box .content-box-text .titleHasLeftLine {
		color: #1abb97;
		padding: 0 40rpx 0 40rpx;
		border-left: 5px solid #1abb97;
	}

	.category .category-box .category-row .title {
		font-size: 28rpx;
		font-weight: 800;
	}

	.category .category-box .category-row .triangle:before {
		position: relative;
		top: -22rpx;
		content: "";
		width: 0;
		height: 0;
		border-left: 16rpx solid transparent;
		border-right: 16rpx solid transparent;
		margin-right: 18rpx;
		border-bottom: 20rpx solid #1abb97;
	}

	.category .category-box .category-row .status {
		font-size: 24rpx;
		white-space: nowrap;
		background: #1abb97;
		padding: 8rpx 20rpx;
		border-radius: 34rpx;
		color: #fff;
	}

	.category .category-box {
		cursor: pointer;
		background: #fff;
		-webkit-box-shadow: 0 0 18rpx #e9e9e9;
		box-shadow: 0 0 18rpx #e9e9e9;
		color: #333;
		border-radius: 20rpx;
		padding: 20rpx;
		// margin: 20px 8px;
		// width: 100%;
		height: -webkit-fit-content;
		height: -moz-fit-content;
		height: fit-content;
	}

	.category .category-box .category-row {
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-flex;
		width: 100%;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}

	.category .category-box .category-center {
		padding: 15rpx;
		text-align: center;
		font-size: 26rpx;
	}

	.category .category-box .number {
		padding: 32rpx 0;
		background: #f6f6f6;
		color: #888;
	}

	.category .category-box .category-row {
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-flex;
		width: 100%;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}



	.category .category-box .number .r {
		width: 90%;
		text-align: left;
		padding: 20rpx 20rpx;
		font-size: 24rpx;
	}

	.category .category-box .number .l {
		width: 60%;
		margin-left: 30rpx;
		font-size: 60rpx;
		font-weight: 800;
		color: #1abb97;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.category .category-box .number .r {
		width: 30%;
		text-align: left;
		padding: 20rpx 20rpx;
	}
</style>
