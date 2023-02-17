<template>
	<view class="">
		<image v-show="!state" class="image50"
			style="position: fixed; top:calc(50vh - 25rpx) ; left: calc(50vw - 25rpx); z-index: 999;"
			src="@/static/img/loding.png" :mode="mode"></image>
		<image v-show="state" style="width: 750rpx;" :src="src" mode="widthFix" @load="loadforimage"
			@error="errorforimage">
		</image>
	</view>
</template>

<script>
	export default {
		name: 'loadImage',
		props: {
			src: {
				type: String,
				default: ''
			},
			mode: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				state: false,
			}
		},
		methods: {
			loadforimage(event) {
				this.state = true
				this.$emit('load', event)
			},
			errorforimage(event) {
				this.state = true
				this.$emit('error', event)
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>
