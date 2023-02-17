<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('certification')" rightText="" @clickLeft="routeTo(1)">
		</uni-nav-bar>
		<view class="content main p-t-20">
			<!-- 基础表单校验 -->
			<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top"
				labelWidth="690rpx">
				<uni-forms-item :label="$t('country')" name="realRegionCode">

					<uni-list class="listselect" :border="false">
						<uni-list-item v-if="!getrealRegionobj" clickable :border="false" showArrow
							:title="$t('placeholdercountry')" @click="routeTo('/pages/other/normal/phoneCode')" />
						<uni-list-item v-else clickable :border="false" showArrow :title="getrealRegionobj.regionName"
							@click="routeTo('/pages/other/normal/phoneCode')" />
					</uni-list>
				</uni-forms-item>
				<uni-forms-item :label="$t('name')" name="realName">
					<uni-easyinput class="input-box" :inputBorder="false" v-model="valiFormData.realName"
						:placeholder="$t('placeholdername')">
					</uni-easyinput>
				</uni-forms-item>

				<uni-forms-item :label="$t('documentType')" name="certificatesType">
					<uni-list class="listselect" :border="false">
						<uni-list-item v-if="!selectItem.text" title="" clickable showArrow
							@click="$refs.certificatesType.open('bottom')">
							<template v-slot:body>
								<text class="placeholderItem">{{$t('placeholderdocumentType')}}</text>
							</template>
						</uni-list-item>
						<uni-list-item v-if="selectItem.text" :title="selectItem.text" clickable showArrow
							@click="$refs.certificatesType.open('bottom')">
						</uni-list-item>
					</uni-list>
				</uni-forms-item>
				<uni-forms-item :label="$t('identificationNumber')" name="certificatesCode">
					<uni-easyinput class="input-box" :inputBorder="false" v-model="valiFormData.certificatesCode"
						:placeholder="$t('placeholderidentificationNumber')">
					</uni-easyinput>
				</uni-forms-item>
			</uni-forms>
			<button class="button" @click="submit('valiForm')">{{$t('next')}}</button>
		</view>
		<uni-popup ref="certificatesType">
			<view class="popup-select">
				<view class="">
					<radio-group @change="radioChange">
						<label class="flex_sp_be popuplabel" v-for="(item, index) in certificatesType"
							:key="item.value">
							<view>{{item.text}}</view>
							<view>
								<radio color="#1abb97" :value="item.value" :checked="item.value == selectItem.value"
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
	export default {
		data() {
			return {
				selectItem: {
					value: '0',
					text: this.$t('IDcard')
				},
				certificatesType: [{
					value: '0',
					text: this.$t('IDcard')
				}, {
					value: '1',
					text: this.$t('passport')
				}],
				// 校验表单数据
				valiFormData: {
					id: this.$store.state.user.id, //是	int	用户id
					certificatesType: 0, //是	int	证件类型（0：身份证，1：护照）
					realName: '', //	是	string	用户真实姓名
					realRegionCode: '', //	是	string	真实地区号
					regionId: '', //int	id
					regionName: '', //	string	地区/币种名称
					certificatesCode: '', //	是	string	证件号码
				},
				// 校验规则
				rules: {
					realRegionCode: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}]
					},
					realName: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}]
					},

					certificatesType: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}]
					},
					certificatesCode: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}, {
							pattern: /^[a-zA-Z0-9]{4,300}$/,
							errorMessage: this.$t('errorStandard') + this.$t('errorLength1') + "[a-zA-Z0-9]"
						}]
					}
				},
			}
		},
		computed: {
			getrealRegionobj() {
				return this.$store.state.user.realRegionobj
			}
		},
		watch: {
			getrealRegionobj: {
				handler(val) {
					if (val) {

						this.valiFormData.realRegionCode = val.regionCode
					}
				},
				immediate: true,
				deep: true
			}
		},
		onShow() {

			// console.log(this.realRegionobj, "realRegionobj");
		},
		onLoad() {},
		methods: {
			select(e) {
				console.log("e:", e);
			},
			radioChange(evt) {
				console.log(evt.detail.value, "evt.detail.value");
				for (let i = 0; i < this.certificatesType.length; i++) {

					if (this.certificatesType[i].value == evt.detail.value) {
						this.selectItem.value = this.certificatesType[i].value;
						this.selectItem.text = this.certificatesType[i].text;
						this.valiFormData.certificatesType = this.selectItem.value
						break;
					}
				}
				this.$refs.certificatesType.close()
			},
			submit(ref) {

				this.$refs[ref].validate().then(() => {
					this.routeTo('/pages/other/home/verificationAdvanced', '?valiFormData=' + encodeURIComponent(
						JSON.stringify(this
							.valiFormData)))

				}).catch(err => {
					console.log('catch', err);
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		padding-top: 30rpx;

		.box {
			// border: 1px solid #dcdfe6;
			border-radius: 4px;

			/deep/ .uni-list {
				border-radius: 4px;
				overflow: hidden;
			}

			/deep/ .uni-list-item__container {
				line-height: 35px;
				padding: 0 10px;
			}
		}
	}
</style>
