<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('mailboxSettings')" rightText=""
			@clickLeft="routeTo(1)">

		</uni-nav-bar>
		<view class="content">
			<view class="example">
				<!-- 基础表单校验 -->
				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top"
					labelWidth="690rpx">
					<uni-forms-item :label="$t('oldEmail')" name="oldEmail">
						<uni-easyinput class="input-box" :inputBorder="false" disabled v-model="valiFormData.oldEmail"
							:placeholder="$t('placeholderoldEmail')" />
					</uni-forms-item>
					<uni-forms-item :label="$t('code')" name="emailCode" class="Codebox">
						<view class="input-box inpCode">

							<uni-easyinput :inputBorder="false" v-model="valiFormData.emailCode"
								:placeholder="$t('placeholderCode')" />
						</view>
						<view class=" imgCode"
							:disabled="$store.state.system.timeCode==null&&$store.state.system.timeStats?false:true"
							@click="oninpCode()">
							<text class="c999" v-show="$store.state.system.timeStats">{{$t('sending')}}</text>
							<text class="" v-show="!$store.state.system.timeStats">{{timeNumtext}}</text>
						</view>
					</uni-forms-item>
					<uni-forms-item :label="$t('newEmail')" name="email">
						<uni-easyinput class="input-box" :inputBorder="false" v-model="valiFormData.email"
							:placeholder="$t('placeholdernewEmail')" />
					</uni-forms-item>
					<uni-forms-item :label="$t('code')" name="newEmailCode" class="Codebox">
						<view class="input-box inpCode">
							<uni-easyinput :inputBorder="false" v-model="valiFormData.newEmailCode"
								:placeholder="$t('placeholderCode')" />
						</view>
						<view class=" imgCode"
							:disabled="$store.state.system.timeCode1==null&&$store.state.system.timeStats1?false:true"
							@click="oninpCode1()">
							<text class="c999" v-show="$store.state.system.timeStats1">{{$t('sending')}}</text>
							<text class="" v-show="!$store.state.system.timeStats1">{{timeNumtext1}}</text>
						</view>
					</uni-forms-item>

				</uni-forms>
				<button class="button" @click="submit('valiForm')">{{$t('confirm')}}</button>
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

					oldEmail: this.$store.state.user.email, //	是	string	原邮箱
					emailCode: '', //	是	string	原邮箱验证码
					email: '', //是	string	新邮箱
					newEmailCode: '', //	是	string	新邮箱验证码
				},
				// 校验规则
				rules: {
					oldEmail: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}, {
							pattern: /^\S+?@\S+?.\S+?$/,
							errorMessage: this.$t('errorStandard')
						}]
					},
					emailCode: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}, {
							pattern: /^[a-zA-Z0-9]{4,30}$/,
							errorMessage: this.$t('errorStandard') + this.$t('errorLength') + "[a-zA-Z0-9]"
						}]
					},
					email: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}, {
							pattern: /^\S+?@\S+?.\S+?$/,
							errorMessage: this.$t('errorStandard')
						}]
					},
					newEmailCode: {
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
			timeNumtext() {
				return this.$store.state.system.timeCode ? this.$store.state.system.timeNum : this.$t('send')
			},
			timeNumtext1() {
				return this.$store.state.system.timeCode1 ? this.$store.state.system.timeNum1 : this.$t('send')
			},
		},

		onLoad() {

		},
		methods: {
			oninpCode() {
				this.$refs.valiForm.validateField(['oldEmail']).then((res) => {
					// 成功返回，res 为对应表单数据
					// 其他逻辑处理 
					// ...
					this.$store.dispatch('system/oninpCode', {
						email: this.valiFormData.oldEmail,
						type: 3
					})
				}).catch((err) => {
					// 表单校验验失败，err 为具体错误信息
					// 其他逻辑处理
					// ...
				})
			},
			oninpCode1() {
				this.$refs.valiForm.validateField(['email']).then((res) => {
					// 成功返回，res 为对应表单数据
					// 其他逻辑处理 
					// ...
					this.$store.dispatch('system/oninpCode1', {
						email: this.valiFormData.email,
						type: 4
					})
				}).catch((err) => {
					// 表单校验验失败，err 为具体错误信息
					// 其他逻辑处理
					// ...
				})
			},
			submit(ref) {
				this.$refs[ref].validate().then(() => {
					this.$api.changeEmail.updateEmail(this.deleteInvalidParam(this.valiFormData)).then(
						res => {
							this.$store.dispatch('user/GET_USERINFO')
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
