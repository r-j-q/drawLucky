<template>
	<view class="page assets">
		<headtop type="single"></headtop>
		<view class="main">
			<uni-card :is-shadow="false" :border="false" padding="32px 14px">
				<view class="flex_sp_be">
					<view class="flex_start">
						<text>{{$t('totalAssets')}}
						</text>

						<uni-icons v-if='showEye' type="eye-filled" size="25" @click="showEye=!showEye"></uni-icons>
						<uni-icons v-else type="eye-slash-filled" size="25" @click="showEye=!showEye"></uni-icons>
					</view>
					<view class="flex_end">
						<button class="el-button " type="default" plain="true"
							@click="routeTo('/pages/pc/src/transfer/transfer')">{{$t('transfer')}}</button>
						<button class="el-button m-l-20" type="default" plain="true"
							@click="routeTo('/pages/pc/src/withdraw/withdraw')">{{$t('withdrawCoins')}}</button>
						<button class="el-button button1 m-l-20" type="default"
							@click="routeTo('/pages/pc/src/deposit/deposit')">{{$t('rechargeMoney')}}</button>

						<view class="el-button button2 m-l-20 flex_center"
							@click="routeTo('/pages/pc/src/finance/finance')">
							<text>

								{{$t('financialRecords')}}
							</text>
							<uni-icons type="forward" size="15"></uni-icons>

						</view>
					</view>
				</view>
				<view class="num">

					<span>{{shownum(getFloat((getBalanceOrAssetsData[0].usableAB+getBalanceOrAssetsData[1].usableAB+getBalanceOrAssetsData[2].usableAB+getBalanceOrAssetsData[3].usableAB),4))}}
						USDT</span><em>{{shownum('≈'+(getFloat((getBalanceOrAssetsData[0].usableABC+getBalanceOrAssetsData[1].usableABC+getBalanceOrAssetsData[2].usableABC+getBalanceOrAssetsData[3].usableABC),2))+' '+currentRegion.regionCode)}}
					</em>
				</view>
			</uni-card>
			<view class="tabs ">
				<view class="tab-item " :class="active==0?'active':''" @click="active=0"> {{$t('currencyAccount')}}
				</view>
				<view class="tab-item" :class="active==1?'active':''" @click="active=1"> {{$t('futuresAccount')}}
				</view>
				<view class="tab-item" :class="active==2?'active':''" @click="active=2"> {{$t('legalAccount')}}</view>
				<view class="tab-item" :class="active==3?'active':''" @click="active=3"> {{$t('trustAccount')}} </view>
			</view>
			<uni-card :is-shadow="false" :border="false" padding="32px 14px">
				<view class="">
					<view class="">
						{{$t('currencyAccount')}}
					</view>
					<view class="flex_sp_be">
						<view class="num">
							<span>{{shownum(getFloat(getBalanceOrAssetsData[active].usableAB,4)) }}
								USDT</span><em>{{shownum('≈'+getFloat(getBalanceOrAssetsData[active].usableABC,2)+' '+currentRegion.regionCode)}}</em>
						</view>
						<view class="flex_sp_be">
							<uni-search-bar class="uni-mt-10 unisearch-bar" radius="5" v-model="currency"
								placeholder="币种" clearButton="auto" cancelButton="none" @confirm="search" />
							<view class="flex_start m-b-40 m-t-40 ">

								<uni-data-checkbox selectedColor="#707a8a" multiple v-model="showPetty"
									:localdata="hobby"></uni-data-checkbox>
							</view>
						</view>
					</view>
				</view>
				<uni-table class="table" ref="table" :loading="loading" border :stripe="false" type=""
					:emptyText="$t('contentnomore')" @selection-change="selectionChange">
					<uni-tr>
						<uni-th width="200" align="left">{{$t('currency')}}</uni-th>
						<uni-th width="200" align="left">{{$t('total')}}</uni-th>
						<uni-th width="200" align="left">{{$t('frozen')}}</uni-th>
						<uni-th width="200" align="left">{{$t('availablenum')}}</uni-th>
					</uni-tr>
					<template v-for="(item, index) in getBalanceOrAssetsData[active][active]">
						<uni-tr :key="index"
							v-show="(!showPetty[0]||Number(item.amount)>0)&&(currency==''||item.currency.toLowerCase().indexOf(currency.toLowerCase()) >= 0)">
							<uni-td>
								<view class="flex_start">

									<view class="image55 ">
										<image class="image55" v-if="!item.defaultSrc"
											:src="'../../../../static/trade/'+item.currency+'.png'" mode="widthFix"
											@error="ErrSrc($event, item)">
										</image>
										<image v-else src="../../../../static/trade/default.png" />
									</view>
									<text class="m-l-20">{{ item.currency }}</text>
								</view>

							</uni-td>
							<uni-td>{{shownum(item.total)}}</uni-td>
							<uni-td>{{ shownum(item.frozenAmount) }}</uni-td>
							<uni-td>{{shownum(item.amount)}}</uni-td>
						</uni-tr>
					</template>
				</uni-table>
			</uni-card>
		</view>
	</view>
</template>

<script>
	import {
		// mapState,
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				showEye: true,
				showPetty: [],
				hobby: [{
					text: this.$t('hideSmall'),
					value: true
				}],
				active: 0,
				currency: '',
				tableData: [],
				// 每页数据量
				pageSize: 10,
				// 当前页
				pageCurrent: 1,
				// 数据总量
				total: 0,
				loading: false,
				getBalanceOrAssetsData: [{
					0: [],
					usableABC: 0,
					usableAB: 0,
				}, {
					1: [],
					usableABC: 0,
					usableAB: 0,
				}, {
					2: [],
					usableABC: 0,
					usableAB: 0,
				}, {
					3: [],
					usableABC: 0,
					usableAB: 0,
				}],
				currentRegion: '',
				C2CMarketDelayed: [],
			}
		},
		computed: {
			stroeChange() {
				return this.$store.state.socket.stroeChange;
			},
			//借助mapGetters生成计算属性：
			...mapGetters('user', ['getUser']),
		},
		watch: {

			stroeChange: {
				handler: function(newVal, oldVal) {
					if (newVal.C2CMarketDelayed && this.showwatch) {
						this.calculation()
					}
				},
				deep: true,
			},
		},
		onShow() {
			if (!uni.getStorageSync('currentRegion')) {

				uni.setStorageSync('currentRegion', {
					exchangeRate: "1",
					id: 16,
					regionCode: "USD",
					regionName: this.$t('USD'),
					type: 1,
				})
			}
			this.currentRegion = uni.getStorageSync('currentRegion')
			this.getBalanceOrAssets()
		},
		onLoad() {},
		methods: {
			ErrSrc(e, item) {
				this.$set(item, "defaultSrc", true);
				// this.ImgSrc = this.errSrc;
			},
			shownum(num) {
				if (this.showEye) {

					return num
				} else {
					return '******'
				}
			},
			calculation() {
				if (!this.$store.state.socket.websocketData.C2CMarketDelayed)
					return
				let arr = JSON.parse(JSON.stringify(this.$store.state.socket.websocketData.C2CMarketDelayed));
				this.C2CMarketDelayed = arr.reduce(
					(accumulator, current) => {
						accumulator[current.symbolPretty.split('/')[0]] = current;
						return accumulator;
					}, {}
				);
				if (this.getBalanceOrAssetsData[0][0]) {
					this.getBalanceOrAssetsData.map((AssetsData, Assetsindex) => {
						AssetsData.usableABC = 0
						AssetsData.usableAB = 0
						AssetsData[Assetsindex].map((item) => {
							item.usableABC = typeof(this
								.C2CMarketDelayed[this
									.getval(
										item.currency)]) !== 'undefined' ? Math.floor((
									Number(
										item
										.amount) +
									Number(item.frozenAmount)) * this.currentRegion
								.exchangeRate *
								this.C2CMarketDelayed[this.getval(item.currency)]
								.currentDaysClosePrice *
								10000 / 100) / 100 : 0.00
							item.usableAB = typeof(this
								.C2CMarketDelayed[this
									.getval(
										item.currency)]) !== 'undefined' ? Math.floor((
									Number(
										item
										.amount) +
									Number(item.frozenAmount)) * this.C2CMarketDelayed[this
									.getval(item
										.currency)]
								.currentDaysClosePrice *
								10000) / 100 / 100 : 0.0000
							AssetsData.usableABC += item.usableABC
							AssetsData.usableAB += item.usableAB
						})

					})

				}

			},
			getBalanceOrAssets() {
				let params = {
					type: 0, //是	int	类型（0：查询资产，1：查询余额）
					currency: '', //否	string	币种（查询 余额时必传）
					walletType: '', //	否	int	钱包类型（1 币币钱包 2 期货钱包 3 法币钱包 4质押钱包）（查询 余额时必传）
				}
				this.$api.assets.getBalanceOrAssets(params).then((res) => {
					for (let key in res) {
						this.getBalanceOrAssetsData[key - 1][key - 1] = res[key]

						res[key].map((item) => {

							this.getBalanceOrAssetsData[key - 1].sum += Number(item.amount)
						})
					}

				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		width: 1200px;
		margin: 0 auto;

		.el-button {
			line-height: 1;
			display: inline-block;
			white-space: nowrap;
			cursor: pointer;
			background: #fff;
			border: 1px solid #dcdfe6;
			color: #606266;
			-webkit-appearance: none;
			text-align: center;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			outline: 0;
			margin: 0;
			-webkit-transition: .1s;
			transition: .1s;
			font-weight: 500;
			padding: 10px 20px;
			font-size: 14px;
			border-radius: 4px;
			height: 36px;
		}

		.button1 {
			border-color: #1abb97;
			background-color: #1abb97;
			color: #fff;
		}

		.button2 {
			border: none;
			background-color: #fff;
			color: #1abb97;

		}

		.num {
			margin-top: 20px;
			font-size: 24px;

			em {
				margin-left: 6px;
				color: #999;
				font-size: 18px;
			}
		}

		.tabs {
			margin: 15px;
			color: #707a8a;
			font-size: 16px;
			padding: 40px 0 20px 0;

			.tab-item.active {
				background-color: #1abb97;
				color: #fff;
				border-radius: 4px;
			}

			.tab-item {
				display: inline-block;
				cursor: pointer;
				padding: 8px 24px;
				margin-right: 12px;
			}

			.tab-item {
				display: inline-block;
				cursor: pointer;
				padding: 8px 24px;
				margin-right: 12px;
			}
		}

		.unisearch-bar {
			width: 232px;

			/deep/ .uni-searchbar__box {
				justify-content: flex-start;
			}
		}

		.table {
			max-height: 500px;
			overflow: auto;
		}
	}
</style>
