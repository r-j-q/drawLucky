<template>
	<view class="app main">
		<!-- :style="{paddingTop: statusBarHeight+'rpx'}" -->
		<uni-nav-bar class="nav-bar" statusBar statusBar color="#000" backgroundColor="#f6f8fc"
			:title="$store.state.webInfo.siteConfiguration.webSitename">
			<block slot="left">
				<image class="avatar" :src="headPortrait || '../../../static/img/icon_empty_user_logo.png'"
					mode="heightFix" @click="openPopup('popupLeft', 'left')"></image>
			</block>
		</uni-nav-bar>
		<view class="info-box">
			<view class="">

				<uni-swiper-dot class="swiper-box" @clickItem="clickItem" :info="getImagesData" :current="current"
					mode="round" :dots-styles="dotsStyles" field="content">
					<swiper class="swiper-item--" @change="change" :current="current">
						<swiper-item v-for="(item, index) in getImagesData" :key="index">
							<image class="swiper-item" :src="item.path" mode="" @click="openWeb(item.jumpUrl)">
							</image>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			</view>

			<uni-view class="news flex_sp_be" v-if="list.length">
				<image class="news-bg" src="@/static/img/gonggao.png"></image>
				<swiper class="news-swiper" circular :autoplay="true" :interval="3500" :duration="1000">
					<swiper-item v-for="(item, index) in list" :key="index"
						style=" width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);"
						@click="toNotice(item)">
						<uni-view class="news-content ">
							<uni-view class="ellips_line1">{{ item.title }}</uni-view>
						</uni-view>
					</swiper-item>
				</swiper>
			</uni-view>
		</view>
		<view class="m-t-20 quotation m-b-20">
			<view class="flex_sp_be m-b-40 ">
				<view class="tac" v-for="(item, index) in C2CTopData" :key="item.id" v-if="index < 3"
					@click="routeTo('/pages/other/trade/spotHome', '?symbol=' + item.symbol)">
					<view class="text1 m-b-10 font-28">
						<text class="text1-weight">{{ item.symbolPretty.split('/')[0] }}</text>
						<text class="text1-si">/{{ item.symbolPretty.split('/')[1] }}</text>
					</view>
					<view class="text2 m-b-10 font-36 weight700 ">{{ delZero(item.currentDaysClosePrice) }}</view>
					<view class="text3 m-b-10  font-28" :style="{
							color: textColor(item.priceChangePercent)
						}">
						{{ item.priceChangePercent }}%
					</view>
				</view>
			</view>
			<view class="flex_sp_be item-box ai_start">
				<view class="item tac" @click="routeTo('/pages/other/assets/depositDetail')">
					<image class="image" src="@/static/img/icon-home-deposit.png" mode="widthFix"></image>
					<view class="tac m-t-10">{{ $t('rechargeMoney') }}</view>
				</view>
				<view class="item tac" @click="routeTo('/pages/other/assets/withdrawDetail')">
					<image class="image" src="@/static/img/icon-home-withdraw.png" mode="widthFix"></image>
					<view class="tac m-t-10">{{ $t('withdrawCoins') }}</view>
				</view>
				<view class="item tac" @click="routeTo('/pages/other/me/help')">
					<image class="image" src="@/static/img/icon-help.png" mode="widthFix"></image>
					<view class="tac m-t-10">{{ $t('helper') }}</view>
				</view>
				<view class="item tac" @click="routeTo('/pages/other/me/serviceCenter')">
					<image class="image" src="@/static/img/icon-service.png" mode="widthFix"></image>
					<view class="tac m-t-10">{{ $t('customer') }}</view>
				</view>
			</view>
		</view>
		<view class="content ">
			<view class="title-box">
				<text class="title">{{ $t('rising') }}</text>
			</view>
			<view class="contentHeader">
				<view class="flexTwice">{{ $t('rising') }}</view>
				<view class="flexFub priceHead">{{ $t('newPrice') }}</view>
				<view class="flexFub" style="text-align: right">{{ $t('upfloat') }}</view>
			</view>
			<scroll-view scroll-y="true" class="scrollBox">
				<view class="item" v-for="(item, index) in C2CRankData" :key="index"
					@click="routeTo('/pages/other/trade/spotHome', '?symbol=' + item.symbol)">
					<view v-if="!searchValue || item.symbolPretty.split('/')[0].indexOf(searchValue) > -1">
						<view class="productInfo flexTwice">
							<!-- <image v-if="!item.defaultSrc" :src="
		              '../../../static/trade/' +
		              item.symbolPretty.split('/')[0] +
		              '.png'
		            " @error="ErrSrc($event, item)" />
							<image v-else src="../../../static/trade/default.png" /> -->
							<view class="info">
								<view class="name flex_start">
									<text class="nameCoin weight700">{{ item.symbolPretty.split('/')[0] }}</text>
									<text class="nameCurr">/{{ item.symbolPretty.split('/')[1] }}</text>
								</view>
								<view class="volume">24H Vol {{ Number(item.totalTradedBaseAssetVolume).toFixed(2) }}
								</view>
							</view>
						</view>
						<view class="flexFub price" :style="{
								color: textColor(item.priceChangePercent)
							}">
							{{ delZero(item.currentDaysClosePrice) }}
						</view>
						<view class="flexFub changeWrap">
							<view class="change" :style="{
									backgroundColor: backGroundColor(item.priceChangePercent),
									color: textColor(item.priceChangePercent)
								}">
								{{ item.priceChangePercent }}%
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 普通弹窗 -->
		<uni-popup ref="popupLeft" background-color="#fff">
			<view class="popup-content ">
				<homePopupLeft @closeP="closeP"></homePopupLeft>
			</view>
		</uni-popup>

		<!-- 普通弹窗 -->
		<uni-popup ref="popuptype1" :is-mask-click="false" mask-background-color="rgba(0,0,0,0.8)"
			@maskClick="maskClick">
			<template
				v-if="showlistPopup.length>0&&showlistPopup[showlistPopupIndex].type1=='0' &&showlistPopup[showlistPopupIndex].type=='1'">

				<uni-card class="bgfff m-b-20 card1   " margin="0px"
					:padding="showlistPopup[showlistPopupIndex].buttonName ? '20px 0px 40px 0' : '20px  0px 0px 0px'"
					:is-shadow="false" :border="false" v-if="isding && showlistPopup[0]">
					<uni-icons type="closeempty" size="20" v-if="showlistPopupIndex + 1 >= showlistPopup.length"
						@click="(isding = false), $refs.popuptype1.close()"
						style="position: absolute;right: 10rpx;top:-5rpx;width: 40rpx;height: 40rpx;"></uni-icons>
					<uni-icons type="closeempty" size="20" v-else @click="nextPopup()"
						style="position: absolute;right: 10rpx;top: -5rpxs;width: 40rpx;height: 40rpx;"></uni-icons>
					<view class="titlepop">{{ showlistPopup[showlistPopupIndex].title }}</view>
					<view class="box">
						<view class="notice">
							<view class="myAnchor" v-html="showlistPopup[showlistPopupIndex].content"></view>
						</view>
						<view class="buttonview " @click="openWeb(showlistPopup[showlistPopupIndex].jumpUrl)"
							v-if="showlistPopup[showlistPopupIndex].buttonName">
							{{ showlistPopup[showlistPopupIndex].buttonName }}
						</view>
					</view>
				</uni-card>
			</template>
			<view class=""
				v-if="showlistPopup.length>0&&showlistPopup[showlistPopupIndex].type1=='1' &&showlistPopup[showlistPopupIndex].type=='1'"
				style="position: relative;">

				<template v-for="(item,index) in showlistPopup">
					<view class="" v-show="showlistPopupIndex==index" :key="index">

						<view class="" v-show="!loadimage&&popupimageTime==null">
							<view v-if="index + 1 >= showlistPopup.length"
								@click="(isding = false), $refs.popuptype1.close()" class="" style="position: fixed;
					top: 0rpx; right: 0rpx; z-index: 999; padding: 40rpx 20rpx 20rpx 20rpx;">
								<image class="image60" src="@/static/img/close.png" mode=" widthFix"></image>
							</view>
							<view v-else @click="nextPopup()" class="" style="position: fixed;
			top: 0rpx; right: 0rpx; z-index: 999; padding: 40rpx 20rpx 20rpx 20rpx;">
								<image class="image60" src="@/static/img/close.png" mode=" widthFix"></image>
							</view>
						</view>
						<view :style="{maxHeight: windowHeight+'rpx', maxWidth: '100vw',overflow: 'auto'}">

							<loadImage :src="showlistPopup[index].buttonName" @load="loadforimage"
								@error="errorforimage" mode="widthFix"></loadImage>
						</view>
					</view>
				</template>
			</view>
		</uni-popup>
		<!-- 普通弹窗 -->
		<uni-popup ref="toNoticeitem">
			<uni-card class="bgfff m-b-20  card1 " margin="0px"
				:padding="toNoticeitem.buttonName ? '20px 0px 40px 0' : '20px  0px 0px 0px'" :is-shadow="false"
				:border="false">
				<uni-icons type="closeempty" size="20" @click="(toNoticeitem = ''), $refs.toNoticeitem.close()"
					style="position: absolute;right: 10rpx;top: 5rpx;width: 40rpx;height: 40rpx;"></uni-icons>

				<view class="titlepop">{{ toNoticeitem.title }}</view>
				<view class="box">
					<view class="notice">
						<view class="myAnchor" v-html="toNoticeitem.content"></view>
					</view>
					<view class="buttonview " @click="openWeb(toNoticeitem.jumpUrl)" v-if="toNoticeitem.buttonName">
						{{ toNoticeitem.buttonName }}
					</view>
				</view>
			</uni-card>
		</uni-popup>
		<tabbar index="0"></tabbar>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				// 弹窗
				isding: false,
				showlistPopup: [],
				showlistPopupIndex: 0, //弹窗提示下标
				list: [{}],
				listPopup: [], //弹窗数组
				// 轮播图
				getImagesData: [],

				current: 0,
				swiperDotIndex: 0,
				dotsStyles: {
					backgroundColor: 'rgba(83, 200, 249,0.3)',
					border: '1px rgba(83, 200, 249,0.3) solid',
					color: '#fff',
					selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
					selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
				},
				C2CRankData: [],
				C2CTopData: [],
				changeColor: {},
				searchValue: '',
				Interval: null,
				toNoticeitem: '',
				// 弹窗图片
				loadimage: false,
				popupimageTime: null,
				loadforimageArr: [],
			};
		},

		computed: {
			//借助mapState生成计算属性：
			...mapState({
				headPortrait: state => state.user.headPortrait,
				email: state => state.user.email,
				invitationCode: state => state.user.invitationCode
			}),
			stroeChange() {
				return this.$store.state.socket.stroeChange;
			}
		},

		watch: {
			isding: {
				handler() {
					if (this.isding && this.showlistPopup[0] && uni.getStorageSync('userInfo').token) {
						// console.log(this.isding && this.showlistPopup[0], "this.isding && this.showlistPopup[0]")
						this.openPopup('popuptype1', 'center');
					}
				},
				immediate: true
			},
			stroeChange: {
				handler(newVal, oldVal) {
					this.C2CRankData = this.$store.state.socket.websocketData.C2CRank;
					this.C2CTopData = this.$store.state.socket.websocketData.C2CTop;
				},
				deep: true
			}
		},
		onLoad() {
			clearInterval(this.Interval);
			this.initHTTP();
			// console.log(this.windowHeight, "windowHeight")
		},
		onShow() {
			clearInterval(this.Interval);
			this.changeColor = uni.getStorageSync('changeColor');
			// console.log(this.changeColor, 'changeColor');
			this.C2CRankData = this.$store.state.socket.websocketData.C2CRank;
			this.C2CTopData = this.$store.state.socket.websocketData.C2CTop;
			this.swiperfun();
		},
		onHide() {

			clearInterval(this.Interval);
		},
		methods: {
			async initHTTP() {
				await this.getWebSiteAnnouncement();
				await this.getImages();
				let value = await uni.getStorageSync('istitle');
				let arr = this.listPopup.map(item => {
					return Object.assign(item, {
						show: false
					});
				});
				this.showlistPopup = [];
				// console.log(arr, this.listPopup, 'arrarrarr');
				if (value.length == 0 || !value) {
					this.isding = true;
					arr = this.listPopup.map(item => {
						return Object.assign(item, {
							show: true
						});
					});
					this.showlistPopup = arr;
					if (uni.getStorageSync('userInfo').token) {
						await uni.setStorageSync('istitle', arr);
					}
				} else {
					arr.map(arritem => {
						value.map(valueitem => {
							if (valueitem.id == arritem.id) {
								arritem.show = true;
								return;
							}
						});
					});
					arr.map(arritem => {
						if (arritem.show == false) {
							this.isding = true;
							arritem.show = true;
							this.showlistPopup.push(arritem);
							return;
						}
					});
					value = [...value, ...arr];
					// var newArr = new Set(value)

					let map = new Map();
					for (let item of value) {
						if (!map.has(item.id)) {
							map.set(item.id, item);
						}
					}
					value = [...map.values()];
					// this.listPopup = value
					if (uni.getStorageSync('userInfo').token) {
						await uni.setStorageSync('istitle', value);
					}
				}
			},
			maskClick() {
				if (this.showlistPopupIndex + 1 >= this.showlistPopup.length) {
					this.isding = false
					this.$refs.popuptype1.close()

				} else {
					this.nextPopup()
				}
			},
			loadforimage(event) {
				this.popupimageclearInterval()
				console.log(event, "loadforimage")
			},
			closeP() {
				this.$refs.popupLeft.close();
			},
			toNotice(item) {
				this.toNoticeitem = item;
				this.$refs.toNoticeitem.open('center');
			},
			backGroundColor(value) {
				if (value > 0) {
					if (this.changeColor.value == 0 || !this.changeColor) {
						return 'rgba(218, 82, 82, 0.2)';
					} else {
						return 'rgba(62, 173, 93, 0.2)';
					}
				} else {
					if (this.changeColor.value == 1) {
						return 'rgba(218, 82, 82, 0.2)';
					} else {
						return 'rgba(62, 173, 93, 0.2)';
					}
				}
			},
			textColor(value) {
				if (value > 0) {
					if (this.changeColor.value == 0 || !this.changeColor) {
						return 'rgb(233, 63, 79)';
					} else {
						return 'rgb(18, 184, 135)';
					}
				} else {
					if (this.changeColor.value == 1) {
						return 'rgb(233, 63, 79)';
					} else {
						return 'rgb(18, 184, 135)';
					}
				}
			},
			swiperfun() {
				this.Interval = setInterval(() => {
					if (this.current >= this.getImagesData.length - 1) {
						this.current = 0;
					} else {
						this.current++;
					}
				}, 3000);
			},
			// 下一条弹窗
			nextPopup() {
				this.showlistPopupIndex++;
			},

			getImages() {
				return this.$api.home.getImages().then(res => {
					this.getImagesData = res;
				});
			},
			getWebSiteAnnouncement() {
				let parmas = {
					type: '' //是 int 类型（ 0： 跑马灯， 1： 弹窗）
				};
				this.showlistPopupIndex = 0;
				return this.$api.home
					.getWebSiteAnnouncement(this.deleteInvalidParam(parmas))
					.then(res => {
						this.list = res;
						if (res.length > 0) {
							// document.getElementById('myAnchor').innerHTML = res[0].content;
							// 弹窗公告
							this.listPopup = this.list.filter((item, index, arr) => {
								if (item.type == 1) {
									return item;
								}
							});
							// console.log(this.listPopup, 'this.listPopup');
						}
						let getWebSite = {
							listAll: this.list,
							listPopup: this.listPopup
						};
						uni.setStorageSync('getWebSite', getWebSite);
					})
					.catch(err => {
						this.showlistPopupIndex = 0;
						uni.showToast({
							title: err.description,
							icon: 'none'
						});
					});
			},
			openPopup(popup, type) {
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs[popup].open(type);
				if (this.showlistPopup[this.showlistPopupIndex].type1 == '1' && this
					.showlistPopup[this.showlistPopupIndex]
					.type == '1') {
					clearInterval(this.popupimageTime)
					this.popupimageTime = null
					let time = 0
					this.loadimage = true
					this.popupimageTime = setInterval(() => {
						time++
						if (time >= 5) {
							this.popupimageclearInterval()
						}
						console.log(time, this.popupimageTime, this.loadimage, "time")
					}, 1000)
				}
			},
			popupimageclearInterval() {
				uni.hideLoading()
				clearInterval(this.popupimageTime)
				this.popupimageTime = null
				this.loadimage = false
				// console.log('popupimageclearInterval', "显示关闭")
			},
			errorforimage() {
				this.popupimageclearInterval()
			},
			// 轮播图change
			change(e) {
				this.current = e.detail.current;
			},
			// 轮播图点击
			clickItem(e) {
				this.current = e;
			},
			inputChange(e) {
				this.searchValue = e.detail.value.toUpperCase();
			},
			backGroundColor(value) {
				if (value > 0) {
					if (this.changeColor.value == 0 || !this.changeColor) {
						return 'rgba(218, 82, 82, 0.2)';
					} else {
						return 'rgba(62, 173, 93, 0.2)';
					}
				} else {
					if (this.changeColor.value == 1) {
						return 'rgba(218, 82, 82, 0.2)';
					} else {
						return 'rgba(62, 173, 93, 0.2)';
					}
				}
			},
			textColor(value) {
				if (value > 0) {
					if (this.changeColor.value == 0 || !this.changeColor) {
						return 'rgb(233, 63, 79)';
					} else {
						return 'rgb(18, 184, 135)';
					}
				} else {
					if (this.changeColor.value == 1) {
						return 'rgb(233, 63, 79)';
					} else {
						return 'rgb(18, 184, 135)';
					}
				}
			},
			ErrSrc(e, item) {
				this.$set(item, 'defaultSrc', true);
				// this.ImgSrc = this.errSrc;
			},
			loadSrc(e) {
				console.log('图片加载失败', e);
				// this.ImgSrc = this.errSrc;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.main {
		background-color: #eef1f5;

		.info-box {
			padding: 20rpx 20rpx 0rpx 20rpx;
			background-color: #fff;
		}

		.card1 {
			position: relative;
			width: 70vw;
			// height: 480rpx;
			color: #333;

			.titlepop {
				color: #000;
				text-align: center;
				font-size: 32rpx;
			}

			.box {
				.notice {
					display: flex;
					flex-direction: column;
					align-items: center;
					overflow-y: auto;
					width: 100%;

					height: 60vh;

					.myAnchor {
						margin-bottom: 80rpx;
					}
				}

				.buttonview {
					position: absolute;
					bottom: 20rpx;
					left: 20rpx;
					right: 20rpx;
					padding: 0 20rpx;
					text-align: center;
					min-width: 5.625rem;
					line-height: 80rpx;
					border-radius: 8rpx;
					color: rgb(255, 255, 255);
					background-color: rgb(26, 187, 151);
					font-size: 24rpx;
					border: none;
					overflow: hidden;
				}
			}
		}
	}

	.avatar {
		height: 80%;
	}

	.swiper-box {
		width: 100%;
		border-radius: 10rpx;
		overflow: hidden;
		height: 300rpx;
	}

	.swiper-item-- {
		border-radius: 10rpx;
		overflow: hidden;
		// display: flex;

		// flex-direction: column;
		// justify-content: center;
		// align-items: center;
		height: 300rpx;
		color: #fff;
	}

	.swiper-item {
		height: 300rpx;
		border-radius: 10rpx !important;
		overflow: hidden !important;
		width: 710rpx;
	}

	// .image {
	// 	width: 750rpx;
	// }

	.popup-content {
		width: 70vw;
		// height: calc(100vh);
		height: calc(100vh - 64rpx);
		overflow: auto;
		padding: 32rpx;
	}

	.quotation {
		padding: 40rpx;
		background-color: #fff;

		.text1 {
			color: #333;

			.text1-weight {
				font-weight: 700;
			}

			.text1-si {
				font-size: 24rpx;
			}
		}

		.text2 {
			color: #333;
		}

		.text3 {
			color: rgb(233, 63, 79);
		}

		.item-box {
			width: 100%;

			.item {
				flex: 0 1 15%;

				.image {
					width: 60rpx;
				}
			}
		}
	}

	.content {
		.title-box {
			border-bottom: 1rpx solid rgba(184, 198, 216, 0.16);

			.title {
				position: relative;
				font-size: 30rpx;
				display: inline-block;
				height: 80rpx;
				line-height: 80rpx;
				font-weight: 500;
				color: #000;
			}
		}

		.title::after {
			content: ' ';
			position: absolute;
			bottom: 0;
			left: 50%;
			-webkit-transform: translateX(-50%);
			transform: translateX(-50%);
			width: 40%;
			height: 6rpx;
			background: #1abb97;
		}

		padding-bottom: 160rpx !important;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		// height: calc(100vh - 210rpx);

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
									font-weight: 700;
									font-size: 30rpx;
								}

								.nameCurr {
									font-size: 24rpx;
								}
							}

							.volume {
								font-size: 22rpx;
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

	.news {
		// height: 48rpx;
		// padding-top: 20rpx;
		// padding-bottom: 20rpx;
		flex-flow: row nowrap;
		font-size: 26rpx !important;
		color: 333;

		.news-swiper {
			width: 90%;
			margin-left: 30rpx;
			height: 48rpx;
		}

		.news-bg {
			width: 30rpx;
			height: 30rpx;
		}

		.news-content {
			display: flex;
			justify-content: space-between;
			width: calc(100%-100rpx);
			height: 100%;
			align-items: center;
		}
	}
</style>
