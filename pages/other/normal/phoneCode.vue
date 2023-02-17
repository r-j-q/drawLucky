<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('country')" @clickLeft="routeTo(1)">

			<!-- <view class="input-view">
				<uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
				<input confirm-type="search" v-model="inputs" class="nav-bar-input" type="text" placeholder="输入搜索关键词"
					@confirm="confirm" />
			</view> -->
			<!-- <block slot="right">
				<view class="city">
					搜索
				</view>
			</block> -->
		</uni-nav-bar>
		<view class="content main">
			<uni-indexed-list :options="list" :show-select="true" label="regionName" @click="bindClick" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputs: '',
				list: []
			}
		},



		onLoad() {
			// list: airport.list
			this.getgetRegion()
		},
		methods: {
			getgetRegion() {
				this.$api.changeValuation.getRegion({
					type: 0, //	是	int	类型（0：地区，1：币种，2：真实货币）
					page: 1, //	是	int	页码
					pageSize: 2000, //	是	int	每页条数
				}).then((res) => {

					this.getRegionData = res.list
					let region = {
						exchangeRate: '',
						id: '',
						regionCode: "",
						regionName: "",
						type: '',
					}
					let obj
					this.getRegionData.map((item, index) => {
						if (item.regionName.charAt(0) == region.regionName.charAt(0)) {
							obj.data.push(item)
							if (index == this.getRegionData.length - 1) {
								this.list.push(obj)
							}
						} else {
							if (index != 0) {
								this.list.push(obj)
							}
							region = item
							obj = {
								letter: region.regionName.charAt(0),
								data: [item]
							}
						}
					})
					console.log(this.list, "this.list")
				})
			},
			bindClick(event) {
				console.log('点击item，返回数据', event)
				this.$store.commit('user/setrealRegionobj', event.item.name)
				this.routeTo(1)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav-bar {
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
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

	.main {
		position: relative;
		min-height: calc(100vh - 44px);
		padding-bottom: 44px;
	}
</style>
