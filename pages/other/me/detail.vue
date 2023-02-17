<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar backgroundColor='#f6f6f6' left-icon="left" rightText="" @clickLeft="routeTo(1)">
		</uni-nav-bar>
		<view class="content main">
			<view class="m-b-40 tac">
				{{detail.name}}
			</view>
			<view class="" v-html="detail.text">

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: ""
			}
		},



		onLoad(options) {
			this.detail = JSON.parse(options.detail)
		},
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
