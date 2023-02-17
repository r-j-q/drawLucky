<template>
	<view class="trade">
		<uni-nav-bar :border="false" backgroundColor="#f6f6f6" fixed>
			<block slot="left">
				<view class="title"> 现货 </view>
			</block>
			<view class="searchView">
				<uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
				<input confirm-type="search" class="nav-bar-input" type="text" placeholder="搜索"
					placeholder-style="fontSize:28rpx" @input="inputChange" />
			</view>
		</uni-nav-bar>
		<view class="content">
			<view class="contentHeader">
				<view class="flexTwice">交易对</view>
				<view class="flexFub priceHead">最新价格</view>
				<view class="flexFub" style="text-align: right">涨跌幅</view>
			</view>
			<scroll-view scroll-y="true" class="scrollBox">
				<view class="item" v-for="(item, index) in C2CMarketData" :key="index"
					@click="routeTo('/pages/other/trade/spot', '?dbId=' + item.dbId)">
					<view v-if="
              !searchValue ||
              item.symbolPretty.split('/')[0].indexOf(searchValue) > -1
            ">
						<view class="productInfo flexTwice">
							<image v-if="!item.defaultSrc" :src="
                  '../../../static/trade/' +
                  item.symbolPretty.split('/')[0] +
                  '.png'
                " @error="ErrSrc($event, item)" />
							<image v-else src="../../../static/trade/default.png" />
							<view class="info">
								<view class="name">
									<text class="nameCoin">{{
                    item.symbolPretty.split("/")[0]
                  }}</text>
									<text class="nameCurr">/{{ item.symbolPretty.split("/")[1] }}</text>
								</view>
								<view class="volume">24H Vol
									{{ Number(item.totalTradedBaseAssetVolume).toFixed(2) }}
								</view>
							</view>
						</view>
						<view class="flexFub price" :style="{
                color: textColor(item.priceChangePercent),
              }">{{ delZero(item.currentDaysClosePrice) }}</view>
						<view class="flexFub changeWrap">
							<view class="change" :style="{
                  backgroundColor: backGroundColor(item.priceChangePercent),
                  color: textColor(item.priceChangePercent),
                }">{{ item.priceChangePercent }}%</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<tabbar index="1"></tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				C2CMarketData: [],
				changeColor: {},
				searchValue: "",
			};
		},
		computed: {
			stroeChange() {
				return this.$store.state.socket.stroeChange;
			},
		},
		watch: {
			stroeChange: {
				handler: function(newVal, oldVal) {
					this.C2CMarketData = this.$store.state.socket.websocketData.C2CMarket;
				},
				deep: true,
			},
		},
		onLoad() {},
		methods: {
			inputChange(e) {
				this.searchValue = e.detail.value.toUpperCase();
			},
			backGroundColor(value) {
				if (value > 0) {
					if (this.changeColor.value == 0 || !this.changeColor) {
						return "rgba(218, 82, 82, 0.2)";
					} else {
						return "rgba(62, 173, 93, 0.2)";
					}
				} else {
					if (this.changeColor.value == 1) {
						return "rgba(218, 82, 82, 0.2)";
					} else {
						return "rgba(62, 173, 93, 0.2)";
					}
				}
			},
			textColor(value) {
				if (value > 0) {
					if (this.changeColor.value == 0 || !this.changeColor) {
						return "rgb(233, 63, 79)";
					} else {
						return "rgb(18, 184, 135)";
					}
				} else {
					if (this.changeColor.value == 1) {
						return "rgb(233, 63, 79)";
					} else {
						return "rgb(18, 184, 135)";
					}
				}
			},
			ErrSrc(e, item) {
				this.$set(item, "defaultSrc", true);
				// this.ImgSrc = this.errSrc;
			},
			loadSrc(e) {
				console.log("图片加载失败", e);
				// this.ImgSrc = this.errSrc;
			},
		},
		onShow() {
			this.changeColor = uni.getStorageSync("changeColor");

			this.C2CMarketData = this.$store.state.socket.websocketData.C2CMarket;

			console.log(this.$store.state.socket.websocketData);
		},
	};
</script>

<style lang="scss" scoped>
	.trade {
		::v-deep {
			.uni-navbar {
				.uni-navbar__header {
					align-items: center;
				}

				.uni-navbar__header-btns {
					width: auto !important;
				}

				.title {
					font-size: 40rpx;
					position: relative;
					line-height: 41px;

					&::after {
						content: " ";
						position: absolute;
						bottom: 0;
						left: 50%;
						-webkit-transform: translateX(-50%);
						transform: translateX(-50%);
						width: 40%;
						height: 3px;
						background: #1abb97;
					}
				}

				.uni-navbar__header-container {
					padding: 10rpx;
					background: #fff;
					margin-left: 20rpx;
				}

				.searchView {
					display: flex;
					align-items: center;
					flex: 1;

					uni-input {
						width: 100%;
					}
				}
			}

			.content {
				display: flex;
				flex-direction: column;
				height: calc(100vh - 210rpx);

				.flexTwice {
					flex: 2;
				}

				.flexFub {
					flex: 1;
				}

				.contentHeader {
					display: flex;
					font-size: 24rpx;
					padding: 20rpx 0;

					.priceHead {
						width: 124rpx;
						text-align: center;
					}
				}

				.scrollBox {
					flex: 1;
					overflow: scroll;

					.item {
						&>view {
							display: flex;
							align-items: center;
							height: 100rpx;

							.productInfo {
								display: flex;
								align-items: center;

								image {
									width: 60rpx;
									height: 60rpx;
								}

								.info {
									margin-left: 10rpx;

									.name {
										.nameCoin {
											font-weight: 500;
											margin-right: 8rpx;
											font-size: 26rpx;
										}

										.nameCurr {
											font-size: 24rpx;
										}
									}

									.volume {
										font-size: 24rpx;
										color: #666;
									}
								}
							}

							.price {
								font-weight: 700;
								font-size: 30rpx;
								width: 124rpx;
								text-align: center;
							}

							.changeWrap {
								display: flex;
								justify-content: flex-end;

								.change {
									min-width: 142rpx;
									height: 64rpx;
									border-radius: 8rpx;
									line-height: 64rpx;
									text-align: center;
									// padding: 0 16rpx;
									font-weight: 500;
									font-size: 28rpx;
								}
							}
						}
					}
				}

				.contentBody {
					.allList {}
				}
			}
		}
	}
</style>
