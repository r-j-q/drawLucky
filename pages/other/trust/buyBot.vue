<template>
	<view class="app bgcc">
		<view class="topp">

			<view class="head weight600">
				<uni-nav-bar class="nav-bar" statusBar :border="false" backgroundColor="#12b888" left-icon="left" rightText=""
					@clickLeft="routeTo(1)">
				</uni-nav-bar>
			</view>
			<view class="card-bot c333 font-26">
				<view class="flex_sp_be bot bot1">
					<view class="l tac ">
						<view class="weight400 c999 m-b-20">
							{{$t('cycle')}}
						</view>
						<view class="font-36 m-b-20">
							{{subscribe.productLife}} {{$t('day')}}
						</view>
					</view>
					<view class="r tac">
						<view class="weight400 c999 m-b-20">
							{{$t('dailyRate')}}
						</view>
						<view class="font-36 c1abb97 m-b-20">
							{{subscribe.profitRate*10000/100}}%
						</view>
					</view>
				</view>
				<view class="flex_sp_be bot bot2 cfff">

					<view class="l tac">
						<view class="weight400 m-b-20 ">
							{{$t('dividend')}}
						</view>
						<view class="m-b-20 " v-if="subscribe.profitType=='0'">
							{{$t('dueDividend')}}
						</view>
						<view class="m-b-20 " v-else>
							{{$t('dailyDividend')}}
						</view>
					</view>
					<view class="r tac">
						<view class="weight400 m-b-20 ">
							{{$t('escrowAmount')}}
						</view>
						<view class=" m-b-20" v-if="subscribe.redemptionEarly=='0'">
							{{$t('dueReturn')}}
						</view>
						<view class="m-b-20 " v-else>
							{{$t('redemption')}}
						</view>
					</view>
				</view>

			</view>
		</view>

		<view class=" main eef1f5">
			<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top"
				labelWidth="690rpx">
				<view class="shownum c333 flex_sp_be">
					<view class="l tac">
						<view class=" font-24 weight400">
							{{$t('availableBalance')}}
						</view>
						<view class="font-34 weight700">
							{{getBalanceOrAssetsData.amount}}
							{{subscribe.currency}}
						</view>
					</view>
					<view class="r tac">
						<view class="font-24 weight400">
							{{$t('totalIncome')}}
						</view>
						<view class="font-34 weight700">
							{{valiFormData.amount*subscribe.productLife*10000/10000*subscribe.profitRate*10000/10000-valiFormData.amount*(subscribe.incomeChargeFeeRate*10000/10000+subscribe.outcomeChargeFeeRate*10000/10000)||0.00}}
							{{subscribe.currency}}
						</view>
					</view>
				</view>
				<view class="flex_sp_be padding30 labaltip">
					<view class="">
						{{$t('money')}}
					</view>
					<view class="flex_start" @click="routeTo('/pages/other/assets/transfer')">
						<image class="image40" src="@/static/img/transform.png" mode="widthFix"></image>
						<text>{{$t('capitalTransfer')}}</text>

					</view>
				</view>
				<uni-forms-item label="" name="amount">
					<view class=" flex_sp_be input-box m-b-20 asdasdasd">
						<uni-easyinput class="easyinput" v-model="valiFormData.amount" :inputBorder="false"
							:placeholder="$t('placeholdernum')">
						</uni-easyinput>
						<view class=" font-28 c333 weight700">
							<text class="font-28 text1">{{subscribe.currency}}</text>
							<!-- :class="valiFormData.currency?'c333':'c999'" -->
							<text class="font-28 text2"
								@click="valiFormData.amount=getBalanceOrAssetsData.amount">{{$t('all')}}</text>
						</view>
					</view>
				</uni-forms-item>
				<view class="flex_sp_be padding30 labaltip ai_start c999">
					<view class="feeRate">
						{{subscribe.minAmount}} -
						{{subscribe.maxAmount}}
					</view>
					<view class="feeRate tar">
						<view>{{$t('buy')}}{{$t('commission')}}：{{subscribe.incomeChargeFeeRate*10000/100}}%</view>
						<view>{{$t('sell')}}{{$t('commission')}}：{{subscribe.outcomeChargeFeeRate*10000/100}}%</view>

					</view>
				</view>
				<view class="flex_start m-b-40 m-t-40 agree ">

					<checkbox-group @change="checkboxChange">
						<label>
							<checkbox color="#1abb97" value="agree" :checked="agree" style="transform:scale(0.7)" />
							{{$t('readAgree')}}
						</label>
					</checkbox-group>
					<text class="xieyi c1abb97" @click="routeTo('/pages/other/normal/trustProtocol')">
						<text class="m-l-10">{{$t('serviceAgreement')}}</text>
					</text>
				</view>

			</uni-forms>
			<button class="button buttonfoot" :disabled="buttondisabled"
				@click="submit('valiForm')">{{$t('confirm')}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				agree: false,
				subscribe: '',
				getBalanceOrAssetsData: {
					amount: 0,
					frozenAmount: 0
				},
				// 校验表单数据
				valiFormData: {
					userId: this.$store.state.user.id,
					productId: '',
					money: {
						currency: '',
						amount: ''
					},
					currency: '',
					amount: ''
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

				},
			}
		},


		computed: {
			amount() {
				return this.valiFormData.amount
			},
			currency() {
				return this.valiFormData.currency
			},
			buttondisabled() {
				return !(this.agree && this.valiFormData.amount >= this.subscribe.minAmount && this.valiFormData.amount <=
					this.subscribe.maxAmount && this.valiFormData.amount)
			}
		},
		watch: {
			amount(val) {
				this.valiFormData.money.amount = val
			},
			currency(val) {
				this.valiFormData.money.currency = val
			},
			subscribe(val) {
				this.valiFormData.productId = val.id
				this.valiFormData.currency = val.currency
			}
		},
		onLoad(options) {
			if (options.item) {
				this.subscribe = JSON.parse(options.item)
				this.getBalanceOrAssets(this.subscribe.currency)
			}
		},
		methods: {
			checkboxChange(event) {
				if (event.detail.value.length != 0 && event.detail.value[0] == 'agree') {
					this.agree = true
				} else {
					this.agree = false

				}
			},
			getBalanceOrAssets(currency) {
				let params = {
					type: 1, //是	int	类型（0：查询资产，1：查询余额）
					currency, //否	string	币种（查询 余额时必传）
					walletType: 4, //	否	int	钱包类型（1 币币钱包 2 期货钱包 3 法币钱包 4质押钱包）（查询 余额时必传）
				}
				this.$api.financial.getBalanceOrAssets(params).then((res) => {


					this.getBalanceOrAssetsData = res
				})
			},
			submit(ref) {


				this.$refs[ref].validate().then(() => {
					this.$api.financial.hold(this.deleteInvalidParam(this.valiFormData)).then(res => {
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
	.topp {
		position: relative;
	}

	.head {
		height: 280rpx;
		position: sticky;
		top: 0;
		z-index: 99;
		background-color: #12b888;
		color: #333;
		border-bottom: 190rpx solid #fff;
	}

	/deep/ .uni-forms-item__label.no-label {
		display: none;
	}

	.card-bot {
		z-index: 999;
		position: absolute;
		bottom: 0rpx;
		left: 30rpx;
		right: 30rpx;
		border-radius: 20rpx;
		margin: 0 30rpx;
		overflow: hidden;

		.bot {
			height: 190rpx;
			line-height: 45rpx;


		}

		.bot1 {
			background-color: #fff;
		}

		.bot2 {
			background-color: #12b888;
		}
	}

	.l {
		flex: 1 50%;
	}

	.r {
		flex: 1 50%;
	}

	.padding30 {
		padding: 0 30rpx;
	}

	.bgcc {
		min-height: 100vh;
		background-color: #eef1f5;
	}



	.main {
		/deep/ .uni-forms-item {
			margin-bottom: 0;
		}

		.shownum {
			padding: 20rpx 0 20rpx 0;
			line-height: 50rpx;
			background-color: #fff;
		}

		.labaltip {
			background-color: #eef1f5;
			line-height: 72rpx;
		}

		.input-box {
			color: #333;
			background-color: #fff !important;

			padding: 0 30rpx;

			/deep/ .uni-easyinput__placeholder-class {
				font-size: 24rpx !important;
			}

			/deep/ .uni-easyinput__content {
				background-color: #fff !important;
			}

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

		.asdasdasd {
			/deep/ .uni-input-input {
				font-size: 40rpx;
			}
		}

		.agree {
			font-size: 30rpx;
			margin: 0 30rpx;

			.xieyi {
				// color: #35abc5;
			}
		}

		.buttonfoot {
			margin: 0 30rpx;
		}

		.feeRate {
			line-height: 40rpx;
		}
	}
</style>
