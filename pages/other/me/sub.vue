<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar :border="false" backgroundColor="#1abb97" left-icon="left" rightText=""
			@clickLeft="routeTo(1)"></uni-nav-bar>
		<view class="flex_sp_be head">
			<view class="">
				<view class="text1">{{ $t('help') }}</view>
				<view class="text2">{{ $t('welcome') }}</view>
			</view>
			<uni-icons type="fire-filled" color="red" size="30"></uni-icons>
		</view>
		<view class="content main">
			<uni-card padding="20rpx" spacing="0" margin="0">
				<uni-list :border="false">
					<uni-list-item :border="false" :title="$t('commonProblem')" />
					<uni-list-item :border="false" clickable showArrow :title="info.name"
						@click="routeTo('/pages/other/me/detail', '?detail=' + JSON.stringify(info))" />
				</uni-list>
			</uni-card>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {}
			};
		},

		onLoad(options) {
			this.info = JSON.parse(options.info);
		},
		methods: {}
	};
</script>

<style lang="scss" scoped>
	.head {
		background-color: #1abb97;
		height: 300rpx;
		padding: 0 30rpx;
		margin-bottom: 30rpx;

		.text1 {
			font-size: 40rpx;
			font-weight: 700;
		}
	}

	.main {
		position: relative;
		top: -100rpx;
	}
</style>
