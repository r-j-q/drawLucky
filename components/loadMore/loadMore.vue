<template>
	<view class="">
		<uni-load-more v-show="!loading&&total!=0" iconType="auto" :status="nowPage<pages?'more':'noMore'" :contentText="{
						contentdown: $t('contentdown'),
						contentrefresh: $t('contentrefresh'),
						contentnomore: $t('contentnomore')
					}" />

		<uni-load-more v-show="loading" iconType="auto" status="loading" />
		<view class="noData" v-show="total==0&&!loading">
			<image src="../../static/trade/bg.png" />
			{{$t('noData')}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			total: {
				type: Number || String,
				default: 0
			},
			nowPage: {
				type: Number || String,
				default: 0
			},
			pages: {
				type: Number || String,
				default: 1
			},
			// loading: {
			// 	type: Boolean,
			// 	default: this.store.state.system.loading
			// }
		},
		data() {
			return {}
		},
		watch: {
			nowPage(val) {
				console.log(val, 'nowPage');
			},
			pages(val) {
				console.log(val, "pages");
			},
		},

		computed: {
			loading() {
				return this.$store.state.system.loading
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.noData {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
		color: #c0c4cc;
		margin-top: 80rpx;

		image {
			width: 328rpx;
			height: 328rpx;
			margin-bottom: 60rpx;
		}
	}
</style>
