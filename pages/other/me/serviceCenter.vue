<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('onlineService')" rightText="" @clickLeft="routeTo(1)">
		</uni-nav-bar>
		<view class="content main">
			<!-- <view class="font-32 m-b-40">{{ $t('onlineService') }}</view> -->
			<view class="flex_sp_be p-t-40">
				<view class="itemservice m-b-40" @click="openWeb(customerServiceLink)">
					<view class="tac m-b-20">
						<image class="service-chat" src="@/static/img/service-chat.png" mode="widthFix"></image>
					</view>
					<view class="tac">{{$t('onlineService')}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customerServiceLink: uni.getStorageSync('WEBINFO').customerServiceLink
			};
		},

		onLoad() {},
		methods: {}
	};
</script>

<style lang="scss" scoped>
	.main {
		padding-top: 30rpx;

		.itemservice {
			flex: 0 1 50%;

			.service-chat {
				width: 100rpx;
			}
		}
	}
</style>
