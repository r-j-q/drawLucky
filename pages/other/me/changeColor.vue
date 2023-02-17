<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('preference')" rightText="" @clickLeft="routeTo(1)">

		</uni-nav-bar>
		<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="flex_sp_be label" v-for="(item, index) in items" :key="item.value">
					<view class="font-28">{{item.name}}</view>
					<view>
						<radio :value="item.value" color="#1abb97" :checked="item.value === current"
							style="transform:scale(0.7)" />
					</view>
				</label>
			</radio-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
						value: '0',
						name: this.$t('upRed'),
						checked: 'true'
					},
					{
						value: '1',
						name: this.$t('upGreen')
					}
				],
				current: uni.getStorageSync('changeColor').value || '0',
			}
		},

		onLoad() {

		},
		methods: {
			radioChange(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.detail.value) {
						this.current = this.items[i].value;
						uni.setStorageSync('changeColor', this.items[i])
						break;
					}
				}
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
