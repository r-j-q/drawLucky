<template>
	<view class="page">
		<headtop type="single"></headtop>
		<view class="main">

			<uni-nav-bar class="nav-bar" statusBar backgroundColor="#eef1f5" left-icon="left" :leftText="$t('goBack')"
				color="#1abb97" rightText="" @clickLeft="routeTo(1)">
			</uni-nav-bar>
			<view class="fund-box">
				<h3 class="title">{{$t('yourWallet')}}</h3>
				<uni-card class="bgfff m-b-20 card1  " margin='0px' padding="40px" :is-shadow="false" :border="false">
					<uni-table ref="table" :loading="loading" border stripe :emptyText="$t('contentnomore')">
						<uni-tr>
							<uni-th width="150" align="left">{{$t('currency')}}</uni-th>
							<uni-th width="80" align="center">{{$t('network')}}</uni-th>
							<uni-th align="left">{{$t('address')}}</uni-th>
							<uni-th width="80" align="center">Memo</uni-th>
							<uni-th width="80" align="center">{{$t('note')}}</uni-th>
							<uni-th width="80" align="center">{{$t('operation')}}</uni-th>
						</uni-tr>
						<uni-tr v-for="(item, index) in getUserBankCardData" :key="index">
							<uni-td>
								<view class="flex_start">
									<view class="image55 ">
										<image class="image55" v-if="!item.defaultSrc"
											:src="'../../../../static/trade/'+item.bankName+'.png'" mode="widthFix"
											@error="ErrSrc($event, item)">
										</image>
										<image class="image55 " v-else src="../../../../static/trade/default.png" />
									</view>
									<text class="m-l-20">{{ item.bankName }}</text>
								</view>
							</uni-td>
							<uni-td>{{ item.bankCardName }}</uni-td>
							<uni-td>{{ item.bankCardCode }}</uni-td>
							<uni-td>{{ item.bankCardName }}</uni-td>
							<uni-td>{{ item.note }}</uni-td>

							<uni-td>
								<view class="uni-group" @click="delBankCard(item)">
									<button class="uni-button" size="mini" type="warn">{{$t('del')}}</button>
								</view>
							</uni-td>
						</uni-tr>
					</uni-table>
				</uni-card>
				<h3 class="title">{{$t('addCollection')}}</h3>
				<uni-card class="bgfff m-b-20 card1  " margin='0px' padding="40px" :is-shadow="false" :border="false">
					<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top">
						<uni-forms-item :label="$t('currency')" name="bankName">
							<uni-data-select v-model="valiFormData.bankName" icon="currency"
								:localdata="getCurrencyData" labelkey="currency-Subchain" valuekey="currency"
								:clear="false" @change="currencychange">
							</uni-data-select>
						</uni-forms-item>
						<uni-forms-item :label="$t('address')" name="bankCardCode">
							<uni-easyinput class="input-box" v-model="valiFormData.bankCardCode" type="text"
								:inputBorder="false" :placeholder="$t('placeholderAddress')">
							</uni-easyinput>
						</uni-forms-item>

						<uni-forms-item :label="$t('note')" name="note">
							<uni-easyinput class="input-box" v-model="valiFormData.note" type="text"
								:inputBorder="false" :placeholder="$t('placeholderNote')+$t('optional')">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="" name="payPassword">
							<template slot="label">
								<view class="flex_sp_be forms-label">
									<view>{{$t('payPassword')}}</view>
									<view class="danger" v-if="getUser.payPassword == 0"
										@click="routeTo('/pages/pc/src/setPayPassword/setPayPassword')">
										{{$t('notSet')}} <text class="primary">{{$t('payPassword')}}</text>
									</view>
								</view>
							</template>
							<uni-easyinput class="input-box" v-model="valiFormData.payPassword" type="password"
								:inputBorder="false" :placeholder="$t('placeholderpayPassword')">
							</uni-easyinput>
						</uni-forms-item>
					</uni-forms>
					<button class="button m-t-20" @click="submit('valiForm')">{{$t('confirm')}}</button>
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
				loading: false,
				okselectitem: {

				},
				getUserBankCardData: [],
				getCurrencyData: [],
				// ??????????????????
				valiFormData: {
					bankCardType: 0, //	???	int	???????????????0??????????????????1??????????????????
					bankName: '', //???	string	????????????/??????
					bankCardCode: '', //	???	string	????????????/????????????
					bankCardName: '', //	?????????????????????0????????????	string	??????????????????/??????---??????
					payeeName: '', //	?????????????????????1????????????	string	???????????????
					payPassword: '', //???	string	????????????
					legalCurrency: '', //?????????????????????1????????????	string	??????
					note: '', //	???	string	??????
				},
				// ????????????
				rules: {
					bankName: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}]
					},
					bankCardCode: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}, {
							pattern: /^[a-zA-Z0-9]{4,300}$/,
							errorMessage: this.$t('errorStandard') + this.$t('errorLength1') + "[a-zA-Z0-9]"
						}]
					},
					// bankCardName: {
					// 	rules: [{
					// 		required: true,
					// 		errorMessage: '???????????????'
					// 	}]
					// },

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
			//??????mapGetters?????????????????????
			...mapGetters('user', ['getUser']),
		},
		watch: {
			getUser: {
				handler(val) {
					this.valiFormData.userId = val.id
				},
				deep: true,
				immediate: true
			},

		},

		onShow() {
			this.getUserBankCard()
			this.getCurrency()
		},
		methods: {
			ErrSrc(e, item) {
				this.$set(item, "defaultSrc", true);
				// this.ImgSrc = this.errSrc;
			},
			delBankCard(item) {
				uni.showModal({
					content: this.$t('showModal1'),
					cancelText: this.$t('cancelText'),
					confirmText: this.$t('confirm'),
					success: (res) => {
						if (res.confirm) {
							this.$api.addWallet.delBankCard({
								id: item.id
							}).then((res) => {
								this.getUserBankCard()
							})
						}
					}
				})
			},
			currencychange(event, val) {
				if (val) {
					this.okselectitem = val
					this.valiFormData.bankCardName = val.Subchain
				}
			},
			getUserBankCard() {
				let params = {
					type: 0, //???	int	??????????????????0???????????????1????????????????????????
				}
				this.loading = true
				this.$api.withdraw.getUserBankCard(this.deleteInvalidParam(params)).then(
						res => {
							this.loading = false
							console.log('res', res);
							this.getUserBankCardData = res
						})
					.catch(err => {
						this.loading = false
						console.log('err', err);
					})
			},
			getCurrency() {
				let params = {
					type: 0, //???????????? ???0?????? 1?????? 2?????????
				}
				this.$api.addWallet.getCurrency(this.deleteInvalidParam(params)).then(
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

					this.$api.addWallet.addUserBankCard(this.deleteInvalidParam(this.valiFormData)).then(
						res => {
							console.log('res', res);
							// ??????????????????
							this.valiFormData = {
								bankCardType: 0, //	???	int	???????????????0??????????????????1??????????????????
								bankName: '', //???	string	????????????/??????
								bankCardCode: '', //	???	string	????????????/????????????
								bankCardName: '', //	?????????????????????0????????????	string	??????????????????/??????---??????
								payeeName: '', //	?????????????????????1????????????	string	???????????????
								payPassword: '', //???	string	????????????
								legalCurrency: '', //?????????????????????1????????????	string	??????
								note: '', //	???	string	??????
							}
							this.getUserBankCard()
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

		.fund-box {
			/deep/ .uni-card {
				overflow: inherit;
			}

			/deep/ .uni-table.table--stripe {
				width: 100% !important;
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


		}

		.uni-group {
			display: flex;
			align-items: center;

			.uni-button {

				padding: 0px 10px;
			}
		}


	}
</style>
