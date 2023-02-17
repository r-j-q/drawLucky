<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="title" rightText="" @clickLeft="routeTo(1)"></uni-nav-bar>
		<view class="content">

			<view class="example">
				<!-- 基础表单校验 -->
				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top"
					labelWidth="690rpx">
					<!-- <uni-forms-item label="邮箱账号" name="username">
						<uni-easyinput class="input-box" :inputBorder="false" :disabled="true"
							v-model="valiFormData.username" :placeholder="$t('other.updatePassword.placeholderName')" />
					</uni-forms-item> -->
					<!-- 	<uni-forms-item label="验证码" name="code" class="Codebox" v-if="valiFormData.updatePWDType!=1">
						<uni-easyinput class="input-box inpCode" :inputBorder="false" v-model="valiFormData.code"
							:placeholder="$t('other.updatePassword.placeholderCode')" />
						<view class=" imgCode" :disabled="timeCode==null?false:true" @click="oninpCode()">
							{{timeNumtext}}
						</view>
					</uni-forms-item> -->
					<uni-forms-item label="" name="oldPassword">
						<template slot="label">
							<view class="flex_sp_be forms-label">
								<view>{{$t('oldPassword')}}</view>
								<template v-if="WEBINFO.emailValidationSwitch">
									<view class="danger" v-if="valiFormData.updatePWDType==1"
										@click="routeTo('/pages/user/resetPassword/resetPassword','?updatePWDType=1')">
										{{$t('forgetPassword')}}
									</view>
									<view class="danger" v-else
										@click="routeTo('/pages/user/resetPassword/resetPassword','?updatePWDType=2')">
										{{$t('forgetPassword')}}
									</view>
								</template>
							</view>
						</template>
						<uni-easyinput class="input-box" :inputBorder="false" type="password"
							v-model="valiFormData.oldPassword" :placeholder="$t('placeholderPassword')" />
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
				<button class="button" @click="submit('valiForm')">{{ $t('confirm') }}</button>
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
				WEBINFO: uni.getStorageSync('WEBINFO'),
				imgCode: '',
				// 校验表单数据
				valiFormData: {
					username: '', //	是	string	用户名
					password: '', //	是	string	新密码
					oldPassword: '', //是	string	原密码
					okPassword: '', //	是	string	确认密码
					updatePWDType: 2, //	是	int	修改密码类型（1：登录密码，2：支付密码）


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

					oldPassword: {
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
				title: "",
			};
		},

		computed: {

			//借助mapGetters生成计算属性：
			...mapGetters('user', ['getUser']),
		},
		onLoad(options) {
			if (options.updatePWDType == 1) {
				this.valiFormData.updatePWDType = options.updatePWDType;
				this.valiFormData.username = this.getUser.username;

				this.title = this.$t('changeLoginPassword')
			} else {
				this.valiFormData.updatePWDType = options.updatePWDType;
				this.valiFormData.username = this.getUser.username;

				this.title = this.$t('changePayPassword')
			}
		},
		methods: {

			submit(ref) {
				this.$refs[ref]
					.validate()
					.then(() => {
						this.$api.updatePassword
							.updatePWD(this.deleteInvalidParam(this.valiFormData))
							.then(res => {
								console.log('reasdasds', res);
								this.$store.dispatch('user/GET_USERINFO')
							})
							.catch(err => {
								console.log('err', err);
							});
					})
					.catch(err => {
						console.log('catch', err);
					});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.example {
		padding: 30rpx 0;
	}

	.inpCode {
		display: inline-block;
		width: 75%;
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

	.danger {
		font-size: 24rpx;
		color: #f56c6c;

		.primary {
			color: #1abb97;
		}
	}
</style>
