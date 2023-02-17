<template>
	<view class="foot ">
		<uni-row>
			<uni-col :span="24">
				<uni-row class="flex_center ">
					<uni-col :xs="20" :sm="20" :md="18" :lg="18" :xl="18">
						<uni-row class="top">
							<!-- <uni-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
								<view class="logo-box flex_center">

									<image class="logoimg" src="@/static/r9eeka5.png" mode="widthFix"></image>
								</view>
							</uni-col> -->
							<uni-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
								<view class="flex_center">
									<uni-section :title="$t('anywhere')" type="line" titleColor="#fff">
										<uni-group top="5" mode="">
											<view @click="routeTo('/pages/pc/src/about/about','?current=0')">
												<uni-icons type="forward" color="#2979ff" size="15"></uni-icons>
												{{$t('userAgreement')}}
											</view>
											<view @click="routeTo('/pages/pc/src/about/about','?current=1')">
												<uni-icons type="forward" color="#2979ff" size="15"></uni-icons>
												{{$t('privacyPolicy')}}
											</view>
											<view @click="routeTo('/pages/pc/src/about/about','?current=2')">
												<uni-icons type="forward" color="#2979ff" size="15"></uni-icons>
												{{$t('statement')}}
											</view>
											<view @click="routeTo('/pages/pc/src/about/about','?current=3')">
												<uni-icons type="forward" color="#2979ff" size="15"></uni-icons>
												{{$t('rules')}}
											</view>
										</uni-group>
									</uni-section>
								</view>
							</uni-col>
							<uni-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
								<view class="flex_center">
									<uni-section :title="$t('service')" type="line" titleColor="#fff">
										<uni-group top="5" mode="">
											<view @click="routeTo('/pages/pc/src/about/about','?current=4')">
												<uni-icons type="forward" color="#2979ff" size="15"></uni-icons>
												{{$t('novices')}}
											</view>
											<view @click="routeTo('/pages/pc/src/about/about','?current=5')">
												<uni-icons type="forward" color="#2979ff" size="15"></uni-icons>
												{{$t('commonProblem')}}
											</view>
											<view @click="routeTo('/pages/pc/src/about/about','?current=6')">
												<uni-icons type="forward" color="#2979ff" size="15"></uni-icons>
												{{$t('rate')}}
											</view>
											<view @click="routeTo('/pages/pc/src/about/about','?current=0')">
												<uni-icons type="forward" color="#2979ff" size="15"></uni-icons>
												{{$t('about')}}
											</view>
										</uni-group>
									</uni-section>
								</view>
							</uni-col>
						</uni-row>
					</uni-col>
				</uni-row>
			</uni-col>
			<uni-col :span="24">
				<view class=" tac">
					COPYRIGHT © 2016-2023 . ALL RIGHTS RESERVED.
				</view>
			</uni-col>
		</uni-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},



		// onLoad() {

		// },
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.logo-box {
		padding-top: 80rpx;

		.logoimg {
			width: 140rpx;
		}
	}

	.foot {
		color: #fff;
		padding: 80rpx 0;
		width: 100%;
		background: #000050;

		.top {
			padding-bottom: 40rpx;
			margin-bottom: 40rpx;
			border-bottom: 1rpx solid rgba(0, 136, 255, .3)
		}

		/deep/.uni-section {
			color: #fff;
			background: #000050;

			.uni-group {
				color: #fff;
				background: #000050;
			}
		}
	}
</style>
