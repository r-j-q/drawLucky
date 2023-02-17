<template>
	<view class="page">
		<headtop type="single"></headtop>
		<view class="main">
			<view class="fund-box">
				<h3 class="title m-b-40 p-t-40">{{title}}</h3>
				<uni-card class="bgfff m-b-20 card1  " margin='0px' padding="40px" :is-shadow="false" :border="false">
					<uni-section title="" titleFontSize='32rpx' titleColor="#000">
						<view class="example">
							<uni-forms ref="valiForm" :rules="rules" labelPosition="top" :modelValue="valiFormData">
								<uni-forms-item :label="$t('mailbox')" name="username">
									<uni-easyinput :disabled="this.$store.state.user.username!=''"
										v-model="valiFormData.username" :placeholder="$t('placeholderName')" />
								</uni-forms-item>
								<uni-forms-item :label="$t('code')" name="code" class="Codebox"
									v-if="WEBINFO.emailValidationSwitch">
									<view class="inpCode">
										<uni-easyinput v-model="valiFormData.code"
											:placeholder="$t('placeholderCode')" />
									</view>
									<button class="button imgCode"
										:disabled="!($store.state.system.timeCode==null&&$store.state.system.timeStats?false:true)"
										@click="oninpCode()">
										{{$store.state.system.timeStats?$t('sending'):timeNumtext}}</button>
								</uni-forms-item>
								<uni-forms-item :label="$t('password')" name="password">
									<uni-easyinput type="password" v-model="valiFormData.password"
										:placeholder="$t('placeholderPassword')" />
								</uni-forms-item>
								<uni-forms-item :label="$t('okPassword')" name="okPassword">
									<uni-easyinput type="password" v-model="valiFormData.okPassword"
										:placeholder="$t('placeholderPassword')" />
								</uni-forms-item>

							</uni-forms>

							<button class="button" @click="submit('valiForm')">{{$t('confirm')}}</button>
						</view>
					</uni-section>


				</uni-card>
			</view>

		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				WEBINFO: uni.getStorageSync('WEBINFO'),
				// 校验表单数据
				valiFormData: {
					username: this.$store.state.user.username, // 是 string 用户账号
					code: '', //是 string 验证码
					password: '', // 是 string 新密码
					okPassword: '', // 是 string 确认密码
					updatePWDType: 1,
				},
				// 校验规则
				rules: {
					username: {
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
							},
							{
								validateFunction: (rule, value, data, callback) => {
									if (value != this.valiFormData.password) {
										callback(this.$t('atypism'))
									}
									return true
								}
							}
						]
					}
				},
				title: '',
			}
		},

		computed: {
			timeNumtext() {
				return this.$store.state.system.timeCode ? this.$store.state.system.timeNum : this.$t('send')
			}
		},

		onLoad(options) {
			if (options.updatePWDType == 1) {
				this.valiFormData.updatePWDType = options.updatePWDType;

				this.title = this.$t('forgotLoginPassword')
			} else {
				this.valiFormData.updatePWDType = options.updatePWDType;

				this.title = this.$t('forgotPayPassword')
			}
		},
		methods: {
			oninpCode() {
				this.$refs.valiForm.validateField(['username']).then((res) => {
					// 成功返回，res 为对应表单数据
					// 其他逻辑处理 
					// ...
					this.$store.dispatch('system/oninpCode', {
						email: this.valiFormData.username,
						type: this.valiFormData
							.updatePWDType == 1 ? 1 : 2
					})
				}).catch((err) => {
					// 表单校验验失败，err 为具体错误信息
					// 其他逻辑处理
					// ...
				})
			},
			// checkboxChange(event) {
			// 	if (event.detail.value.length != 0 && event.detail.value[0] == 'agree') {
			// 		this.agree = true
			// 	} else {
			// 		this.agree = false

			// 	}
			// },
			submit(ref) {
				this.$refs[ref].validate().then(() => {
					if (this.valiFormData.updatePWDType == 1) {
						this.$api.resetPassword.updatePassword(this.deleteInvalidParam(this.valiFormData)).then(
							res => {
								// console.log('reasdasd撒大苏打s', res);
								this.routeTo(1)
							}).catch(err => {
							console.log('err', err);
						})

					} else {
						this.$api.updatePassword
							.updatePayPWD(this.deleteInvalidParam(this.valiFormData))
							.then(res => {
								console.log('reasdasdass', res);
								this.$store.dispatch('user/GET_USERINFO')

							})
							.catch(err => {
								console.log('err', err);
							});
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
		width: 800px;
		margin: 0 auto;

		.inpCode {
			display: inline-block;
			width: 75%;
		}

		.Codebox /deep/ .uni-forms-item__content {
			position: relative
		}

		.imgCode {
			position: absolute;
			top: 0;
			right: 0;
			display: inline-block;
			width: 18%;
			height: 100%;
		}


	}
</style>
