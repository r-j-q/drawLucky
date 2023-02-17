<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('setpayPassword')" rightText=""
			@clickLeft="routeTo(1)"></uni-nav-bar>
		<view class="content">

			<view class="example">
				<!-- 基础表单校验 -->
				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top"
					labelWidth="690rpx">
					<!-- 	<uni-forms-item label="邮箱账号" name="username">
						<uni-easyinput class="input-box" :inputBorder="false" :disabled="true"
							v-model="valiFormData.username" :placeholder="$t('other.updatePassword.placeholderName')" />
					</uni-forms-item> -->

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
				imgCode: '',
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

			};
		},

		computed: {
			timeNumtext() {
				return this.$store.state.system.timeCode ? this.$store.state.system.timeNum : $t('send')
			},
			//借助mapGetters生成计算属性：
			...mapGetters('user', ['getUser']),
		},
		onLoad(options) {
			this.valiFormData.username = this.getUser.username;
		},
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
	};
</script>

<style lang="scss" scoped>
	.example {
		padding: 30rpx 0;
	}
</style>
