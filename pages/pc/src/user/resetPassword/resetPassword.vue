<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" rightText="" @clickLeft="routeTo(1)">
			<block slot="right">
				<view class="" @click="openLanguage">
					{{$t('user.resetPassword.language')}}
				</view>
			</block>
		</uni-nav-bar>
		<view class="content">


			<uni-section :title="$t('user.resetPassword.emailReset')" titleFontSize='32rpx' titleColor="#000">
				<view class="example">
					<!-- 基础表单校验 -->
					<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
						<uni-forms-item label="" name="email">
							<uni-easyinput v-model="valiFormData.username"
								:placeholder="$t('user.resetPassword.placeholderName')" />
						</uni-forms-item>
						<uni-forms-item label="" name="code" class="Codebox" v-if="WEBINFO.emailValidationSwitch">
							<uni-easyinput class="inpCode" v-model="valiFormData.code"
								:placeholder="$t('user.resetPassword.placeholderCode')" />
							<button class="button imgCode"
								:disabled="$store.state.system.timeCode==null&&$store.state.system.timeStats?false:true"
								@click="oninpCode()">
								{{$store.state.system.timeStats?'发送中':timeNumtext}}</button>
						</uni-forms-item>
						<uni-forms-item label="" name="oldPassword">
							<uni-easyinput type="password" v-model="valiFormData.oldPassword"
								:placeholder="$t('user.resetPassword.placeholderoldPassword')" />
						</uni-forms-item>
						<uni-forms-item label="" name="password">
							<uni-easyinput type="password" v-model="valiFormData.password"
								:placeholder="$t('user.resetPassword.placeholderPassword')" />
						</uni-forms-item>
						<uni-forms-item label="" name="okPassword">
							<uni-easyinput type="password" v-model="valiFormData.okPassword"
								:placeholder="$t('user.resetPassword.placeholderokPassword')" />
						</uni-forms-item>

					</uni-forms>
					<button class="button" @click="submit('valiForm')">{{$t('user.resetPassword.confirm')}}</button>
				</view>
			</uni-section>

		</view>
		<uni-popup ref="popup">
			<view class="popup-content">
				<view class="uni-list">
					<radio-group @change="radioChange">
						<label class="flex_start label" v-for="(item, index) in items" :key="item.value">
							<view>
								<radio color="#1abb97" :value="item.value" :checked="item.value === current"
									style="transform:scale(0.7)" />
							</view>
							<view>{{item.name}}</view>
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
				WEBINFO: uni.getStorageSync('WEBINFO'),
				items: [{
						value: 'en',
						name: 'English',
						checked: 'true'
					},
					{
						value: 'zh-Hans',
						name: '中文简体'
					},
					{
						value: 'zh-CN1',
						name: '中文繁体'
					},
					{
						value: 'JPN2',
						name: 'français'
					},
					{
						value: 'ENG3',
						name: '日本語'
					},
					{
						value: 'FRA4',
						name: '한국어'
					},
					{
						value: 'zh-CN5',
						name: 'Malay'
					},
					{
						value: 'JPN6',
						name: 'русский'
					},
					{
						value: 'ENG7',
						name: 'Deutsche'
					},
					{
						value: 'FRA8',
						name: 'italiano'
					},
					{
						value: 'JPN8',
						name: 'Español'
					},
					{
						value: 'ENG9',
						name: 'ภาษาไทย'
					},
					{
						value: 'FRA0',
						name: 'Português'
					},
					{
						value: 'ENG-',
						name: 'Tiếngviệt'
					},
					{
						value: 'FRA11',
						name: 'Türkiye'
					},
				],
				current: uni.getLocale() || 'en',
				imgCode: '',
				// 校验表单数据
				valiFormData: {
					username: "", //	是	string	用户名
					password: "", //	是	string	新密码
					oldPassword: "", //是	string	原密码
					okPassword: "", //是	string	确认密码
					code: "", //是	string	验证码
					updatePWDType: 1, //	是	int	修改密码类型（1：登录密码，2：支付密码）
				},
				// 校验规则
				rules: {
					username: {
						rules: [{
							required: true,
							errorMessage: this.$t("user.resetPassword.errorMessageUserName")
						}]
					},
					code: {
						rules: [{
							required: true,
							errorMessage: this.$t("user.resetPassword.errorMessageCode")
						}]
					},
					oldPassword: {
						rules: [{
							required: true,
							errorMessage: this.$t("user.resetPassword.errorMessageoldPassword")
						}, {
							format: 'number',
							errorMessage: this.$t("user.resetPassword.errorMessageNumber")
						}]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: this.$t("user.resetPassword.errorMessagePassword")
						}, {
							format: 'number',
							errorMessage: this.$t("user.resetPassword.errorMessageNumber")
						}]
					},
					okPassword: {
						rules: [{
							required: true,
							errorMessage: this.$t("user.resetPassword.errorMessageokPassword")
						}, {
							format: 'number',
							errorMessage: this.$t("user.resetPassword.errorMessageNumber")
						}]
					}
				},
				timeCode: null,
				timeNum: 60,
			}
		},

		computed: {
			timeNumtext() {
				return this.$store.state.system.timeCode ? this.$store.state.system.timeNum : '发送'
			}
		},

		onLoad() {

		},
		methods: {
			onimg() {
				this.timeCode = setTimeout(() => {
					this.timeNum--
					if (this.timeNum <= 0) {
						clearTimeout()
						this.timeCode = null
						this.timeNum = 60
					}
				}, 1000)

			},

			radioChange(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.detail.value) {
						this.current = this.items[i].value;
						this.$refs.popup.close()
						this.seti18nLocale(evt.detail.value)
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
					this.$api.resetPassword.updatePWD(this.deleteInvalidParam(this.valiFormData)).then(
						res => {
							console.log('res', res);
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
	.inpCode {
		display: inline-block;
		width: 70%;
	}

	.Codebox /deep/ .uni-forms-item__content {
		position: relative
	}

	.imgCode {
		position: absolute;
		top: 0;
		right: 0;
		display: inline-block;
		width: 30%;
		height: 100%;
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
