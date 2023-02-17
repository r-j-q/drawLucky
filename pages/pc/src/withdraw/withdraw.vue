<template>
	<view class="page">
		<headtop type="single"></headtop>
		<view class="main">

			<uni-nav-bar class="nav-bar" statusBar backgroundColor="#eef1f5" left-icon="left" :leftText="$t('goBack')"
				color="#1abb97" rightText="" @clickLeft="routeTo(1)">
			</uni-nav-bar>
			<view class="fund-box">
				<h3 class="title">{{$t('withdrawCoins')}}</h3>
				<uni-card class="bgfff m-b-20 card1  " margin='0px' padding="40px" :is-shadow="false" :border="false">
					<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top">
						<uni-forms-item :label="$t('currency')" name="currency">
							<uni-data-select class="select2" v-model="valiFormData.currency"
								:localdata="getCurrencyData" icon="currency" labelkey="currency-Subchain"
								valuekey="currency" :clear="false" @change="currencychange">
							</uni-data-select>
						</uni-forms-item>
						<uni-forms-item name="bankCardId">
							<template slot="label">
								<view class="flex_sp_be forms-label">
									<view>{{$t('withdrawalAddress')}}</view>
									<view class="danger" v-if="getUser.payPassword == 0"
										@click="routeTo('/pages/pc/src/addWallet/addWallet')">
										{{$t('tipwallet')}} <text class="primary">{{$t('toAdd')}}</text>
									</view>
								</view>
							</template>
							<uni-data-select :disabled="valiFormData.currency==''" class="select2"
								v-model="valiFormData.bankCardId" :localdata="getUserBankCardData"
								labelkey="bankCardCode" valuekey="id" :isdisableShow="false" :clear="false">
							</uni-data-select>
						</uni-forms-item>
						<uni-forms-item label="" name="amount">
							<template slot="label">
								<view class="flex_sp_be forms-label">
									<view>
										{{$t('availablenum')+(Number( getBalanceOrAssetsData.amount)-Number(getBalanceOrAssetsData.frozenAmount))}}
									</view>
									<view class="danger">
										<text
											class="primary">{{$t('commission')}}：{{okselectitem.rateType==0?okselectitem.feeRate:okselectitem.feeRate*100+'%'}}</text>
									</view>
								</view>
							</template>
							<view class=" flex_sp_be input-box">
								<uni-easyinput class="easyinput" v-model="valiFormData.amount" :inputBorder="false"
									:placeholder="$t('placeholdernum')">
								</uni-easyinput>
								<view class="">
									<text
										class="font-32 text1">{{valiFormData.currency?valiFormData.currency:$t('unselected')}}</text>
									<text class="font-32 text2"
										@click="valiFormData.amount=Number( getBalanceOrAssetsData.amount)-Number(getBalanceOrAssetsData.frozenAmount)">{{$t('unselected')}}</text>
								</view>
							</view>
						</uni-forms-item>
						<uni-forms-item :label="$t('payPassword')" name="payPassword">
							<uni-easyinput class="input-box" v-model="valiFormData.payPassword" type="password"
								:inputBorder="false" :placeholder="$t('placeholderpayPassword')">
							</uni-easyinput>
						</uni-forms-item>
					</uni-forms>
					<button class="button m-t-20" :disabled="valiFormData.amount<=0"
						@click="submit('valiForm')">{{$t('confirm')}}</button>
				</uni-card>


			</view>

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
				getCurrencyData: [],
				getUserBankCardData: [],
				getBalanceOrAssetsData: {
					amount: 0,
					frozenAmount: 0
				},
				okselectitem: {
					currency: '',
					amount: 0,
					frozenAmount: 0
				},
				// 校验表单数据
				valiFormData: {
					bankCardName: "", //
					userId: '', //是	int	用户ID
					payPassword: '', //是	int	支付密码
					bankCardCode: '',
					bankCardId: '', //是	int	收款账户ID
					currency: "",
					amount: '',
					money: {
						currency: "",
						amount: ''
					}, //是 dict 划转数量（ amount = 数量； currency = 币种）
				},
				// 校验规则
				rules: {
					currency: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}]
					},
					bankCardName: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}]
					},
					bankCardId: {
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
					amount: {
						rules: [{
								required: true,
								errorMessage: this.$t("errorEmpty")
							}, {
								format: 'number',
								errorMessage: this.$t('onlyNumbers')
							}

						]
					},
					currency: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}]
					},
				},
			}
		},

		computed: {
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
			},
			amount(val) {
				this.valiFormData.money.amount = val
			},
			getUser: {
				handler(val) {
					this.valiFormData.userId = val.id
				},
				deep: true,
				immediate: true
			},
			okselectitem(val) {
				if (val) {
					this.getUserBankCardData.map((item) => {

						if (val.currency + '-' + val.Subchain != item.bankName + '-' + item.bankCardName) {
							item.disable = true
						} else {
							delete item.disable
						}
					})
					this.getBalanceOrAssets(val.currency)
				}
			}

		},

		onLoad() {
			if (this.getUser.payPassword == 1) {

				this.getUserBankCard()
			}
			this.getCurrency()
		},
		methods: {
			getBalanceOrAssets(currency) {
				let params = {
					type: 1, //	是	int	类型（0：查询资产，1：查询余额）
					currency, //	否	string	币种（查询 余额时必传）
					walletType: 1, //	否	int	钱包类型（1 币币钱包 2 期货钱包 3 法币钱包 4质押钱包）（查询 余额时必传）
				}
				this.$api.withdraw.getBalanceOrAssets(this.deleteInvalidParam(params)).then(
					res => {
						console.log('res', res);
						this.getBalanceOrAssetsData = res
					})
			},
			currencychange(event, val) {
				if (val) {
					this.okselectitem = val
					this.valiFormData.bankCardId = ''
				}
			},
			getUserBankCard() {
				let params = {
					type: 0, //是	in
				}
				this.$api.withdraw.getUserBankCard(this.deleteInvalidParam(params)).then(
					res => {
						console.log('res', res);
						this.getUserBankCardData = res
					}).catch(err => {
					console.log('err', err);
				})
			},
			getCurrency() {
				let params = {
					type: 0, //
				}
				this.$api.withdraw.getCurrency(this.deleteInvalidParam(params)).then(
					res => {
						console.log('res', res);
						this.getCurrencyData = []
						for (let key in res) {

							this.getCurrencyData.push(...res[key])
						}
					}).catch(err => {
					console.log('err', err);
				})
			},

			submit(ref) {
				this.$refs[ref].validate().then(() => {

					this.$api.withdraw.withdrawal(this.deleteInvalidParam(this.valiFormData)).then(
						res => {
							console.log('res', res);
							this.routeTo(1)
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
		width: 800px;
		margin: 0 auto;

		.moneylabel {
			padding-bottom: 8px;

			.danger {
				font-size: 12px;
				color: #f56c6c;

				.primary {
					color: #1abb97;
				}
			}
		}

		.fund-box {
			/deep/ .uni-card {
				overflow: inherit;
			}

			color: #1e2329;
			border-radius: 8px;
			background: rgba(242, 246, 250, .5);
			padding: 40px 0px;

			.title {
				font-size: 24px;
				font-weight: 600;
				margin-bottom: 20px;
			}
		}




		.input-box {
			border-radius: 4px;
			border: 1rpx solid #dcdfe6;
			overflow: hidden;

			.text1 {
				line-height: 70rpx;
				border-right: 1rpx solid #dcdfe6;
				padding: 0 20rpx;
			}

			.text2 {
				line-height: 70rpx;
				padding: 0 20rpx;
			}
		}




	}
</style>
