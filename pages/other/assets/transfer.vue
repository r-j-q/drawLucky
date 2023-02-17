<template>
	<view class="app transfer">
		<uni-nav-bar class="nav-bar" statusBar backgroundColor="#f6f6f6" :title="$t('capitalTransfer')" left-icon="left"
			right-icon="calendar" rightText="" @clickLeft="routeTo(1)"
			@clickRight="routeTo('/pages/other/assets/transferRecords')">
		</uni-nav-bar>
		<view class="content main p-t-40">
			<uni-forms ref="valiForm" labelPosition="top" :rules="rules" :modelValue="valiFormData">
				<uni-card class="bgfff m-b-20 card1  " margin='0px' :is-shadow="false" :border="false">
					<view class="form b-line ">
						<view class="dot-line"></view>
						<uni-forms-item name="sourceWalletType">
							<view class="m-l-20">
								<view class="">
									{{$t('从')}}
								</view>
								<view class="tal" @click="formOrToFun('sourceWalletType')">
									<text>{{valiFormData.sourceWalletType?items[valiFormData.sourceWalletType-1].name:$t('unselected')}}</text>
									<uni-icons type="forward" size="15"></uni-icons>
								</view>
							</view>
						</uni-forms-item>
					</view>
					<view class="to  ">
						<view class="dot-line"></view>
						<uni-forms-item label="" name="destinationWalletType">
							<view class="m-l-20">
								<view class="">
									{{$t('to')}}
								</view>
								<view class="tal" @click="formOrToFun('destinationWalletType')">
									<text>{{valiFormData.destinationWalletType?items[valiFormData.destinationWalletType-1].name:$t('unselected')}}</text>
									<uni-icons type="forward" size="15"></uni-icons>
								</view>
							</view>
						</uni-forms-item>
					</view>
					<view class="top-down flex_center" @click="reversal">
						<view class=" image50">

							<image class="image50" src="../../../static/img/zh.png" mode="widthFix"></image>
						</view>
					</view>
				</uni-card>
				<uni-forms-item label="" name="currency">
					<uni-card class="bgfff m-b-20  asd  " :class="okselect.currency?'qwe':''" margin='0' padding="0px"
						:is-shadow="false" :border="false">
						<uni-list :border="false">
							<uni-list-item :border="false" :title="$t('currency')" clickable showArrow
								@click="showpopupcurrency()">
								<template v-slot:footer>
									<image class="image40" :src="'../../../static/trade/'+okselect.currency+'.png'"
										mode="widthFix">
									</image>
									<text class="m-l-20">{{okselect.currency||$t('unselected')}}</text>
								</template>
							</uni-list-item>
						</uni-list>
					</uni-card>
				</uni-forms-item>
				<uni-forms-item label="" name="amount">

					<uni-card class="bgfff m-b-20   " margin='0' padding="12px 0 12px 0px" :is-shadow="false"
						:border="false">
						<view class="flex_sp_be">

							<view class="c333">
								{{$t('num')}}
							</view>
							<view class="m-l-20  font-24 " v-show="okselect.currency">
								{{$t('availablenum')}}：{{ okselect.amount}} {{okselect.currency}}
							</view>
						</view>
						<view class=" flex_sp_be input-box">
							<uni-easyinput class="easyinput" v-model="valiFormData.amount" :inputBorder="false"
								:styles="styles" :placeholderStyle="placeholderStyle" placeholder="">
							</uni-easyinput>
							<view class="">
								<!-- <text class="font-32 text1">{{okselect.currency||''}}</text> -->
								<text class="font-32 text2 c333 "
									@click="valiFormData.amount= okselect.amount">{{$t('all')}}</text>
							</view>
						</view>
					</uni-card>
				</uni-forms-item>

				<button class="button" @click="submit('valiForm')"
					:disabled="valiFormData.amount<=0">{{$t('confirm')}}</button>
			</uni-forms>
		</view>
		<uni-popup ref="popupcurrency">
			<view class="popup-select">
				<view class="">
					<radio-group @change="radioChangecurrency">
						<label class="flex_sp_be popuplabel" v-for="(item, index) in okitems" :key="item.index">
							<view class="flex_start">
								<image class="image40" :src="'../../../static/trade/'+item.currency+'.png'"
									mode="widthFix">
								</image>
								<view class="m-l-20">{{item.currency}}</view>
							</view>
							<view>
								<radio color="#1abb97" :value="JSON.stringify( item)"
									:checked="item.currency === okselect.currency" style="transform:scale(0.7)" />
							</view>
						</label>
					</radio-group>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="popup">
			<view class="popup-select">
				<view class="">
					<radio-group @change="radioChange">
						<label class="flex_sp_be popuplabel" v-for="(item, index) in items" :key="item.value">

							<view>{{item.name}}</view>
							<view>
								<radio color="#1abb97" :value="item.value"
									:checked="item.value === valiFormData[formOrTo]" style="transform:scale(0.7)" />
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
				getBalanceOrAssetsData: '',
				okitems: [],
				okselect: {
					currency: '',
					amount: 0,
					frozenAmount: 0
				},
				items: [{
					value: '1',
					name: this.$t('currencyAccount')
				}, {
					value: '2',
					name: this.$t('futuresAccount')
				}, {
					value: '3',
					name: this.$t('legalAccount')
				}, {
					value: '4',
					name: this.$t('trustAccount')
				}],
				formOrTo: 'sourceWalletType',
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
				this.valiFormData.currency = ''
				this.okselect = {
					currency: '',
					amount: 0,
					frozenAmount: 0
				}
				if (val != '' && this.destinationWalletType != '') {
					this.okitems = this.okitemsfun(this.getBalanceOrAssetsData[this
						.destinationWalletType], this.getBalanceOrAssetsData[val])
				} else {
					this.okitems = []

				}
				console.log(this.okitems, "this.okitems");
			},
			destinationWalletType(val) {
				this.valiFormData.currency = ''
				this.okselect = {
					currency: '',
					amount: 0,
					frozenAmount: 0
				}
				if (this.sourceWalletType != '' && val != '') {
					// okitems
					// val
					this.okitems = this.okitemsfun(this
						.getBalanceOrAssetsData[val], this.getBalanceOrAssetsData[this.sourceWalletType])
				} else {
					this.okitems = []

				}
				console.log(this.okitems, "this.okitems");
			}

		},

		onLoad() {
			this.getBalanceOrAssets()
		},
		methods: {
			showpopupcurrency() {
				console.log(this.okitems.length, "this.okitems.length")
				if (this.okitems.length > 0) {
					this.$refs.popupcurrency.open('bottom')
				} else {
					uni.showToast({
						title: this.$t("errorEmpty"),
						icon: 'none'
					})
				}
			},
			formOrToFun(str) {
				this.formOrTo = str
				this.$refs.popup.open('bottom')
			},
			radioChange(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.detail.value) {
						this.valiFormData[this.formOrTo] = this.items[i].value;
						this.okselect = ""
						this.$refs.popup.close()
						break;
					}
				}
			},
			radioChangecurrency(evt) {

				let item = JSON.parse(evt.detail.value)
				for (let i = 0; i < this.okitems.length; i++) {
					if (this.okitems[i].currency === item.currency) {
						this.okselect = item;
						this.valiFormData.currency = item.currency
						this.$refs.popupcurrency.close()
						break;
					}
				}

			},
			reversalcurrency(item) {

				for (let i = 0; i < this.okitems.length; i++) {
					if (this.okitems[i].currency === item.currency) {
						this.okselect = this.okitems[i];
						this.valiFormData.currency = this.okitems[i].currency
						break;
					}
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
				this.$nextTick(() => {

					this.reversalcurrency(this.okselect)
				})
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
					this.valiFormData.sourceWalletType = this.valiFormData.sourceWalletType
					this.valiFormData.destinationWalletType = this.valiFormData
						.destinationWalletType
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
							title: this.$t('moneybag'),
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
	.asd {

		/deep/ .uni-list-item__container {
			padding-left: 0rpx !important;

			.uni-list-item__extra-text {
				font-size: 32rpx !important;

			}

		}

	}

	.qwe {
		/deep/ .uni-list-item__extra-text {
			font-size: 32rpx !important;
			color: #333 !important;
		}
	}

	/deep/ .uni-forms-item__label {
		display: none
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

	.transfer {
		background-color: #f6f6f6;
		min-height: 100vh;
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

		}
	}

	.popup-content {
		overflow: auto;
		padding: 30rpx;
		background-color: #fff;
		border-top-left-radius: 40rpx;
		border-top-right-radius: 40rpx;
		max-height: 50vh;

		.label {
			padding: 15rpx;
			border-bottom: 2rpx solid #f2f2f5;
		}

		.label:nth-last-child(1) {
			border: none;
		}
	}
</style>
