<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar backgroundColor='#f6f6f6' :title="$t('serviceAgreement')" left-icon="left"
			rightText="" @clickLeft="routeTo(1)">
		</uni-nav-bar>
		<view class="content main">
			<view class="" v-html="$t('trustProtocol')">

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},



		onLoad() {},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.main {
		margin-top: 50rpx;

	}

	.app {
		min-height: 100vh;
		background-color: #f6f6f6;
	}
</style>
