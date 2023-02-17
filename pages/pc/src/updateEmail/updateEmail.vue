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
						{{$t('modify')}}{{$t('mailbox')}}
					</view>


					<uni-forms ref="valiForm" label-position="top" :rules="rules" :modelValue="valiFormData">
						<uni-forms-item :label="$t('oldEmail')" name="oldemail">
							<uni-easyinput v-model="valiFormData.oldemail" disabled
								:placeholder="$t('placeholderoldEmail')">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item :label="$t('code')" name="emailCode" v-if="WEBINFO.emailValidationSwitch">
							<uni-easyinput class="inpCode" v-model="valiFormData.emailCode"
								:placeholder="$t('placeholderCode')" />

							<button class="button imgCode"
								:disabled="!($store.state.system.timeCode==null&&$store.state.system.timeStats?false:true)"
								@click="oninpCode()">
								<text class="c999" v-show="$store.state.system.timeStats">{{$t('sending')}}</text>
								<text class="" v-show="!$store.state.system.timeStats">{{timeNumtext}}</text>
							</button>
						</uni-forms-item>
						<uni-forms-item :label="$t('password')" name="password">
							<uni-easyinput v-model="valiFormData.password" type="password"
								:placeholder="$t('placeholderPassword')">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item :label="$t('newEmail')" name="email">
							<uni-easyinput v-model="valiFormData.email" :placeholder="$t('placeholdernewEmail')">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item :label="$t('code')" name="newEmailCode">
							<view class="inpCode">
								<uni-easyinput v-model="valiFormData.newEmailCode"
									:placeholder="$t('placeholderCode')" />
							</view>

							<button class="button imgCode"
								:disabled="!($store.state.system.timeCode1==null&&$store.state.system.timeStats1?false:true)"
								@click="oninpCode1()">
								<text class="c999" v-show="$store.state.system.timeStats1">{{$t('sending')}}</text>
								<text class="" v-show="!$store.state.system.timeStats1">{{timeNumtext1}}</text>
							</button>
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


			//借助mapGetters生成计算属性：
			...mapGetters('user', ['getUser']),
		},
		watch: {
			getUser: {
				handler(val) {
					if (val) {
						this.valiFormData.oldemail = val.email
					}
				},
				deep: true,
				immediate: true
			}
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
