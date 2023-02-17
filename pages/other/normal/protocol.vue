<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" rightText="" :title="$t('userAgreement')" @clickLeft="routeTo(1)">
		</uni-nav-bar>
		<view class="content">
			<view v-html="$t('userAgreementText')">

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},

		onLoad() {},
		methods: {}
	};
</script>

<style lang="scss" scoped></style>
