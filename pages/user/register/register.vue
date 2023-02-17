<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('register')" rightText=""
			@clickLeft="routeTo('/pages/user/login/login')">
			<block slot="right">
				<view class="" @click="openLanguage">
					{{$t('language')}}
				</view>
			</block>
		</uni-nav-bar>
		<view class="content">
			<view class="example">
				<!-- 基础表单校验 -->
				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top"
					labelWidth="690rpx">
					<uni-forms-item :label="$t('mailbox')" name="email">
						<uni-easyinput class="input-box " :inputBorder="false" v-model="valiFormData.email"
							:placeholder="$t('placeholderName')" />
					</uni-forms-item>
					<uni-forms-item :label="$t('code')" name="code" class="Codebox"
						v-if="WEBINFO.emailValidationSwitch">
						<view class="input-box inpCode">
							<uni-easyinput :adjust-position="false" :inputBorder="false" type="text"
								v-model="valiFormData.code" :placeholder="$t('placeholderCode')" />
						</view>
						<view class=" imgCode"
							:disabled="$store.state.system.timeCode==null&&$store.state.system.timeStats?false:true"
							@click="oninpCode()">
							<text class="c999" v-show="$store.state.system.timeStats">{{$t('sending')}}</text>
							<text class="" v-show="!$store.state.system.timeStats">{{timeNumtext}}</text>
						</view>
					</uni-forms-item>
					<uni-forms-item :label="$t('password')" name="password">
						<uni-easyinput class="input-box " :inputBorder="false" type="password"
							v-model="valiFormData.password" :placeholder="$t('placeholderPassword')" />
					</uni-forms-item>
					<uni-forms-item :label="$t('okPassword')" name="okPassword">
						<uni-easyinput class="input-box " :inputBorder="false" type="password"
							v-model="valiFormData.okPassword" :placeholder="$t('placeholderPassword')" />
					</uni-forms-item>
					<uni-forms-item :label="$t('invitationCode')" name="invitationCode">
						<uni-easyinput class="input-box " :inputBorder="false" type="text"
							v-model="valiFormData.invitationCode" :placeholder="$t('placeholderinvitationCode')" />
					</uni-forms-item>
				</uni-forms>
				<view class="flex_start m-b-40 m-t-40 ">

					<checkbox-group @change="checkboxChange">
						<label>
							<checkbox color="#1abb97" value="agree" :checked="agree" style="transform:scale(0.7)" />
							{{$t('checkedAgree')}}
						</label>
					</checkbox-group>
					<text class="c1abb97"
						@click="routeTo('/pages/other/normal/protocol')">{{$t('userAgreement')}}</text>
					<text> {{$t('and')}} </text>
					<text class="c1abb97" @click="routeTo('/pages/other/normal/privacy')">{{$t('privacyPolicy')}}</text>
				</view>
				<button class="button" @click="submit('valiForm')">{{$t('register')}}</button>
			</view>

		</view>
		<uni-popup ref="popup">
			<view class="popup-select">
				<view class="">
					<radio-group @change="radioChange">
						<label class="flex_sp_be popuplabel" v-for="(item, index) in langList" :key="item.value">
							<view>{{item.name}}</view>
							<view>
								<radio :value="item.value" :checked="item.value === current"
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
				current: uni.getLocale() || 'en',
				imgCode: '',
				agree: true, //是否同意隐私政策
				WEBINFO: uni.getStorageSync('WEBINFO'),
				// 校验表单数据
				valiFormData: {
					email: '', //	是	string	用户邮箱
					code: '', //	是	string	验证码
					realRegionCode: '', //	否	string	地区编码
					password: '', //	是	string	密码
					okPassword: '', //是	string	确认密码
					equipmentName: '', //	是	string	设备名称
					equipmentId: '', //	是	string	设备id
					invitationCode: '', //	否	string	邀请码
				},
				// 校验规则
				rules: {
					email: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}, {
							pattern: /^\S+?@\S+?.\S+?$/,
							errorMessage: this.$t('errorStandard')
						}]
					},
					code: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}, {
							pattern: /^[a-zA-Z0-9]{4,30}$/,
							errorMessage: this.$t('errorStandard') + this.$t('errorLength') + "[a-zA-Z0-9]"
						}]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}, {
							pattern: /^[a-zA-Z0-9]{4,30}$/,
							errorMessage: this.$t('errorStandard') + this.$t('errorLength') + "[a-zA-Z0-9]"
						}]
					},
					okPassword: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}, {
							pattern: /^[a-zA-Z0-9]{4,30}$/,
							errorMessage: this.$t('errorStandard') + this.$t('errorLength') + "[a-zA-Z0-9]"
						}, {
							validateFunction: (rule, value, data, callback) => {
								if (value != this.valiFormData.password) {
									callback(this.$t('atypism'))
								}
								return true
							}
						}]
					}
				},
			}
		},

		computed: {
			timeNumtext() {
				return this.$store.state.system.timeCode ? this.$store.state.system.timeNum : this.$t('send')
			}
		},

		onLoad(options) {
			this.getUuid()
			this.valiFormData.code = this.WEBINFO.emailValidationSwitch ? '' : '1111'
			if (options.tg) {
				this.valiFormData.invitationCode = options.tg
				uni.setStorageSync('invitationCode', options.tg)
			} else {
				this.valiFormData.invitationCode = uni.getStorageSync('invitationCode')

			}
		},
		methods: {
			randomS20() {
				let r
				var data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i",
					"j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
				];
				var result = "";
				for (var i = 0; i < 20; i++) {
					r = Math.floor(Math.random() * 36);
					result += data[r];
				}
				// #ifdef APP-PLUS

				this.valiFormData.equipmentName = `${uni.getSystemInfoSync().osName}`
				// #endif
				// #ifdef H5
				console.log(uni.getSystemInfoSync().platform, "H5-------------")
				this.valiFormData.equipmentName = `${uni.getSystemInfoSync().platform}H5`
				// #endif

				this.valiFormData.equipmentId = result
				let onlyInfo = {
					equipmentName: this.valiFormData.equipmentName,
					equipmentId: this.valiFormData.equipmentId
				}
				uni.setStorageSync('onlyInfo', onlyInfo)

			},
			getUuid() {
				// #ifdef APP-PLUS
				plus.device.getInfo({
					success: (e) => {
						this.valiFormData.equipmentName =
							`${uni.getSystemInfoSync().osName}${plus.device.model}`
						this.valiFormData.equipmentId = e.uuid
						// console.log("this.valiFormData.equipmentName:",this.valiFormData.equipmentName,"this.valiFormData.equipmentId",this.valiFormData.equipmentId)
					},
					fail: (e) => {
						// console.log("失败this.valiFormData.equipmentName:",this.valiFormData.equipmentName,"this.valiFormData.equipmentId",this.valiFormData.equipmentId)
						this.randomS20()
					}
				});

				// #endif
				// #ifdef H5
				let onlyInfo = uni.getStorageSync('onlyInfo')
				if (onlyInfo) {

					this.valiFormData.equipmentName = onlyInfo.equipmentName
					this.valiFormData.equipmentId = onlyInfo.equipmentId
				} else {
					this.randomS20()
				}

				// #endif
			},
			oninpCode() {
				this.$refs.valiForm.validateField(['email']).then((res) => {
					// 成功返回，res 为对应表单数据
					// 其他逻辑处理 
					// ...
					this.$store.dispatch('system/oninpCode', {
						email: this.valiFormData.email,
						type: 0
					})

				}).catch((err) => {
					// 表单校验验失败，err 为具体错误信息
					// 其他逻辑处理
					// ...
				})
			},
			checkboxChange(event) {
				if (event.detail.value.length != 0 && event.detail.value[0] == 'agree') {
					this.agree = true
				} else {
					this.agree = false

				}
			},
			radioChange(evt) {
				for (let i = 0; i < this.langList.length; i++) {
					if (this.langList[i].value === evt.detail.value) {
						this.current = this.langList[i].value;
						this.$refs.popup.close()
						this.$store.dispatch('user/SET_LANGUAGE', evt.detail.value)

						// this.seti18nLocale(evt.detail.value)
						break;
					}
				}
			},
			// 设置系统语言
			seti18nLocale(i18n) {
				this.$i18n.locale = i18n
				uni.setLocale(i18n)
			},
			openLanguage() {
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open('bottom')
			},
			submit(ref) {
				if (!this.agree) {
					uni.showToast({
						icon: 'none',
						title: this.$t('pleaseCheck')
					})
				} else {

					this.$refs[ref].validate().then(() => {
						this.$api.register.addTBUsers(this.deleteInvalidParam(this.valiFormData)).then(res => {
							console.log('res', res);
							this.routeTo(1)
						}).catch(err => {
							console.log('err', err);
						})

					}).catch(err => {
						console.log('catch', err);
					})
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.example {
		padding: 30rpx 0;
	}

	.inpCode {
		display: inline-block;
		width: 75% !important;
	}

	.Codebox /deep/ .uni-forms-item__content {
		position: relative;
	}

	.imgCode {
		position: absolute;
		top: 0;
		right: 0;
		display: inline-block;
		text-align: right;
		margin-right: 20rpx;
		width: 18%;
		height: 100% !important;
		line-height: 70rpx !important;
		color: #1abb97;


	}

	// .headphones {
	// 	position: fixed;
	// 	bottom: 150rpx;
	// 	right: 30rpx;
	// }

	.popup-content {
		overflow: auto;
		padding: 30rpx;
		background-color: #fff;
		border-top-left-radius: 40rpx;
		border-top-right-radius: 40rpx;
		max-height: 60vh;
	}

	.label {
		padding: 15rpx;
		border-bottom: 2rpx solid #f2f2f5;
	}

	.label:nth-last-child(1) {
		border: none;
	}
</style>
