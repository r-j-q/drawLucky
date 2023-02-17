<template>
	<view class="spot">
		<uni-nav-bar :border="false" backgroundColor="none" fixed left-icon="left" @clickLeft="routeTo(1)">
		</uni-nav-bar>
		<view class="coinInfo flex font-24">
			<view class="flexSub">
				<view>{{ initData.symbolPretty }}</view>
				<view class="price" :style="{ color: textColor(initData.priceChangePercent) }">
					{{ delZero(initData.currentDaysClosePrice) }}
				</view>
				<view class="currencyValue">
					<text>≈{{
              detailData &&
              detailData.aggTrade &&
              delZero(detailData.aggTrade.tradePrice)
            }}USD
					</text>
					<text
						:style="{ color: textColor(initData.priceChangePercent) }">{{ initData.priceChangePercent }}%</text>
				</view>
			</view>
			<view class="flexSub">
				<view class="flex">
					<view class="flexSub">24h高</view>
					<view class="flexSub tar">{{ delZero(initData.highPrice) }}</view>
				</view>
				<view class="flex inLabel">
					<view class="flexSub">24h低</view>
					<view class="flexSub tar">{{ delZero(initData.lowPrice) }}</view>
				</view>
				<view class="flex">
					<view class="flexSub">成交额(USDT)</view>
					<view class="flexSub tar">{{
            initData.totalTradedQuoteAssetVolume
          }}</view>
				</view>
			</view>
		</view>
		<view class="tabsView">
			<view :class="['item', key == 1 ? 'active' : '']" @click="key = 1">买卖盘</view>
			<view :class="['item', key == 2 ? 'active' : '']" @click="key = 2">币种简介</view>
			<view :class="['line', key == 2 ? 't1' : '']"></view>
		</view>
		<view class="tabCon">
			<view v-if="key == 1">
				<view class="heade flex font-24">
					<view>累计</view>
					<view>价格</view>
					<view>累计</view>
				</view>
				<view class="conList font-24">
					<view class="item flex" v-for="(item, index) in dataLength" :key="index">
						<view class="flexSub flex inLine pr10">
							<view class="bg buyBg" :style="{
                  background: backgroundColor('rise'),
                  width: detailData.datas.bids[index].quantity + '%',
                }"></view>
							<view :style="{ color: textColor1('rise') }">{{
                delZero(detailData.datas.bids[index].price)
              }}</view>
							<view>{{ delZero(detailData.datas.bids[index].quantity) }}</view>
						</view>
						<view class="flexSub flex inLine pl10">
							<view class="bg sellBg" :style="{
                  background: backgroundColor('fall'),
                  width: detailData.datas.asks[index].quantity + '%',
                }"></view>
							<view :style="{ color: textColor1('fall') }">{{
                delZero(detailData.datas.asks[index].price)
              }}</view>
							<view>{{ delZero(detailData.datas.asks[index].quantity) }}</view>
						</view>
					</view>
				</view>
			</view>
			<view v-else>
				<view class="detailLable bold">
					<view>{{ introduction.currency }}</view>
				</view>
				<view class="detailLable">
					<view>白皮书</view>
					<view>{{ introduction.whitePaperAddress }}</view>
				</view>
				<view class="detailLable">
					<view>官网</view>
					<view>{{ introduction.website }}</view>
				</view>
				<view class="detailLable">
					<view>总供应量</view>
					<view>{{ introduction.supplyNum }}</view>
				</view>
				<view class="detailLable">
					<view>流通量</view>
					<view>{{ introduction.circulation }}</view>
				</view>
				<view class="detailLable">
					<view>发行价格</view>
					<view>{{ introduction.issuePrice }}</view>
				</view>
				<view class="detailLable">
					<view>发行时间</view>
					<view>{{ introduction.issueTime }}</view>
				</view>
				<view class="detailLable">
					<view>币种说明</view>
				</view>
				<rich-text :nodes="introduction.currencyExplain || '--'"></rich-text>
			</view>
		</view>

		<view class="botBtn">
			<view :style="{ backgroundColor: backGroundColor('rise') }" @click="
          routeTo('/pages/other/trade/exchange', '?type=rise&symbol=' + symbol)
        ">买入</view>
			<view :style="{ backgroundColor: backGroundColor('fall') }" @click="
          routeTo('/pages/other/trade/exchange', '?type=rise&symbol=' + symbol)
        ">卖出</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				key: 1,
				changeColor: {},
				strings: "",
				initData: {},
				detailData: {},
				dataLength: 0,
				symbol: "",
				introduction: {},
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
					this.initData = this.$store.state.socket.websocketData.C2CTop.filter(
						(v) => v.symbol == this.symbol
					)[0];
					this.detailData =
						this.$store.state.socket.websocketData.C2CDepth[this.initData.symbol];
					if (this.detailData && this.detailData.datas) {
						this.dataLength = this.detailData.datas.asks.length;
					}
					// console.log(JSON.stringify(this.detailData.datas.asks));
				},
				deep: true,
			},
		},
		methods: {
			getIntroduction() {
				this.$api.trade
					.getIntroduction({
						currency: this.initData.symbolPretty.split("/")[0]
					})
					.then((res) => {
						this.introduction = res;
					});
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
			textColor1(type) {
				if (type == "rise") {
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
			backgroundColor(type) {
				if (type == "rise") {
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
			backGroundColor(type) {
				if (type == "rise") {
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
		},
		onLoad(options) {
			this.symbol = options.symbol;
			this.changeColor = uni.getStorageSync("changeColor");
			this.initData = this.$store.state.socket.websocketData.C2CTop.filter(
				(v) => v.symbol == this.symbol
			)[0];
			this.$store.dispatch("websocketSend", "ROOM_C2C@" + this.initData.symbol);
			this.getIntroduction();
		},
	};
</script>
<style lang="scss" scoped>
	.flex {
		display: flex;
	}

	.flexSub {
		flex: 1;
	}

	.pr10 {
		padding-right: 10rpx;
	}

	.pl10 {
		padding-left: 10rpx;
	}

	.spot {
		.coinInfo {
			padding: 0 30rpx;

			.price {
				font-weight: 700;
				font-size: 40rpx;
				margin: 10rpx 0;
			}

			.inLabel {
				margin: 20rpx 0;
			}

			.currencyValue {}
		}

		.tabsView {
			display: flex;
			height: 80rpx;
			align-items: center;
			margin: 30rpx 30rpx 20rpx;
			border-radius: 4rpx;
			position: relative;

			.item {
				flex: 1;
				text-align: center;
				font-size: 30rpx;

				&.active {
					color: rgb(26, 187, 151);
					font-weight: 700;
				}
			}

			.line {
				position: absolute;
				left: calc(25% - 20rpx);
				width: 40rpx;
				height: 6rpx;
				border-radius: 6rpx;
				background: rgb(26, 187, 151);
				transition-duration: 0.5s;
				bottom: 4rpx;

				&.t1 {
					left: calc(75% - 20rpx);
				}
			}
		}

		.tabCon {
			padding: 0 30rpx 180rpx;

			.heade {
				display: flex;
				justify-content: space-between;
			}

			.conList {
				padding-bottom: 150rpx;

				.item {
					.inLine {
						height: 50rpx;
						line-height: 50rpx;
						position: relative;
						justify-content: space-between;

						.bg {
							position: absolute;
							top: 0;
							bottom: 0;
							width: 0%;
							animation: all 0.3s;

							&.buyBg {
								right: 0;
							}

							&.sellBg {
								left: 0;
							}
						}
					}
				}
			}

			.detailLable {
				display: flex;
				justify-content: space-between;
				font-size: 24rpx;
				line-height: 52rpx;

				&.bold {
					font-weight: 700;
					font-size: 30rpx;
				}
			}
		}

		.botBtn {
			position: fixed;
			display: flex;
			bottom: 40rpx;
			left: 0;
			right: 0;
			padding: 0 30rpx;
			justify-content: space-between;

			view {
				width: 48.5%;
				border-radius: 8rpx;
				color: #fff;
				height: 80rpx;
				background: rgb(233, 63, 79);
				text-align: center;
				line-height: 80rpx;
				font-size: 24rpx;
			}
		}

		::v-deep {
			uni-rich-text {
				font-size: 24rpx;
			}
		}
	}
</style>
