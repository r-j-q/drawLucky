<template>
	<view class="page">
		<headtop type="single"></headtop>
		<view class="main">


			<view class="fund-box">
				<h3 class="title m-b-40 p-t-40">{{$t('register')}}</h3>
				<uni-card class="bgfff m-b-20 card1  " margin='0px' padding="40px" :is-shadow="false" :border="false">
					<uni-section title="" titleFontSize='32rpx' titleColor="#000">
						<view class="example">
							<!-- 基础表单校验 -->
							<uni-forms ref="valiForm" labelPosition="top" :rules="rules" :modelValue="valiFormData">
								<uni-forms-item :label="$t('mailbox')" name="email">
									<uni-easyinput v-model="valiFormData.email" :placeholder="$t('placeholderName')" />
								</uni-forms-item>
								<uni-forms-item :label="$t('code')" name="code" class="Codebox"
									v-if="WEBINFO.emailValidationSwitch">
									<view class="inpCode">

										<uni-easyinput class="" v-model="valiFormData.code"
											:placeholder="$t('placeholderCode')" />
									</view>
									<button class="button imgCode" :class="timeNumtext!=$t('send')?'sendend':''"
										:disabled="!($store.state.system.timeCode==null&&$store.state.system.timeStats?false:true)"
										@click="oninpCode()">
										<text class="c999"
											v-show="$store.state.system.timeStats">{{$t('sending')}}</text>
										<text class="" v-show="!$store.state.system.timeStats">{{timeNumtext}}</text>
									</button>
								</uni-forms-item>
								<uni-forms-item :label="$t('password')" name="password">
									<uni-easyinput type="password" v-model="valiFormData.password"
										:placeholder="$t('placeholderPassword')" />
								</uni-forms-item>
								<uni-forms-item :label="$t('okPassword')" name="okPassword">
									<uni-easyinput type="password" v-model="valiFormData.okPassword"
										:placeholder="$t('placeholderPassword')" />
								</uni-forms-item>
								<uni-forms-item :label="$t('invitationCode')" name="invitationCode">
									<uni-easyinput type="text" v-model="valiFormData.invitationCode"
										:placeholder="$t('placeholderinvitationCode')" />
								</uni-forms-item>
							</uni-forms>

							<button class="button" @click="submit('valiForm')">{{$t('register')}}</button>
						</view>
					</uni-section>

					<view class="isHave flex_sp_be m-t-20 ">
						<view class="flex_start m-b-40 m-t-40 ">

							<checkbox-group @change="checkboxChange">
								<label>
									<checkbox color="#1abb97" value="agree" :checked="agree"
										style="transform:scale(0.7)" />
									{{$t('checkedAgree')}}
								</label>
							</checkbox-group>
							<text class="c1abb97"
								@click="routeTo('/pages/pc/src/about/about','?current=0')">{{$t('userAgreement')}}</text>
							<text> {{$t('and')}} </text>
							<text class="c1abb97"
								@click="routeTo('/pages/pc/src/about/about','?current=1')">{{$t('privacyPolicy')}}</text>
						</view>
						<view class="flex_start">

							<text class="m-l-20">{{$t('isHave')}}</text>
							<text class="green" @click="routeTo('/pages/pc/src/login/login')">{{$t('login')}}</text>
						</view>

					</view>

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
				agree: true,
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
	.main {
		width: 500px;
		margin: 0 auto;

		.inpCode {
			display: inline-block;
			width: 80%;
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



		.headphones {}
	}
</style>
