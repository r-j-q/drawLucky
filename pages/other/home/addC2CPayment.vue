<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('addCollection')" rightText="" @clickLeft="routeTo(1)">
		</uni-nav-bar>
		<view class="content  main">

			<!-- 基础表单校验 -->
			<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top"
				labelWidth="690rpx">
				<uni-forms-item :label="$t('name')" name="payeeName">
					<uni-easyinput class="input-box" :inputBorder="false" v-model="valiFormData.payeeName"
						:placeholder="$t('placeholdername')">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item :label="$t('bankAccount')" name="bankCardCode">
					<uni-easyinput class="input-box" type="number" :inputBorder="false"
						v-model="valiFormData.bankCardCode" :placeholder="$t('placeholderbankAccount')">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item :label="$t('bankName')" name="bankName">
					<uni-easyinput class="input-box" :inputBorder="false" v-model="valiFormData.bankName"
						:placeholder="$t('placeholderbankName')">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item :label="$t('currency')" name="legalCurrency">

					<uni-list class="listselect" :border="false">
						<uni-list-item :title="currentRegion.regionCode" clickable showArrow
							@click="$refs.popup.open('bottom')">
						</uni-list-item>
					</uni-list>
				</uni-forms-item>
				<uni-forms-item :label="$t('subbranch')+$t('optional')" name="bankCardName">
					<uni-easyinput class="input-box" :inputBorder="false" v-model="valiFormData.bankCardName"
						:placeholder="$t('placeholdersubbranch')">
					</uni-easyinput>
				</uni-forms-item>

				<uni-forms-item :label="$t('bankcode')+$t('optional')" name="note1">
					<uni-easyinput class="input-box" :inputBorder="false" v-model="valiFormData.note1"
						:placeholder="$t('placeholderbankcode')">
					</uni-easyinput>
				</uni-forms-item>
				<!-- <uni-forms-item label="备注(选填)" name="note2">
					<uni-easyinput class="input-box" :inputBorder="false" v-model="valiFormData.note2" placeholder="">
					</uni-easyinput>
				</uni-forms-item> -->
				<uni-forms-item :label="$t('payPassword')" name="payPassword">
					<uni-easyinput class="input-box" type="password" :inputBorder="false"
						v-model="valiFormData.payPassword" :placeholder="$t('placeholderpayPassword')">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item>
					<button class="button " @click="submit('valiForm')">{{$t('confirm')}}</button>
				</uni-forms-item>
			</uni-forms>
		</view>
		<uni-popup ref="popup">
			<view class="popup-select">
				<view class="uni-list">
					<radio-group @change="radioChange">
						<label class="flex_sp_be popuplabel" v-for="(item, index) in getRegionData" :key="item.id">
							<view>{{item.regionCode}}</view>
							<view>
								<radio color="#1abb97" :value="item.regionCode"
									:checked="item.regionCode === currentRegion.regionCode"
									style="transform:scale(0.7)" />
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

				currentRegion: {
					exchangeRate: 0,
					id: 16,
					regionCode: "USD",
					regionName: this.$t('USD'),
					type: 1,
				},
				getRegionData: "",
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


		watch: {
			currentRegion(val) {
				this.valiFormData.legalCurrency = val.regionCode
			}
		},
		onLoad() {
			this.currentRegion = uni.getStorageSync('currentRegion')
			this.getRegionData = uni.getStorageSync('getRegion')
		},
		methods: {
			select(e) {
				console.log("e:", e);
			},
			radioChange(evt) {
				for (let i = 0; i < this.getRegionData.length; i++) {
					if (this.getRegionData[i].regionCode === evt.detail.value) {
						this.currentRegion = this.getRegionData[i];
						uni.setStorageSync('currentRegion', this.getRegionData[i])
						break;
					}
				}
				this.$refs.popup.close()
			},

			submit(ref) {
				this.$refs[ref].validate().then(() => {
					this.valiFormData.note = this.valiFormData.note2 ? this.valiFormData.note1 + ',' + this
						.valiFormData.note2 : this.valiFormData.note1
					this.$api.bankSetting.addUserBankCard(this.deleteInvalidParam(this.valiFormData)).then(res => {
						console.log('res');
						this.routeTo(1)
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
		padding-bottom: 20rpx;
	}
</style>
