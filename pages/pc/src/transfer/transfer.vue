<template>
	<view class="page">
		<headtop type="single"></headtop>
		<view class="main">
			<uni-nav-bar class="nav-bar" statusBar backgroundColor="#eef1f5" left-icon="left" :leftText="$t('goBack')"
				color="#1abb97" rightText="" @clickLeft="routeTo(1)">
			</uni-nav-bar>
			<view class="fund-box">
				<h3 class="title">{{$t('capitalTransfer')}}</h3>
				<uni-forms ref="valiForm" labelPosition="top" :rules="rules" :modelValue="valiFormData">
					<uni-card class="bgfff m-b-20 card1  " margin='0px' :is-shadow="false" :border="false">
						<view class="form b-line ">
							<view class="dot-line"></view>
							<uni-forms-item name="sourceWalletType">
								<view class="m-l-20">
									<view class="tal flex_start">
										{{$t('from')}}
										<uni-data-select class="select1" v-model="valiFormData.sourceWalletType"
											:localdata="items" :clear="false"></uni-data-select>
									</view>
								</view>

							</uni-forms-item>
						</view>
						<view class="to  p-t-40">
							<view class="dot-line"></view>
							<uni-forms-item label="" name="destinationWalletType">
								<view class="m-l-20">
									<view class="tal flex_start">
										{{$t('to')}}
										<uni-data-select class="select1" v-model="valiFormData.destinationWalletType"
											:localdata="items" :clear="false"></uni-data-select>
									</view>
								</view>
							</uni-forms-item>
						</view>
						<view class="top-down" @click="reversal">
							<view class="text">

								<uni-icons class="arrow-up" color="#1abb974d" type="arrow-up" size="30"></uni-icons>
								<uni-icons class="arrow-down" color="#1abb974d" type="arrow-down" size="30">
								</uni-icons>
							</view>
						</view>
					</uni-card>

					<uni-forms-item :label="$t('currency')" name="currency">
						<uni-card class="bgfff m-b-20   " margin='0' padding="0px" :is-shadow="false" :border="false">

							<uni-data-select class="select2" v-model="valiFormData.currency" labelkey="currency"
								valuekey="currency" :localdata="okitems" :clear="false" @change="currencychange">
							</uni-data-select>
						</uni-card>
					</uni-forms-item>
					<uni-forms-item :label="$t('num')" name="amount">
						<uni-card class="bgfff m-b-20   " margin='0' padding="12px 0 12px 15px" :is-shadow="false"
							:border="false">
							<view class=" flex_sp_be input-box">
								<uni-easyinput class="easyinput" v-model="valiFormData.amount" :inputBorder="false"
									:styles="styles" :placeholderStyle="placeholderStyle" placeholder="">
								</uni-easyinput>
								<view class="">
									<text class="font-32 text1">{{okselect.currency||$t('unselected')}}</text>
									<text class="font-32 text2"
										@click="valiFormData.amount=Number( okselect.amount)-Number(okselect.frozenAmount)">{{$t('all')}}</text>
								</view>
							</view>
						</uni-card>
					</uni-forms-item>
				</uni-forms>
				<view class="m-l-20 m-b-20" v-show="okselect.currency">
					{{$t('availablenum')}}: {{Number( okselect.amount)-Number(okselect.frozenAmount)}}
					{{okselect.currency}}
				</view>
				<button class="button" @click="submit('valiForm')"
					:disabled="valiFormData.amount<=0">{{$t('confirm')}}</button>
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
				getBalanceOrAssetsData: '',
				okitems: [],
				okselect: {
					currency: '',
					amount: 0,
					frozenAmount: 0
				},
				items: [{
					value: '1',
					text: this.$t('currencyAccount')
				}, {
					value: '2',
					text: this.$t('futuresAccount')
				}, {
					value: '3',
					text: this.$t('legalAccount')
				}, {
					value: '4',
					text: this.$t('trustAccount')
				}],
				formOrTo: 'form',
				styles: {
					color: '#000', //	输入文字颜色
					disableColor: '#fff', //	输入框禁用背景色
					borderColor: '#fff', //	边框颜色
				},
				placeholderStyle: "font-size: 37px;				height: 53 px;				line - height: 53 px;				color: rgb(192, 196, 204);				",
				// 校验表单数据
				valiFormData: {
					userId: '', //是	int	用户ID
					sourceWalletType: '', //是 int 钱包类型
					destinationWalletType: '', //是 int 目标钱包ID
					currency: "",
					amount: '',
					money: {
						currency: "",
						amount: ''
					}, //是 dict 划转数量（ amount = 数量； currency = 币种）
				},
				// 校验规则
				rules: {
					sourceWalletTypeType: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}]
					},
					destinationWalletType: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
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
			sourceWalletType() {
				return this.valiFormData.sourceWalletType
			},
			destinationWalletType() {
				return this.valiFormData.destinationWalletType
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
			sourceWalletType(val) {
				this.okselect = ""
				if (val != '' && this.destinationWalletType != '') {
					this.okitems = this.okitemsfun(this.getBalanceOrAssetsData[this
						.destinationWalletType], this.getBalanceOrAssetsData[val])
				} else {
					this.okitems = []
					uni.showToast({
						title: '请继续选择资金划转(至)',
						icon: 'none'
					})
				}
			},
			destinationWalletType(val) {
				this.okselect = ""
				if (this.sourceWalletType != '' && val != '') {
					// okitems
					// val
					this.okitems = this.okitemsfun(this
						.getBalanceOrAssetsData[val], this.getBalanceOrAssetsData[this.sourceWalletType])
				} else {
					this.okitems = []
					uni.showToast({
						title: '请继续选择资金划转(从)',
						icon: 'none'
					})
				}
			}

		},
		onLoad() {
			this.getBalanceOrAssets()
		},
		methods: {
			currencychange(event, val) {
				if (val) {
					this.okselect = val

				}
			},
			okitemsfun(arr1, arr2) {
				let newarr = []
				let arr = []
				arr1.map((arr1item, index) => {
					arr = arr2.filter((arr2item) => {
						return arr1item.currency == arr2item.currency
					})
					newarr = [...newarr, ...arr]
				})
				return newarr
			},
			//反转
			reversal() {
				let form = this.valiFormData.sourceWalletType
				let to = this.valiFormData.destinationWalletType
				this.valiFormData.sourceWalletType = to
				this.valiFormData.destinationWalletType = form
			},
			getBalanceOrAssets() {
				let parmas = {
					type: 0, //	是	int	类型（0：查询资产，1：查询余额）
					currency: '', //	否	string	币种（查询 余额时必传）
					walletType: '', //	否	int	钱包类型（1 币币钱包 2 期货钱包 3 法币钱包 4质押钱包）（查询 余额时必传）
				}
				this.$api.transfer.getBalanceOrAssets(parmas).then((res) => {
					this.getBalanceOrAssetsData = res
				})
			},
			submit(ref) {
				this.$refs[ref].validate().then(() => {
					this.valiFormData.sourceWalletType = Number(this.valiFormData.sourceWalletType)
					this.valiFormData.destinationWalletType = Number(this.valiFormData
						.destinationWalletType)
					if (this.valiFormData.sourceWalletType != this.valiFormData.destinationWalletType) {

						this.$api.transfer.transfer(this.deleteInvalidParam(this.valiFormData)).then(
							res => {
								console.log('res', res);
								this.okitems = []
								this.routeTo(1)
							}).catch(err => {
							console.log('err', err);
						})

					} else {
						uni.showToast({
							title: "钱包不能相同",
							icon: 'none'
						})
					}
				}).catch(err => {
					console.log('catch', err);
				})

			},

		}
	}
</script>

<style lang="scss" scoped>
	.main {
		width: 1200px;
		margin: 0 auto;

		.fund-box {
			/deep/ .uni-card {
				overflow: inherit;
			}

			color: #1e2329;
			border-radius: 8px;
			background: rgba(242, 246, 250, .5);
			padding: 40px 300px;

			.title {
				font-size: 24px;
				font-weight: 600;
				margin-bottom: 20px;
			}
		}

		.select1 {
			/deep/ .uni-select {

				border: none;
				width: 100px;
			}
		}

		.select2 {
			/deep/ .uni-select {

				border: none;
			}
		}

		.easyinput /deep/ .uni-input-wrapper .uni-input-input {
			font-size: 64rpx;
			line-height: 100rpx;
			height: 100rpx;
		}

		.input-box {
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

		.form {
			position: relative;
		}

		.form .dot-line {
			position: absolute;
			width: 1px;
			height: 50%;
			bottom: 0;
			background: #f6f6f6;
			left: 0;
		}

		.form .dot-line::before {
			content: " ";
			position: absolute;
			top: 0;
			left: 0;
			-webkit-transform: translate(-50%);
			transform: translate(-50%);
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background-color: #fcda0f;
		}

		.to {
			position: relative;
		}

		.to .dot-line {
			position: absolute;
			background: #f6f6f6;
			width: 1px;
			height: 50%;
			top: 0;
			left: 0;
		}

		.to .dot-line::before {
			content: " ";
			position: absolute;
			bottom: 0;
			left: 0;
			-webkit-transform: translate(-50%);
			transform: translate(-50%);
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background-color: #2b76f3;
		}

		.card1 {
			position: relative;

			.top-down {
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				background-color: #f6f6f6;
				position: absolute;
				top: calc(50% - 40rpx);
				right: 40rpx;

				.text {
					position: absolute;
					top: 18rpx;
					left: 10rpx;

					.arrow-up {
						position: absolute;
						// top: 15rpx;
					}
				}
			}
		}

		.form,
		.to {
			/deep/ .uni-forms-item__label {
				display: none
			}
		}
	}
</style>
