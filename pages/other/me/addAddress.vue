<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('addWalletAddress')" rightText=""
			@clickLeft="routeTo(1)">
		</uni-nav-bar>
		<view class="content">

			<!-- 基础表单校验 -->
			<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top"
				labelWidth="690rpx">
				<uni-forms-item :label="$t('currency')" name="currency">
					<uni-list class="listselect" :border="false">
						<uni-list-item v-if="!selectitem" title="" clickable showArrow
							@click="$refs.popup.open('bottom')">
							<template v-slot:body>
								<text class="placeholderItem">{{$t('placeholderCurrency')}}</text>
							</template>
						</uni-list-item>
						<uni-list-item v-else :title="selectitem.name"
							:thumb="'../../../static/trade/'+selectitem.name+'.png'" thumb-size="sm" clickable showArrow
							@click="$refs.popup.open('bottom')">
						</uni-list-item>
					</uni-list>
				</uni-forms-item>
				<uni-forms-item :label="$t('payeeName')" name="payeeName">
					<uni-data-checkbox mode="tag" v-model="valiFormData.payeeName" selectedColor="#1abb97"
						:disabled="!selectitem.child" :localdata="selectitem.child" :map="{
							text:'Subchain',value:'Subchain'
						}"></uni-data-checkbox>
				</uni-forms-item>
				<!-- <uni-forms-item label="链名" name="email">
					<uni-easyinput v-model="valiFormData.username" placeholder="请输入链名" />
				</uni-forms-item> -->
				<uni-forms-item :label="$t('address')" name="bankCardCode" class="Codebox">
					<uni-easyinput class="input-box" :inputBorder="false" :maxlength="100"
						v-model="valiFormData.bankCardCode" :placeholder="$t('placeholderAddress')" />
				</uni-forms-item>


				<uni-forms-item :label="$t('note')+$t('optional')" name="note">
					<uni-easyinput class="input-box" :inputBorder="false" :maxlength="50" type="text"
						v-model="valiFormData.note" :placeholder="$t('placeholderNote')" />
				</uni-forms-item>
				<uni-forms-item :label="$t('payPassword')" name="payPassword">
					<uni-easyinput class="input-box" :inputBorder="false" :maxlength="30" type="password"
						v-model="valiFormData.payPassword" :placeholder="$t('placeholderpayPassword')" />
				</uni-forms-item>
			</uni-forms>
			<button class="button" @click="submit('valiForm')">{{$t('confirm')}}</button>
		</view>
		<uni-popup ref="popup">
			<view class="popup-select">
				<view class="uni-list">
					<radio-group @change="radioChange">
						<label class="flex_sp_be popuplabel" v-for="(item, index) in getCurrencyData" :key="item.id">
							<view class=" flex_start">
								<image class="image40" :src="'../../../static/trade/'+item.name+'.png'" mode="widthFix">
								</image>
								<view class="m-l-20">{{item.name}}</view>
								<!-- <view>{{item.payeeName}}</view> -->
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
				current: "",
				getCurrencyData: [],
				// 校验表单数据
				valiFormData: {
					bankCardType: 0, //	是	int	货币类型（0：虚拟货币，1：真实货币）
					bankName: '', //是	string	所属银行/币种
					bankCardCode: '', //	是	string	银行卡号/钱包地址
					bankCardName: '', //	否（货币类型为0时必传）	string	所属银行缩写/子链---支行
					payeeName: '', //	否（货币类型为1时必传）	string	收款人姓名
					payPassword: '', //是	string	支付密码
					legalCurrency: '', //否（货币类型为1时必传）	string	法币
					note: '', //	否	string	备注
				},
				// 校验规则
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
					// 		errorMessage: '请选择链名'
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
			//借助mapGetters生成计算属性：
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
			selectitem(val) {
				this.valiFormData.bankName = val.name
			}
		},
		onLoad() {
			this.getCurrency()
		},
		methods: {
			select(e) {
				console.log("e:", e);
			},
			radioChange(evt) {
				let item = JSON.parse(evt.detail.value)
				this.selectitem = item;
				this.$refs.popup.close()
			},
			getCurrency() {
				let params = {
					type: 0, //出站类型 （0提币 1卖出 2买币）
				}
				this.$api.addWallet.getCurrency(this.deleteInvalidParam(params)).then(
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
					this.valiFormData.bankCardName = this.valiFormData.payeeName
					this.$api.addWallet.addUserBankCard(this.deleteInvalidParam(this.valiFormData)).then(
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

</style>
