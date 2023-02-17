<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('pricing')" rightText="" @clickLeft="routeTo(1)">

		</uni-nav-bar>
		<view class="">
			<radio-group @change="radioChange">
				<label class="flex_sp_be label" v-for="(item, index) in getRegionData.list" :key="item.regionCode">
					<view class="font-28">{{item.regionCode}}</view>
					<view>
						<radio :value="item.regionCode" color="#1abb97"
							:checked="item.regionCode === currentRegion.regionCode" style="transform:scale(0.7)" />
					</view>
				</label>

			</radio-group>
		</view>
		<loadMore :total="getRegionData.total" :nowPage="params.page" :pages="getRegionData.pages"></loadMore>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				scrollHeight: 0,
				loading: false,
				scrollTop: 0,
				getRegionData: "",
				currentRegion: {
					exchangeRate: 0,
					id: 16,
					regionCode: "USD",
					regionName: this.$t('USD'),
					type: 1,
				},
				params: {
					page: 1, //	是	int	页码
					pageSize: 20, //
					type: 1
				}
			}
		},
		watch: {
			getRegionData(val) {
				val.list.map((item) => {
					if (item.regionCode == this.currentRegion.regionCode) {
						this.currentRegion = item
						uni.setStorageSync('currentRegion', item)
						return
					}

				})

			}
		},
		onReachBottom(val) {
			this.lower()
		},

		onLoad() {
			this.currentRegion = uni.getStorageSync('currentRegion')
			this.getRegion()
		},
		methods: {
			lower(e) {

				this.params.page++
				if (this.params.page <= this.getRegionData.pages) {

					this.getRegion('push')
				}
			},
			getRegion(pushtype) {
				this.loading = true
				this.$api.changeValuation.getRegion(this.params).then((res) => {
					this.loading = false
					if (pushtype) {
						this.getRegionData.list.push(...res.list)
					} else {

						this.getRegionData = res
					}
				}).catch((err) => {
					this.loading = false
				})
			},
			radioChange(evt) {
				for (let i = 0; i < this.getRegionData.list.length; i++) {
					if (this.getRegionData.list[i].regionCode === evt.detail.value) {
						if (!this.$store.state.user.token) {
							this.currentRegion = this.getRegionData.list[i];
							uni.setStorageSync('currentRegion', this.getRegionData.list[i])
						} else {

							this.updateUserPricingMethod(this.getRegionData.list[i])
						}
						break;
					}
				}
			},
			updateUserPricingMethod(val) {
				this.$api.changeValuation.updateUserPricingMethod({
					pricingMethod: val.regionCode
				}).then(res => {
					this.currentRegion = val;
					this.$store.commit('user/USER_INFO_pricingMethod', val.regionCode)
					uni.setStorageSync('currentRegion', val)
				})
			}
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
