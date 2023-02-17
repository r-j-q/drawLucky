<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar backgroundColor="#f6f6f6" left-icon="left" :title="$t('sell')"
			right-icon="calendar" rightText="" @clickLeft="routeTo(1)"
			@clickRight="routeTo('/pages/other/assets/c2cRecord','?c2cRecord=0')">
		</uni-nav-bar>
		<view class="content main p-t-40">
			<!-- 	<view class="flex_sp_be m-b-40">
				<text class="font-36"></text>
				<view class="">
					未选择
				</view>
			</view> -->
			<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top"
				labelWidth="690rpx">
				<!-- <uni-forms-item label="币种" name="currency">
					<uni-list class="listselect" :border="false">
						<uni-list-item v-if="!selectitem" title="" clickable showArrow
							@click="$refs.popup.open('bottom')">
							<template v-slot:body>
								<text class="placeholderItem">请选择币种</text>
							</template>
						</uni-list-item>
						<uni-list-item v-else :title="selectitem.bankName+'/'+selectitem.payeeName"
							:thumb="'../../../static/trade/'+selectitem.bankName+'.png'" thumb-size="sm" clickable
							showArrow @click="$refs.popup.open('bottom')">
						</uni-list-item>
					</uni-list>
				</uni-forms-item> -->
				<view class="flex_start m-b-40">
					<view class="coin-option m-l-20 " :class="selectItem.name==item.name?'actvent':''"
						v-for="(item,index) in getCurrencyData" :key="index" @click="checkeditem(item)">
						{{item.name}}
					</view>

				</view>
				<uni-card class="m-b-40" :is-shadow="true" is-full :border="false"
					shadow=' 0 0 40rpx rgb(184 198 216 / 16%)'>
					<view class="flex_sp_be m-b-20">
						<text>{{$t('salesQuantity')}}</text>
						<text style="text-decoration:underline"
							@click="routeTo('/pages/other/assets/transfer')">{{$t('transfer')}}</text>
					</view>
					<uni-forms-item label="" name="amount">
						<view class=" flex_sp_be input-box m-b-20 asdasdasd">
							<uni-easyinput class="easyinput" v-model="valiFormData.amount" :inputBorder="false"
								:placeholder="$t('num')">
							</uni-easyinput>
							<view class="">
								<text class="font-32 text1">{{selectItem.name||$t('unselected')}}</text>
								<text class="font-32 text2" :class="valiFormData.currency?'c333':'c999'"
									@click="valiFormData.currency?valiFormData.amount=getBalanceOrAssetsData.amount:''">{{$t('all')}}</text>
							</view>
						</view>
					</uni-forms-item>
					<view class="c333 m-b-10 flex_start"
						v-show="valiFormData.amount>0&&regionCodeItem.exchangeRate>0&&C2CMarketItem.currentDaysClosePrice>0">

						<text>
							{{$t('univalence')}}≈
						</text>
						<text class="m-l-10"
							v-if="regionCodeItem.outcomeDiscount=='0'||regionCodeItem.outcomeDiscount==''||regionCodeItem.outcomeDiscount=='null'||regionCodeItem.outcomeDiscount==null">{{getFloat(valiFormData.amount*regionCodeItem.exchangeRate*C2CMarketItem.currentDaysClosePrice,2)}}
						</text>
						<text class="m-l-10"
							v-else>{{getFloat(valiFormData.amount*regionCodeItem.exchangeRate*regionCodeItem.outcomeDiscount*C2CMarketItem.currentDaysClosePrice,2)}}
						</text>
						<text class="m-l-10">{{c2cTrade.legalCurrency}}</text>
					</view>
					<view class="c333 m-b-40" v-if="getBalanceOrAssetsData">
						<text>{{$t('availablenum')}}：{{getBalanceOrAssetsData.amount}} {{selectItem.name}}</text>
					</view>
					<uni-forms-item :label="$t('payPassword')" name="payPassword">
						<uni-easyinput class="input-box" :inputBorder="false" type="password"
							v-model="valiFormData.payPassword" :placeholder="$t('placeholderPassword')" />
					</uni-forms-item>
					<button class="button m-b-20" :disabled="!selectItem"
						@click="submit('valiForm')">{{selectItem?$t('sell'):$t('closed')}}</button>
				</uni-card>
				<uni-card class="m-b-40" :is-shadow="true" is-full :border="false"
					shadow=' 0 0 40rpx rgb(184 198 216 / 16%)'>
					<view class="c333 m-b-20 weight700">
						{{$t('your')}}
					</view>
					<view class="flex_sp_be c333 m-b-10">
						<text>{{$t('bankName')}}</text>
						<text>{{c2cTrade.bankName}}</text>
					</view>
					<view class="flex_sp_be c333 m-b-10">
						<text>{{$t('bankAccount')}}</text>
						<text>{{c2cTrade.bankCardCode}}</text>
					</view>
					<view class="flex_sp_be c333 m-b-10">
						<text>{{$t('name')}}</text>
						<text>{{c2cTrade.payeeName}}</text>
					</view>
				</uni-card>
			</uni-forms>
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
				getRegion: [],
				regionCodeItem: '',
				C2CMarketItem: '',
				c2cTrade: '',
				selectItem: '',
				getBalanceOrAssetsData: '',
				getCurrencyData: [],
				// 校验表单数据
				valiFormData: {
					payPassword: '', //	是	dict	支付密码
					bankCardId: '', //	是	int	收款账户ID
					userId: '', //是	int	用户ID
					currency: "",
					amount: '',
					money: {
						currency: "",
						amount: ''
					}, //是 dict 划转数量（ amount = 数量； currency = 币种）
				},
				// 校验规则
				rules: {


					amount: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}, {
							format: 'number',
							errorMessage: this.$t('onlyNumbers')
						}]
					},
					currency: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}]
					},
					payPassword: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}, {
							pattern: /^[a-zA-Z0-9]{4,30}$/,
							errorMessage: this.$t('errorStandard') + this.$t('errorLength') + "[a-zA-Z0-9]"
						}]
					},
				},
			}
		},


		computed: {
			C2CMarketDelayed() {
				let arr = JSON.parse(JSON.stringify(this.$store.state.socket.websocketData.C2CMarketDelayed));
				return arr.reduce(
					(accumulator, current) => {
						accumulator[current.symbolPretty.split('/')[0]] = current;
						return accumulator;
					}, {}
				);
			},
			currency() {
				return this.valiFormData.currency
			},
			amount() {
				return this.valiFormData.amount
			},
			//借助mapGetters生成计算属性：
			...mapGetters('user', ['getUser']),
		},
		watch: {
			currency(val) {
				this.valiFormData.money.currency = val
				if (this.getRegion) {
					this.getRegion.map(item => {
						if (item.regionCode == this.c2cTrade.legalCurrency) {
							this.regionCodeItem = item
						}

					})


				}
				this.C2CMarketItem = this.C2CMarketDelayed[val]
			},
			amount(val) {
				this.valiFormData.money.amount = val
			},
			selectItem(val) {
				if (val) {
					this.valiFormData.currency = val.name
				}
			},
			getUser: {
				handler(val) {
					this.valiFormData.userId = val.id
				},
				deep: true,
				immediate: true
			},

		},
		onLoad(options) {
			if (options.c2cTrade) {
				this.c2cTrade = JSON.parse(options.c2cTrade)
				console.log(this.c2cTrade, "this.c2cTrade");
				this.valiFormData.bankCardId = this.c2cTrade.id
			}
			// console.log(this.C2CMarketDelayed, "this.C2CMarketDelayed");

			// this.getRegion = JSON.parse(uni.getStorageSync('getRegion'))
			this.getRegion = uni.getStorageSync('getRegion')

		},
		onShow() {
			this.getCurrency()
		},
		methods: {
			checkeditem(val) {
				this.selectItem = val
				this.getBalanceOrAssets(val.name)
			},
			getBalanceOrAssets(currency) {
				let params = {
					type: 1, //是	int	类型（0：查询资产，1：查询余额）
					currency, //否	string	币种（查询 余额时必传）
					walletType: 3, //	否	int	钱包类型（1 币币钱包 2 期货钱包 3 法币钱包 4质押钱包）（查询 余额时必传）
				}
				return this.$api.assets.getBalanceOrAssets(params).then((res) => {
					this.getBalanceOrAssetsData = res
				})
			},
			getCurrency() {
				let params = {
					type: 1, //是	int（出站类型（0提币 1卖出 2买币）
				}
				this.$api.c2cSale.getCurrency(this.deleteInvalidParam(params)).then(
					res => {
						console.log('res', res);

						this.getCurrencyData = []

						for (let key in res) {
							let obj = {
								name: key,
								child: res[key]
							}
							this.getCurrencyData.push(obj)
						}
						if (this.getCurrencyData[0]) {

							this.checkeditem(this.getCurrencyData[0])
						}
					})

			},
			submit(ref) {
				this.$refs[ref].validate().then(() => {

					this.$api.c2cSale.sell(this.deleteInvalidParam(this.valiFormData)).then(
						res => {
							console.log('res', res);
							// this.routeTo(1)
						}).catch(err => {
						console.log('err', err);
					})


				}).catch(err => {
					console.log('catch', err);
				})

			},
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		.coin-option {
			display: inline-block;
			padding: 20rpx;
			border-radius: 6rpx;
			min-width: 120rpx;
			text-align: center;
			color: #1abb97;
			background-color: rgba(197, 197, 197, 0.2);

		}

		.asdasdasd {
			/deep/ .uni-input-input {
				font-size: 32rpx;
			}
		}

		.actvent {
			border-color: #1abb97;
			background-color: #1abb97;
			color: #fff;
		}

		.input-box {
			color: #333;

			.text1 {
				line-height: 100rpx;
				border-right: 1rpx solid rgba(184, 198, 216, 0.16);
				padding: 0 20rpx;
			}

			.text2 {
				line-height: 100rpx;
				padding: 0 20rpx;
			}
		}
	}
</style>
