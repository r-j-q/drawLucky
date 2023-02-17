<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" rightText="" :title="$t('about')" @clickLeft="routeTo(1)">
		</uni-nav-bar>
		<view class="flex_center">
			<image class="r9eeka5" src="@/static/r9eeka5.png" mode="widthFix"></image>
		</view>
		<uni-list>
			<uni-list-item clickable showArrow :title="$t('platformIntroduction')"
				@click="routeTo('/pages/other/normal/introduce')" />
			<uni-list-item clickable showArrow :title="$t('privacyPolicy')"
				@click="routeTo('/pages/other/normal/privacy')" />
			<uni-list-item clickable showArrow :title="$t('userAgreement')"
				@click="routeTo('/pages/other/normal/protocol')" />
			<uni-list-item :title="$t('officialWebsite')" @click="openWeb(companyAddress)"
				:rightText='companyAddress' />
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				companyAddress: uni.getStorageSync('WEBINFO').companyAddress
			}
		},



		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.r9eeka5 {
		width: 390rpx;
	}
</style>
