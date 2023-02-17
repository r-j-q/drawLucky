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
						{{$t('setpayPassword')}}
					</view>
					<uni-forms ref="valiForm" label-position="top" :rules="rules" :modelValue="valiFormData">

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
	export default {
		data() {
			return {
				// 校验表单数据
				valiFormData: {
					username: '', //	是	string	用户名
					password: '', //	是	string	新密码
					okPassword: '', //	是	string	确认密码


				},
				// 校验规则
				rules: {
					username: {
						rules: [{
							required: true,
							errorMessage: this.$t('errorEmpty')
						}, {
							pattern: /^\S+?@\S+?.\S+?$/,
							errorMessage: this.$t('errorStandard')
						}]
					},

					password: {
						rules: [{
							required: true,
							errorMessage: this.$t("user.register.errorMessagePassword")
						}, {
							pattern: /^[a-zA-Z0-9]{4,30}$/,
							errorMessage: this.$t('errorStandard') + this.$t('errorLength') + '[a-zA-Z0-9]'
						}]
					},
					okPassword: {
						rules: [{
								required: true,
								errorMessage: this.$t("user.register.errorMessageokPassword")
							}, {
								pattern: /^[a-zA-Z0-9]{4,30}$/,
								errorMessage: this.$t('errorStandard') + this.$t('errorLength') + '[a-zA-Z0-9]'
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

			}
		},



		onLoad() {},
		methods: {

			submit(ref) {

				this.$refs[ref].validate().then(() => {
					this.$api.login.setPayPassword(this.deleteInvalidParam(this.valiFormData))
						.then(
							res => {
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
