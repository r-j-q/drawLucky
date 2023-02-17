<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('platformIntroduction')" rightText=""
			@clickLeft="routeTo(1)">
		</uni-nav-bar>
		<view class="content">

			<div style="position: relative;">
				<p>
					{{$t('platformIntroductionText')}}<br>
				</p>

			</div>
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

</style>
