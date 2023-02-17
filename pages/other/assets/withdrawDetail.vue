<template>
	<view class="app ">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('withdrawCoins')" rightText="" @clickLeft="routeTo(1)"
			@clickRight="routeTo('/pages/other/assets/orderHistory','?orderHistory=1')">
			<block slot="right">
				<view class="">
					<view class="cfff font-28 flex_start" @click="">
						<uni-icons type="calendar" color="#333" size="20"></uni-icons>
					</view>
				</view>
			</block>
		</uni-nav-bar>
		<view class="fund-box main">
			<uni-card class="bgfff m-b-20 card1  " margin='0px' padding="5px" :is-shadow="false" :border="false">

				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top"
					labelWidth="690rpx">
					<!-- <uni-forms-item label="币种" name="currency">
						<uni-data-select class="select2" v-model="valiFormData.currency" :localdata="getCurrencyData"
							labelkey="currency-Subchain" valuekey="currency" :clear="false" @change="currencychange">
						</uni-data-select>
					</uni-forms-item> -->
					<uni-forms-item :label="$t('currency')" name="currency">
						<uni-list class="listselect" :border="false">
							<uni-list-item v-if="!selectitem" title="" clickable showArrow
								@click="$refs.popup.open('bottom')">
								<template v-slot:body>
									<text class="placeholderItem">{{$t('placeholderCurrency')}}</text>
								</template>
							</uni-list-item>
							<uni-list-item v-else :title="selectitem.name"
								:thumb="'../../../static/trade/'+selectitem.name+'.png'" thumb-size="sm" clickable
								showArrow @click="$refs.popup.open('bottom')">
							</uni-list-item>
						</uni-list>
					</uni-forms-item>
					<uni-forms-item :label="$t('payeeName')" name="bankCardName">
						<uni-data-checkbox mode="tag" v-model="valiFormData.bankCardName" selectedColor="#1abb97"
							:disabled="!selectitem.child" :localdata="selectitem.child" :map="{
								text:'Subchain',value:'Subchain'
							}" @change="checkbox"></uni-data-checkbox>
					</uni-forms-item>
					<uni-forms-item name="bankCardId">
						<template slot="label">
							<view class="flex_sp_be forms-label">
								<view>{{$t('withdrawalAddress')}}</view>
								<view class="danger"
									v-if="getUser.payPassword == 0||(!isshowfun(getUserBankCardData)&&valiFormData.bankCardName)"
									@click="routeTo('/pages/other/me/address')">
									{{$t('tipwallet')}} <text class="primary">{{$t('toAdd')}}</text>
								</view>

							</view>
						</template>

						<view class="listselect selectforms flex_sp_be" v-if="bankCardCode==''"
							@click="valiFormData.bankCardName?isshowfun(getUserBankCardData)?$refs.currencypopup.open('bottom'):'':''">
							<view class="">
								<text class="placeholderItem">{{$t('placeholderwithdrawalAddress')}}</text>
							</view>

							<uni-icons type="forward" size="15"></uni-icons>
						</view>
						<view class="listselect selectforms flex_sp_be" v-else
							@click="$refs.currencypopup.open('bottom')">

							<view class="">
								<view class="bankCardCode font-24">
									{{valiFormData.currency}}-{{valiFormData.bankCardName}}
								</view>
								<view class="c333 weight500 font-28">
									{{valiFormData.bankCardCode}}
								</view>
							</view>
							<uni-icons type="forward" size="15"></uni-icons>
						</view>
					</uni-forms-item>
					<uni-forms-item label="" name="amount">
						<template slot="label">
							<view class="flex_sp_be forms-label">
								<view>
									{{$t('num')}}
								</view>
								<view class="danger">
									<text class="primary">

										{{$t('availablenum')}}</text>
									<text class="primary m-l-10">

										{{ getBalanceOrAssetsData.amount}}</text>
								</view>
							</view>
						</template>
						<view class="flex_sp_be input-box">
							<view class="inp">

								<uni-easyinput class=" " type="text" v-model="valiFormData.amount" :inputBorder="false"
									:placeholder="$t('placeholdernum')">
								</uni-easyinput>
							</view>
							<view class="text-box flex_end">
								<text
									class="font-32 text1">{{valiFormData.currency?valiFormData.currency:$t('unselected')}}</text>
								<text class="font-32 text2"
									@click="valiFormData.amount= getBalanceOrAssetsData.amount">{{$t('all')}}</text>
							</view>
						</view>
					</uni-forms-item>
					<uni-forms-item label="" name="payPassword">
						<template slot="label">
							<view class="flex_sp_be forms-label">
								<view>{{$t('payPassword')}}</view>
								<view class=" font-24 c999" v-if="okselectitem.rateType == 1">
									{{$t('commission')}}：{{okselectitem.feeRate*10000/100}}%
									{{valiFormData.currency}}
								</view>
								<view class=" font-24 c999" v-if="okselectitem.rateType == 0">
									{{$t('commission')}}：{{okselectitem.feeRate}}
									{{valiFormData.currency}}
								</view>

							</view>
						</template>
						<uni-easyinput class="input-box input-boxs m-b-20" :inputBorder="false"
							v-model="valiFormData.payPassword" type="password"
							:placeholder="$t('placeholderpayPassword')">
						</uni-easyinput>
					</uni-forms-item>
				</uni-forms>
				<button class="button m-t-40 m-b-20" :disabled="valiFormData.amount<=0"
					@click="submit('valiForm')">{{$t('withdrawCoins')}}</button>
			</uni-card>
		</view>
		<uni-popup ref="currencypopup">
			<view class="popup-select">
				<view class="uni-list">
					<radio-group @change="radioChangecurrency">
						<template v-for="(item, index) in getUserBankCardData">

							<label class="flex_sp_be popuplabel" v-if="!item.disable" :key="item.id">
								<view class=" flex_start">
									<image class="image40" :src="'../../../static/trade/'+item.bankName+'.png'"
										mode="widthFix">
									</image>
									<view class="m-l-20">
										<view class="">{{item.bankName}}-{{item.bankCardName}}</view>
										<view class="bankCardCode">
											{{item.bankCardCode}}
										</view>
									</view>
								</view>
								<view>
									<radio color="#1abb97" :value="JSON.stringify(item) "
										:checked="item.bankCardCode == valiFormData.bankCardCode"
										style="transform:scale(0.7)" />
								</view>
							</label>
						</template>
					</radio-group>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="popup">
			<view class="popup-select">
				<view class="uni-list">
					<radio-group @change="radioChange">
						<label class="flex_sp_be popuplabel" v-for="(item, index) in getCurrencyData" :key="item.id">
							<view class=" flex_start">
								<image class="image40" :src="'../../../static/trade/'+item.name+'.png'" mode="widthFix">
								</image>
								<view class="m-l-20">{{item.name}}</view>
								<!-- <view>{{item.bankCardName}}</view> -->
							</view>
							<view>
								<radio color="#1abb97" :value="JSON.stringify(item) "
									:checked="item.name == selectitem.name" style="transform:scale(0.7)" />
							</view>
						</label>
					</radio-group>
				</view>
			</view>
		</uni-popup>
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
				selectitem: {
					name: ''
				},
				Currencyitem: {},
				//
				getCurrencyData: [],
				getUserBankCardData: [],
				getBalanceOrAssetsData: {
					amount: 0,
					frozenAmount: 0
				},
				okselectitem: '',

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
			bankCardCode() {
				return this.valiFormData.bankCardCode
			},
			currency() {
				return this.valiFormData.currency
			},
			amount() {
				return this.valiFormData.amount
			},
			bankCardName() {
				return this.valiFormData.bankCardName
			},
			selectitembankCardName() {
				return {
					currency: this.selectitem.name,
					Subchain: this.valiFormData.bankCardName
				}
			},
			//借助mapGetters生成计算属性：
			...mapGetters('user', ['getUser']),
		},
		watch: {
			selectitem(val) {
				if (val) {
					this.valiFormData.bankCardName = ''
					this.valiFormData.bankCardCode = ''
					this.getBalanceOrAssets(val.name)
				}
			},
			bankCardName(val) {
				if (val) {
					this.valiFormData.bankCardCode = ''
				} else {
					this.okselectitem = ''

				}

			},
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
			selectitembankCardName(val) {
				if (val) {
					this.valiFormData.currency = this.selectitem.name

					this.getUserBankCardData.map((item) => {

						if (val.currency + '-' + val.Subchain != item.bankName + '-' + item.bankCardName) {

							this.$set(item, "disable", true);
						} else {
							this.$set(item, "disable", false);
						}
					})
					console.log(this.getUserBankCardData);

				}
			},


		},

		onShow() {
			this.withdrawCoins()
			if (this.getUser.payPassword == 1) {

				this.getUserBankCard()
			}
			this.getCurrency()
		},
		methods: {
			withdrawCoins() {
				if (this.getUser.payPassword == "0") {
					this.$qxPop.show({
						message: this.$t('noSetWithdrawalPassword'),
						showTitle: false,
						showConfirmButton: true,
						confirmButtonText: this.$t('confirm'),
						duration: 0,
						success: () => {
							uni.redirectTo({
								url: '/pages/other/me/setPayPassword'
							})
						}
					})
				}
			},
			isshowfun(val) {
				let isshow = false
				if (val) {
					val.map((item) => {
						console.log(item.hasOwnProperty("disable"), 'item.hasOwnProperty("disable")');
						if (item.hasOwnProperty("disable") && item.disable == false) {
							isshow = true

						}
					})

				}
				return isshow
			},
			checkbox(event) {
				console.log(event, "event");
				if (event.detail.data) {
					this.okselectitem = event.detail.data
				}
			},
			radioChange(evt) {
				let item = JSON.parse(evt.detail.value)
				this.selectitem = item;

				// console.log(this.valiFormData, "this.valiFormData");
				this.$refs.popup.close()
			},

			radioChangecurrency(evt) {
				let item = JSON.parse(evt.detail.value)
				this.valiFormData.bankCardCode = item.bankCardCode;
				this.valiFormData.bankCardName = item.bankCardName;
				this.valiFormData.bankCardId = item.id
				this.$nextTick(() => {

				})
				console.log(this.valiFormData, "radioChangecurrency");
				this.$refs.currencypopup.close()
			},
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
			// currencychange(event, val) {
			// 	if (val) {
			// 		this.okselectitem = val
			// 		this.valiFormData.bankCardId = ''
			// 	}
			// },
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
							console.log(key, "key");
							this.getCurrencyData.push({
								name: key,
								child: res[key] || []
							})
						}
						this.selectitem = this.getCurrencyData[0]
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
							})
						.catch(err => {
							console.log('err', err);
							if (err.status == '500' && err.msg == 'A000888') {
								// if (this.getUser.certificationStatus == "0" || this.getUser.certificationStatus == "1" || this.getUser
								// 	.certificationStatus == "4") {
								this.$qxPop.show({
									message: this.$t('noCcertification'),
									showTitle: false,
									showConfirmButton: true,
									confirmButtonText: this.$t('confirm'),
									duration: 0,
									success: () => {
										uni.redirectTo({
											url: '/pages/other/home/verification'
										})
									}
								})

							}
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
		// margin: 30rpx;
	}

	.selectforms {
		min-height: 77rpx;
		padding: 0 20rpx 0 30rpx;
	}

	.moneylabel {
		padding-bottom: 16rpx;

	}

	.input-boxs {
		height: 80rpx;
		line-height: 80rpx;

		/deep/ .uni-easyinput__content-input {
			height: 80rpx !important;
			line-height: 80rpx !important;

			.uni-input-wrapper {
				height: 80rpx !important;
				line-height: 80rpx !important;

				.uni-easyinput__placeholder-class {
					height: 80rpx !important;
					line-height: 80rpx !important;

				}

				.uni-input-input {
					height: 80rpx !important;
					line-height: 80rpx !important;

				}
			}
		}
	}

	.danger {
		font-size: 24rpx;
		color: #f56c6c;

		.primary {
			color: #1abb97;
		}
	}



	.fund-box {
		/deep/ .uni-card {
			overflow: inherit;
		}

		color: #1e2329;
		border-radius: 16rpx;
		background: rgba(242, 246, 250, .5);
		// padding: 40px 0px;

		.title {
			font-size: 48rpx;
			font-weight: 600;
			margin-bottom: 40rpx;
		}



		.input-box {
			// border: 1rpx solid #e5e5e5;
			border-radius: 8rpx;
			overflow: hidden;
			flex-flow: row nowrap;

			.inp {
				height: 70rpx;
				// width: 200rpx;

				/deep/ .uni-input-input {
					font-size: 32rpx !important;
				}
			}

			.text-box {
				flex: 0 0 40%;
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
	}

	.popuplabel {
		height: 100rpx;
		line-height: 2 !important;

		.bankCardCode {
			color: #999;
			line-height: 1;
		}
	}
</style>
