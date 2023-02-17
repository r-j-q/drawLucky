<template>
	<view class="headerInfo " :style="{paddingTop: statusBarHeight+'rpx'}">
		<view class="flex_start">

			<view class="image" @click="closeP(),routeTo('/pages/other/me/account')">
				<image class="image" :src="headPortrait||'../../../static/img/icon_empty_user_logo.png'"
					mode="widthFix">
				</image>
			</view>
			<view class="info">
				<template v-if="username">
					<view class="c666 m-b-10">
						{{username}}
					</view>
					<view class="c666 flex_start" @click="copyfun(invitationCode)">
						<view>
							UUID: {{invitationCode}}
						</view>
						<view class="image30 m-l-10">
							<image class="image30 " src="../../static/img/icon-copy.png" mode="widthFix"></image>
						</view>
					</view>
				</template>
				<template v-else>
					<view class="c666 " @click="closeP(),routeTo('/pages/user/login/login')">
						{{$t('homloginAndRegister')}}
					</view>
				</template>
			</view>
		</view>
		<view class="flex_sp_be item-box m-b-40 m-t-40 ai_start">
			<view class="item tac" @click="closeP(),routeTo('/pages/other/assets/depositDetail')">
				<image class="image50" src="../../static/img/icon-home-deposit.png" mode="widthFix"></image>
				<view class="tac m-t-10">
					{{$t('rechargeMoney')}}
				</view>
			</view>
			<view class="item tac" @click="closeP(),routeTo('/pages/other/assets/withdrawDetail')">
				<image class="image50" src="../../static/img/icon-home-withdraw.png" mode="widthFix"></image>

				<view class="tac m-t-10">
					{{$t('withdrawCoins')}}
				</view>
			</view>
			<view class="item tac" @click="closeP(),routeTo('/pages/other/me/serviceCenter')">
				<image class="image50" src="@/static/img/icon-home-service.png" mode="widthFix" @error="ErrSrc($event)">
				</image>

				<view class="tac m-t-10">
					{{$t('customer')}}
				</view>
			</view>
			<!-- <view class="item tac    " @click="routeTo('/pages/other/settings/settings')">
				<image class="image50" src="../../static/img/icon-setting.png" mode="widthFix"></image>
				<view class="tac m-t-10">
					{{$t('home.homePopupLeft.setUp')}}
				</view>
			</view> -->
		</view>

		<view class="flex_start flex-RN itemmain" @click="closeP(),routeTo('/pages/other/home/verification')">
			<view class="image40">

				<image class="image40" src="../../static/img/icon-home-kyc.png" mode="widthFix"></image>
			</view>
			<view class="m-l-20">
				{{$t('identityVerification')}}
			</view>
		</view>
		<view class="flex_start flex-RN itemmain" @click="closeP(),routeTo('/pages/other/me/address')">
			<view class="image40">
				<image class="image40" src="../../static/img/icon-home-address.png" mode="widthFix"></image>
			</view>
			<view class="m-l-20">
				{{$t('withdrawalAddress')}}
			</view>
		</view>
		<view class="flex_start flex-RN itemmain" @click="closeP(),routeTo('/pages/other/home/c2cPaymentMethods')">
			<view class="image40">
				<image class=" image40" src="../../static/img/icon-home-c2c.png" mode="widthFix">
				</image>
			</view>
			<view class="m-l-20">
				{{$t('paymentMethodInFiatCurrency')}}
			</view>
		</view>
		<view class="flex_start flex-RN itemmain" @click="closeP(),routeTo('/pages/other/me/help')">
			<image class="image40" src="../../static/img/icon-home-help.png" mode="widthFix"></image>
			<view class="m-l-20">
				{{$t('help')}}
			</view>
		</view>
		<view class="flex_start flex-RN itemmain" @click="closeP(),routeTo('/pages/other/me/changeValuation')">
			<image class="image40" src="../../static/img/icon-home-price.png" mode="widthFix"></image>
			<view class="m-l-20">
				{{$t('pricing')}}
			</view>
		</view>
		<view class="flex_start flex-RN itemmain   " @click="closeP(),routeTo('/pages/other/settings/settings')">
			<image class="image40" src="../../static/img/icon-setting.png" mode="widthFix"></image>
			<view class="m-l-20">
				{{$t('setUp')}}
			</view>
		</view>
		<!-- <view class="foot flex_sp_be">
			<view class=" flex_center footitem left " @click="routeTo('/pages/other/settings/settings')">
				<image class="image30" src="../../static/img/icon-setting.png" mode="widthFix"></image>
				<view class="m-l-20">
					{{$t('home.homePopupLeft.setUp')}}
				</view>
			</view>
			<view class=" flex_center footitem rgiht ">

			</view>
		</view> -->
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				event: ""
			}
		},
		computed: {
			// this.$refs.popupLeft.close()
			//借助mapState生成计算属性：
			...mapState({
				headPortrait: (state) => state.user.headPortrait,
				username: (state) => state.user.username,
				invitationCode: (state) => state.user.invitationCode,
			}),
		},
		methods: {
			closeP() {
				this.$emit('closeP')
			},
			ErrSrc($event) {
				this.event = $event
				console.log($event, "$event");
			}
		}
	}
</script>

<style lang="scss" scoped>
	.headerInfo {
		max-height: calc(100vh - 64rpx);
		overflow: auto;

		.image {
			width: 100rpx;
			height: 100rpx;
			overflow: hidden;
			border-radius: 50%;
		}

		.info {
			margin-left: 40rpx;
		}
	}

	.item-box {
		width: 100%;
		padding: 20rpx 0;

		.item {
			flex: 0 1 33%;
		}
	}

	.itemmain {
		width: 100%;
		// line-height: 60rpx;
		padding: 30rpx 0;
		font-size: 30rpx;
		// vertical-align: baseline !important;
	}

	.foot {
		position: absolute;
		bottom: 40rpx;
		left: 0;
		width: 100%;
		border-top: 1rpx solid rgba(184, 198, 216, .16);
		border-bottom: 1rpx solid rgba(184, 198, 216, .16);

		.footitem {
			flex: 0 1 50%;
			line-height: 100rpx;
		}

		.left {
			border-right: 1rpx solid rgba(184, 198, 216, .16);
		}
	}
</style>
