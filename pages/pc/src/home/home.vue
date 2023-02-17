<template>
	<view class="page">
		<headtop :indexpage="0" type="single"></headtop>
		<view class="downloadAndH5">
			<view class="">
				<view class="text1">
					<uni-title type="h1" :title="$t('globalLeader')+$t('digital')" color="#fff"></uni-title>
				</view>
				<view class="text2">
					<uni-title type="h3" :title="$t('technical')" color="#fff"></uni-title>
				</view>
				<view class="">
					<text class="a-link" @click="routeTo('/pages/pc/src/download/download')">IOS Download</text>
					<text class="a-link" @click="routeTo('/pages/pc/src/download/download')">Android Download</text>
					<text class="a-link" @click="routeTo('/pages/tabbar/home/home')">H5 Login</text>
					<!-- <uni-link class="a-link" href="https://uniapp.dcloud.io/" :showUnderLine="false" fontSize=""
						color="#0088ff" text="IOS Download"></uni-link>
					<uni-link class="a-link" href="https://uniapp.dcloud.io/" :showUnderLine="false" color="#0088ff"
						text="Android Download"></uni-link>
					<view class="a-link" @click="routeTo('/pages/tabbar/home/home')" color="#0088ff">H5 Login</view> -->
				</view>
			</view>
		</view>
		<!-- 币 -->
		<view class="v-container">
			<view class="main-coins">
				<view class="coin-item flex align-center" v-for="(item, index) in C2CTopData" :key="item.id"
					v-if="index < 3">
					<image mode="widthFix" src="@/static/files/qzo762k.png" style="width: 30px; margin-right: 10px;" />
					<view>
						<text
							class="name">{{ item.symbolPretty.split('/')[0] }}/{{ item.symbolPretty.split('/')[1] }}</text>
						<text style="color: rgb(18, 184, 134);">{{ delZero(item.currentDaysClosePrice) }}</text>
						<text style="color: rgb(18, 184, 134);">{{ item.priceChangePercent }}%</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 我们的优势 -->
		<view class="our-feature">
			<view class="v-container">
				<h2>{{$t('advantages')}}</h2>
				<uni-row class=" ">
					<uni-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
						<view class="single">
							<view class="part-icon">
								<uni-icons class="fa" type="locked-filled" size="70" color="#0088ff"></uni-icons>
							</view>
							<view class="part-text">
								<h3>{{$t('reliable')}}</h3>
								<p :title="$t('signatures')">
									{{$t('signatures')}}
								</p>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
						<view class="single">
							<view class="part-icon">
								<uni-icons class="fa" type="headphones" size="70" color="#0088ff"></uni-icons>
							</view>
							<view class="part-text">
								<h3>{{$t('support')}}</h3>
								<p :title="$t('questions')">{{$t('questions')}}</p>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
						<view class="single">
							<view class="part-icon">
								<uni-icons class="fa" type="paperplane-filled" size="70" color="#0088ff"></uni-icons>
							</view>
							<view class="part-text">
								<h3>{{$t('worldwide')}}</h3>
								<p :title="$t('recognized')">{{$t('recognized')}}</p>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
						<view class="single">
							<view class="part-icon">
								<uni-icons class="fa" type="hand-up-filled" size="70" color="#0088ff"></uni-icons>
							</view>
							<view class="part-text">
								<h3>{{$t('strong')}}</h3>
								<p :title="$t('technical')">
									{{$t('technical')}}
								</p>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
						<view class="single">
							<view class="part-icon">
								<uni-icons class="fa" type="loop" size="70" color="#0088ff"></uni-icons>
							</view>
							<view class="part-text">
								<h3>{{$t('cryptocurrencies')}}</h3>
								<p :title="$t('listed')">{{$t('listed')}}</p>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
						<view class="single">
							<view class="part-icon">
								<uni-icons class="fa" type="map-filled" size="70" color="#0088ff"></uni-icons>
							</view>
							<view class="part-text">
								<h3>{{$t('encryption')}}</h3>
								<p :title="$t('information')">
									{{$t('information')}}
								</p>
							</view>
						</view>
					</uni-col>
				</uni-row>
			</view>
		</view>

		<!-- 他们是如何工作的 -->
		<view class="howworks text-center">
			<view class="v-container">
				<h2>{{$t('works')}}</h2>
				<uni-row style="margin-left: -10px; margin-right: -10px;">
					<uni-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8"
						style="padding-left: 10px; padding-right: 10px;">
						<view class="work-item">
							<view>
								<image src="@/static/files/qzxmyq2.png" mode="widthFix" />
							</view>
							<text>{{$t('been')}} {{$t('blockchain')}}</text>
						</view>
					</uni-col>
					<uni-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8"
						style="padding-left: 10px; padding-right: 10px;">
						<view class="work-item">
							<view>
								<image src="@/static/files/qzxmyq6.png" mode="widthFix" />
							</view>
							<text>{{$t('purchase')}} {{$t('digitalAssets')}}</text>
						</view>
					</uni-col>
					<uni-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8"
						style="padding-left: 10px; padding-right: 10px;">
						<view class="work-item">
							<view>
								<image src="@/static/files/qzxmyq9.png" mode="widthFix" />
							</view>
							<text>{{$t('transaction')}}</text>
						</view>
					</uni-col>
				</uni-row>
			</view>
		</view>
		<!-- 用户量 -->
		<view class="data24">
			<view class="v-container">
				<uni-row class="el-row" style="margin-left: -10px; margin-right: -10px;">
					<uni-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8"
						style="padding-left: 10px; padding-right: 10px;">
						<view class="data-item">
							<view class="part-icon"><i class="fa fa-dollar"></i></view>
							<view class="part-text">
								<h3>{{$t('billion430')}}</h3>
								<p>{{$t('trading')}}</p>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8"
						style="padding-left: 10px; padding-right: 10px;">
						<view class="data-item">
							<view class="part-icon"><i class="fa fa-users"></i></view>
							<view class="part-text">
								<h3>{{$t('million30')}}</h3>
								<p>{{$t('ourRegistered')}}</p>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8"
						style="padding-left: 10px; padding-right: 10px;">
						<view class="data-item">
							<view class="part-icon"><i class="fa fa-fire"></i></view>
							<view class="part-text">
								<h3>&lt;0.10%</h3>
								<p>{{$t('cost')}}</p>
							</view>
						</view>
					</uni-col>
				</uni-row>
			</view>
		</view>
		<!-- 下载 -->
		<view class="download-area">
			<view class="v-container">
				<h2>{{$t('download')}}</h2>
				<view class="flex">
					<view class="flex1">
						<p>{{$t('anywhere')}}</p>
						<canvas class=" m-b-20" id="qrcode" canvas-id="qrcode"
							style="width: 160px;height: 160px; margin: 0 auto;"></canvas>
						<view>
							<text class="a-link" @click="routeTo('/pages/pc/src/download/download')">IOS Download</text>
							<text class="a-link" @click="routeTo('/pages/pc/src/download/download')">
								Android Download</text>
							<text class="a-link" @click="routeTo('/pages/tabbar/home/home')">H5 Login</text>
							<!-- <uni-link class="a-link" href="/pages/pc/src/download/download" :showUnderLine="false"
								fontSize="" color="#0088ff" text="IOS Download"></uni-link>
							<uni-link class="a-link" href="/pages/pc/src/download/download" :showUnderLine="false"
								color="#0088ff" text="Android Download"></uni-link>
							<uni-link class="a-link" href="https://uniapp.dcloud.io/" :showUnderLine="false"
								color="#0088ff" text="H5 Login"></uni-link> -->
						</view>
					</view>
					<view class="flex1 imagearea">
						<image mode="widthFix" src="@/static/webimage/bottom-d-right.dfa96e8c.png" alt=""
							style="width: 90%;" />
					</view>
				</view>
			</view>
		</view>
		<foot></foot>
	</view>
</template>

<script>
	// https://ext.dcloud.net.cn/plugin?id=1287
	import UQRCode from '@/uni_modules/Sansnn-uQRCode/js_sdk/uqrcode/uqrcode.js';
	export default {
		data() {
			return {
				C2CTopData: ''
			};
		},

		computed: {
			stroeChange() {
				return this.$store.state.socket.stroeChange;
			}
		},

		created() {},
		watch: {
			stroeChange: {
				handler(newVal, oldVal) {
					this.C2CTopData = this.$store.state.socket.websocketData.C2CTop;
				},
				deep: true
			}
		},
		onShow() {
			this.C2CTopData = this.$store.state.socket.websocketData.C2CTop;
			console.log(this.C2CTopData, 'this.C2CTopData');
		},
		onLoad() {
			this.$nextTick(() => {
				this.makeCode(uni.getStorageSync('WEBINFO').companyAddress + '/#/pages/pc/src/download/download');
			});

		},
		methods: {
			//
			makeCode(data) {
				// 获取uQRCode实例
				var qr = new UQRCode();
				// 设置二维码内容
				qr.data = data;
				// 设置二维码大小，必须与canvas设置的宽高一致
				qr.size = 160;
				// 调用制作二维码方法
				qr.make();
				// 获取canvas上下文
				var canvasContext = uni.createCanvasContext('qrcode', this); // 如果是组件，this必须传入
				// 设置uQRCode实例的canvas上下文
				qr.canvasContext = canvasContext;
				// 调用绘制方法将二维码图案绘制到canvas上
				console.log(data, "data")
				qr.drawCanvas();
			}
		}
	};
</script>

<style lang="scss" scoped>
	.page {
		background-color: #f2f6fc;
	}

	.a-link {
		height: 60px;
		width: 220px;
		display: inline-block;
		line-height: 60px;
		background: #fff;
		color: #08f;
		border: 1px solid #08f;
		-webkit-transition: all 0.3s ease-in;
		transition: all 0.3s ease-in;
		font-weight: 700;
		font-family: Noto Sans, sans-serif;
		text-align: center;
		text-transform: uppercase;
		font-size: 16px;
		margin-right: 25px;
	}

	.a-link:hover {
		background: #08f;
		color: #fff !important;
	}

	.a-link:last-child {
		background: #08f;
		margin-right: 0;
		color: #fff !important;
	}

	.a-link:last-child:hover {
		background: #fff;
		color: #08f !important;
	}

	.downloadAndH5 {
		text-align: center;
		color: #fff;
		width: 100vw;
		padding: 180px 0;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		max-height: none;
		background: url(@/static/webimage/vc3ww.70e06aec.jpeg) no-repeat 50%;
		background-size: cover;
		overflow: hidden;
		position: relative;
		z-index: 2;

		.text1 {
			/deep/ .uni-h1 {
				font-size: 36px;
			}
		}

		.text2 {
			line-height: 220rpx;
		}

		.text1,
		.text2 {
			/deep/ .uni-title__box {
				align-items: center !important;
			}
		}
	}

	.downloadAndH5:after {
		position: absolute;
		content: '';
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background: #000050;
		opacity: 0.85;
	}

	/******/
	.v-container {
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;

		.main-coins {
			padding: 60px 0;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			-ms-flex-pack: distribute;
			justify-content: space-around;

			.flex {
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
			}

			.align-center {
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
			}

			.flex {
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
			}
		}
	}

	@media (max-width: 576px) {
		.v-container {
			max-width: 540px;

			.main-coins .coin-item {
				width: 80%;
				padding: 10px;
				background: #fff;
				margin-bottom: 10px;
				border-radius: 4px;
			}
		}
	}

	@media (max-width: 992px) {
		.v-container {
			max-width: 960px;

			.main-coins .coin-item {
				width: 80%;
				padding: 10px;
				background: #fff;
				margin-bottom: 10px;
				border-radius: 4px;
			}
		}
	}

	@media (min-width: 1200px) {
		.v-container {
			max-width: 1200px;
		}
	}

	@media screen and (max-width: 1200px) {
		.main-coins {
			padding-top: 30px;
			padding-bottom: 20px;
		}
	}

	@media screen and (max-width: 1200px) {
		.main-coins .coin-item {
			width: 80%;
			padding: 10px;
			background: #fff;
			margin-bottom: 10px;
			border-radius: 4px;
		}
	}

	.our-feature {
		background: #fff;
		padding: 60px 0;
		text-align: center;

		h2 {
			margin-bottom: 40px;
			color: #000050;
			font-size: 36px;
			font-weight: 700;
		}
	}

	.download-area .single,
	.our-feature .single {
		text-align: center;
		padding: 40px 30px;
		margin-bottom: 30px;
		-webkit-transition: all 0.3s ease-in;
		transition: all 0.3s ease-in;
		-webkit-box-shadow: 0 0 9px 2px #f5f5f5;
		box-shadow: 0 0 9px 2px #f5f5f5;
		color: #666;
		font-size: 16px;
		min-height: 300px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 6;
		-webkit-box-orient: vertical;
	}

	.download-area .single:hover,
	.our-feature .single:hover {
		-webkit-box-shadow: 0 0 19px 12px #f5f5f5;
		box-shadow: 0 0 19px 12px #f5f5f5;
	}

	.download-area .part-icon,
	.our-feature .part-icon {
		font-size: 45px;
		margin-bottom: 20px;
		color: #08f;
	}

	.download-area .single h3,
	.our-feature .single h3 {
		color: #000050;
		margin-bottom: 16px;
		font-size: 24px;
		font-weight: 600;
	}

	.download-area .part-icon .fa,
	.our-feature .part-icon .fa {
		font-weight: 900;
	}

	.download-area .single p,
	.our-feature .single p {
		line-height: 24px;
	}

	.howworks {
		background: #fff;
		padding: 40px 0;
		padding-bottom: 120px;
	}

	.text-center {
		text-align: center;
	}

	.howworks h2 {
		margin-bottom: 40px;
		color: #000050;
		font-size: 36px;
		font-weight: 700;
	}

	.howworks .work-item image {
		width: 100%;
		margin-bottom: 20px;
		cursor: pointer;
		-webkit-transition: all 0.4s;
		transition: all 0.4s;
		border-radius: 4px;
	}

	.howworks .work-item image:hover {
		-webkit-transform: scale(1.05);
		transform: scale(1.05);
	}

	.howworks .work-item text {
		font-size: 16px;
		color: #666;
		line-height: 24px;
	}

	/****/
	.data24 {
		background: url(@/static/webimage/coinin.448d8308.jpeg) no-repeat 50%;
		background-size: cover;
		overflow: hidden;
		position: relative;
		z-index: 2;
		color: #fff;
		padding: 80px 0;
	}

	.data24:after {
		position: absolute;
		content: '';
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background: #000050;
		opacity: 0.85;
	}

	.data24 .data-item {
		padding: 40px 0;
		text-align: center;
	}

	.data24 .part-icon {
		font-size: 50px;
		font-weight: 700;
		margin-bottom: 30px;
		width: 150px;
		height: 150px;
		border: 4px solid #08f;
		color: #fff;
		line-height: 150px;
		border-radius: 50%;
		position: relative;
		left: 50%;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
		margin-bottom: 24px;
	}

	.data24 .data-item h3 {
		font-size: 36px;
		margin-bottom: 20px;
	}

	.data24 .data-item p {
		font-size: 24px;
	}

	.download-area,
	.our-feature {
		background: #fff;
		padding: 60px 0;
		text-align: center;
	}

	.download-area h2,
	.our-feature h2 {
		margin-bottom: 40px;
		color: #000050;
		font-size: 36px;
		font-weight: 700;
	}

	.flex {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	.flex1 {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.download-area p {
		font-size: 16px;
		margin-bottom: 40px;
	}

	.download-area .a-link {
		display: block;
		margin: 20px auto !important;
	}

	@media screen and (max-width: 1200px) {
		.imagearea {
			display: none !important;
		}
	}
</style>
