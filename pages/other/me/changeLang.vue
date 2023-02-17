<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('language')" rightText="" @clickLeft="routeTo(1)">

		</uni-nav-bar>
		<scroll-view scroll-y="true" :style="{height:windowHeight+'rpx'}">
			<radio-group @change="radioChange">
				<label class="flex_sp_be label" v-for="(item, index) in langList" :key="item.value">
					<view class="font-28">{{item.name}}</view>
					<view>
						<radio :value="item.value" color="#1abb97" :checked="item.value === current"
							style="transform:scale(0.7)" />
					</view>
				</label>
			</radio-group>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				current: uni.getLocale() || 'en',
			}
		},



		onLoad() {},
		methods: {
			radioChange(evt) {
				for (let i = 0; i < this.langList.length; i++) {
					if (this.langList[i].value === evt.detail.value) {
						this.current = this.langList[i].value;

						// this.seti18nLocale(evt.detail.value)
						this.$store.dispatch('user/SET_LANGUAGE', evt.detail.value)
						break;
					}
				}
			},
			// 设置系统语言
			seti18nLocale(i18n) {
				this.$i18n.locale = i18n
				uni.setLocale(i18n)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.label {
		padding: 15rpx 30rpx;
		// border-bottom: 2rpx solid #f2f2f5;
		line-height: 70rpx;
		height: 70rpx;

	}

	.label:nth-last-child(1) {
		border: none;
	}
</style>
