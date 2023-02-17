<template>
	<view class="page">
		<headtop type="single"></headtop>
		<view class="main">

			<uni-nav-bar class="nav-bar" statusBar backgroundColor="#eef1f5" left-icon="left" :leftText="$t('goBack')"
				color="#1abb97" rightText="" @clickLeft="routeTo(1)">
			</uni-nav-bar>
			<view class="fund-box">
				<uni-card class="bgfff m-b-20 card1  " margin='0px' padding="40px" :is-shadow="false" :border="false">

					<view class="font-32 ">
						{{valiFormData.updatePWDType==1?$t('changeLoginPassword'):$t('changePayPassword')}}
					</view>
					<uni-forms ref="valiForm" label-position="top" :rules="rules" :modelValue="valiFormData">
						<!-- <uni-forms-item label="邮箱" name="username">
							<uni-easyinput v-model="valiFormData.username" placeholder="请输入邮箱">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="验证码" name="code">
							<view class="inpCode">
								<uni-easyinput v-model="valiFormData.code" placeholder="请输入验证码" />
							</view>
							<button class="button imgCode"
								:disabled="!($store.state.system.timeCode==null&&$store.state.system.timeStats?false:true)"
								@click="oninpCode()">
								{{$store.state.system.timeStats?'发送中':timeNumtext}}</button>
						</uni-forms-item> -->
						<uni-forms-item label="" name="oldPassword">
							<template slot="label">
								<view class="flex_sp_be forms-label">
									<view>{{$t('oldPassword')}}</view>
									<template v-if="WEBINFO.emailValidationSwitch">
										<view class="danger" v-if="valiFormData.updatePWDType==1"
											@click="routeTo('/pages/pc/src/resetPassword/resetPassword','?updatePWDType=1')">
											{{$t('forgetPassword')}}
										</view>
										<view class="danger" v-else
											@click="routeTo('/pages/pc/src/resetPassword/resetPassword','?updatePWDType=2')">
											{{$t('forgetPassword')}}
										</view>
									</template>
								</view>
							</template>
							<uni-easyinput v-model="valiFormData.oldPassword" type="password"
								:placeholder="$t('placeholderPassword')">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item :label="$t('newPassword')" name="password">
							<uni-easyinput v-model="valiFormData.password" type="password"
								:placeholder="$t('placeholderPassword')">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item :label="$t('okPassword')" name="okPassword">
							<uni-easyinput v-model="valiFormData.okPassword" type="password"
								:placeholder="$t('placeholderPassword')">
							</uni-easyinput>
						</uni-forms-item>
					</uni-forms>
					<button class="button " @click="submit('valiForm')">{{$t('confirm')}}</button>
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
				WEBINFO: uni.getStorageSync('WEBINFO'),
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
				title: '',
			}
		},

		watch: {
			getUser: {
				handler(val) {
					this.valiFormData.username = val.username
				},
				deep: true,
				immediate: true
			},

		},

		computed: {
			timeNumtext() {
				return this.$store.state.system.timeCode ? this.$store.state.system.timeNum : this.$t('send')
			},
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
			submit(ref) {

				this.$refs[ref].validate().then(() => {
					this.$api.updatePassword.updatePWD(this.deleteInvalidParam(this.valiFormData)).then(res => {
						console.log('res', res);
						this.$store.dispatch('user/GET_USERINFO')
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
		width: 600px;
		margin: 0 auto;

		.inpCode {
			display: inline-block;
			width: 75%;
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
