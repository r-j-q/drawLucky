<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="title" rightText="" @clickLeft="routeTo(1)">
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
					<uni-forms-item :label="$t('mailbox')" name="username">
						<uni-easyinput class="input-box" :inputBorder="false"
							:disabled="this.$store.state.user.username!=''" v-model="valiFormData.username"
							:placeholder="$t('placeholderName')" />
					</uni-forms-item>
					<uni-forms-item :label="$t('code')" name="code" class="Codebox">
						<view class="input-box inpCode">

							<uni-easyinput :inputBorder="false" v-model="valiFormData.code"
								:placeholder="$t('placeholderCode')" />
						</view>
						<view class=" imgCode"
							:disabled="$store.state.system.timeCode==null&&$store.state.system.timeStats?false:true"
							@click="oninpCode()">
							<text class="c999" v-show="$store.state.system.timeStats">{{$t('sending')}}</text>
							<text class="" v-show="!$store.state.system.timeStats">{{timeNumtext}}</text>
						</view>
					</uni-forms-item>

					<uni-forms-item :label="$t('newPassword')" name="password">
						<uni-easyinput class="input-box" :inputBorder="false" type="password"
							v-model="valiFormData.password" :placeholder="$t('placeholderPassword')" />
					</uni-forms-item>
					<uni-forms-item :label="$t('okPassword')" name="okPassword">
						<uni-easyinput class="input-box" :inputBorder="false" type="password"
							v-model="valiFormData.okPassword" :placeholder="$t('placeholderPassword')" />
					</uni-forms-item>

				</uni-forms>
				<button class="button" @click="submit('valiForm')">{{$t('confirm')}}</button>
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


	.headphones {
		position: fixed;
		bottom: 150rpx;
		right: 30rpx;
	}

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
