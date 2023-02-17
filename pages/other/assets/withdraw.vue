<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" @clickLeft="routeTo(1)">

			<view class="input-view">
				<uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
				<input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词"
					@confirm="confirm" />
			</view>
			<block slot="right">
				<view class="city">
					搜索
				</view>
			</block>
		</uni-nav-bar>
		<view class="content main">
			<uni-list>
				<uni-list-item title="列表左侧带略缩图"
					thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
					thumb-size="base" clickable @click="routeTo('/pages/other/me/address')" />


			</uni-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},



		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.nav-bar {
		$nav-height: 60rpx;

		.input-view {
			/* #ifndef APP-PLUS-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			// width: 500rpx;
			flex: 1;
			background-color: #f8f8f8;
			height: $nav-height;
			border-radius: 15px;
			padding: 0 15px;
			flex-wrap: nowrap;
			margin: 7px 0;
			line-height: $nav-height;
		}

		.input-uni-icon {
			line-height: $nav-height;
		}

		.nav-bar-input {
			height: $nav-height;
			line-height: $nav-height;
			/* #ifdef APP-PLUS-NVUE */
			width: 370rpx;
			/* #endif */
			padding: 0 5px;
			font-size: 12px;
			background-color: #f8f8f8;
		}
	}
</style>
