<template>
	<view class="page">
		<headtop type="single"></headtop>
		<view class="main">

			<uni-nav-bar class="nav-bar" statusBar backgroundColor="#eef1f5" left-icon="left" :leftText="$t('goBack')"
				color="#1abb97" rightText="" @clickLeft="routeTo(1)">
			</uni-nav-bar>
			<view class="fund-box p-t-40">
				<h2 class="title m-b-40">{{$t('yourWalletbank')}}</h2>
				<uni-card class="bgfff m-b-20 card1  " margin='0px' padding="40px" :is-shadow="false" :border="false">
					<uni-table ref="table" :loading="loading" border stripe :emptyText="$t('contentnomore')">
						<uni-tr>
							<uni-th :width="80" align="center">{{$t('bankName')}}</uni-th>
							<uni-th :width="80" align="center">{{$t('name')}}</uni-th>
							<uni-th align="left">{{$t('bankAccount')}}</uni-th>
							<uni-th :width="100" align="center">{{$t('subbranch')}}</uni-th>
							<uni-th :width="80" align="center">{{$t('note')}}</uni-th>
							<uni-th width="50" align="center">{{$t('operation')}}</uni-th>
						</uni-tr>
						<uni-tr v-for="(item, index) in getUserBankCardData" :key="index">
							<uni-td>{{ item.bankName }}</uni-td>
							<uni-td>{{ item.payeeName }}</uni-td>
							<uni-td>{{ item.bankCardCode }}</uni-td>
							<uni-td>{{ item.bankCardName }}</uni-td>
							<uni-td>{{ item.note }}</uni-td>
							<uni-td>
								<view class="unigroup" @click="delBankCard(item)">
									<button class="" size="mini" type="warn">{{$t('del')}}</button>
								</view>
							</uni-td>

						</uni-tr>
					</uni-table>
				</uni-card>
				<h2 class="title m-b-40">{{$t('addCollection')}}</h2>
				<uni-card class="bgfff m-b-20 card1  " margin='0px' padding="40px" :is-shadow="false" :border="false">

					<h4 class="title m-b-20">{{$t('nowCollectionMethod')}}：</h4>
					<h6 class="title m-b-40">{{$t('nowCollectionMethodTip')}}</h6>

					<uni-forms ref="valiForm" :rules="rules" label-width="150px" :modelValue="valiFormData"
						label-position="top">
						<uni-forms-item :label="$t('name')" name="payeeName">
							<uni-easyinput v-model="valiFormData.payeeName" :placeholder="$t('placeholdername')">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item :label="$t('bankAccount')" name="bankCardCode">
							<uni-easyinput v-model="valiFormData.bankCardCode"
								:placeholder="$t('placeholderbankAccount')">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item :label="$t('bankName')" name="bankName">
							<uni-easyinput v-model="valiFormData.bankName" :placeholder="$t('placeholderbankName')">
							</uni-easyinput>
						</uni-forms-item>

						<uni-forms-item :label="$t('subbranch')+$t('optional')" name="bankCardName">
							<uni-easyinput v-model="valiFormData.bankCardName" placeholder="">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item :label="$t('currency')" name="legalCurrency">

							<uni-data-select class="select2" v-model="valiFormData.legalCurrency" labelkey="regionCode"
								valuekey="regionCode" :localdata="getRegionData" @change="changeRegion" :clear="false">
							</uni-data-select>
						</uni-forms-item>
						<uni-forms-item :label="$t('bankcode')+$t('optional')" name="note1">
							<uni-easyinput v-model="valiFormData.note1" placeholder="">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item :label="$t('note')+$t('optional')" name="note2">
							<uni-easyinput v-model="valiFormData.note2" placeholder="">
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
							<uni-easyinput v-model="valiFormData.payPassword" type="password" placeholder="">
							</uni-easyinput>
						</uni-forms-item>
						<button class="button" @click="submit('valiForm')">{{$t('confirm')}}</button>
					</uni-forms>

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
				getUserBankCardData: [],
				getRegionData: [],

				// 校验表单数据
				valiFormData: {
					bankCardType: 1, //	是	int	货币类型（0：虚拟货币，1：真实货币）
					bankName: '', //是	string	所属银行/币种
					bankCardCode: '', //	是	string	银行卡号/钱包地址
					bankCardName: '', //	否（货币类型为0时必传）	string	所属银行缩写/子链---支行
					payeeName: '', //	否（货币类型为1时必传）	string	收款人姓名
					payPassword: '', //是	string	支付密码
					legalCurrency: '', //否（货币类型为1时必传）	string	法币
					note1: '', //	否	string	银行编码(选填)
					note2: '', //	否	string	备注
				},
				// 校验规则
				rules: {
					bankName: {
						rules: [{
							required: true,
							errorMessage: this.$t('errorEmpty')
						}]
					},
					bankCardCode: {
						rules: [{
							required: true,
							errorMessage: this.$t('errorEmpty')
						}, {
							pattern: /^[0-9]{4,30}$/,
							errorMessage: this.$t('errorStandard') + this.$t('errorLength') + '[0-9]'
						}]
					},
					payeeName: {
						rules: [{
							required: true,
							errorMessage: this.$t('errorEmpty')
						}]
					},

					payPassword: {
						rules: [{
							required: true,
							errorMessage: this.$t('errorEmpty')
						}, {
							pattern: /^[a-zA-Z0-9]{4,30}$/,
							errorMessage: this.$t('errorStandard') + this.$t('errorLength') + "[a-zA-Z0-9]"
						}]
					},
					legalCurrency: {
						rules: [{
							required: true,
							errorMessage: this.$t('errorEmpty')
						}]
					}
				}
			}
		},

		computed: {
			//借助mapGetters生成计算属性：
			...mapGetters('user', ['getUser']),
		},

		onShow() {
			this.getUserBankCard()
		},
		onLoad() {
			this.getRegion()
		},
		methods: {
			getUserBankCard() {
				let params = {
					type: 1, //是	in
				}
				this.loading = true
				this.$api.withdraw.getUserBankCard(this.deleteInvalidParam(params)).then(res => {
						this.loading = false
						console.log('res', res);
						this.getUserBankCardData = res
					})
					.catch(err => {
						this.loading = false
						console.log('err', err);
					})
			},
			getRegion() {
				let params = {
					type: 1, //	是	int	类型
					page: 1, //	是	int	页码
					pageSize: 1000, //	是	int	每页条数
				}
				this.$api.changeValuation.getRegion(params).then(res => {
					this.getRegionData = res.list
					uni.setStorageSync('getRegion', res.list)
				})
			},
			changeRegion(event) {
				console.log(event, "event");
			},
			delBankCard(item) {
				uni.showModal({
					title: '',
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
			submit(ref) {
				this.$refs[ref].validate().then(() => {
					this.valiFormData.note = this.valiFormData.note2 ? this.valiFormData.note1 + ',' + this
						.valiFormData.note2 : this.valiFormData.note1
					this.$api.bankSetting.addUserBankCard(this.deleteInvalidParam(this.valiFormData)).then(res => {
						console.log('res');
						this.valiFormData = {
							bankCardType: 1, //	是	int	货币类型（0：虚拟货币，1：真实货币）
							bankName: '', //是	string	所属银行/币种
							bankCardCode: '', //	是	string	银行卡号/钱包地址
							bankCardName: '', //	否（货币类型为0时必传）	string	所属银行缩写/子链---支行
							payeeName: '', //	否（货币类型为1时必传）	string	收款人姓名
							payPassword: '', //是	string	支付密码
							legalCurrency: '', //否（货币类型为1时必传）	string	法币
							note1: '', //	否	string	银行编码(选填)
							note2: '', //	否	string	备注
						}
						this.getUserBankCard()
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

		.unigroup {
			min-width: 80px;
			display: flex;
			align-items: center;
		}

	}
</style>
