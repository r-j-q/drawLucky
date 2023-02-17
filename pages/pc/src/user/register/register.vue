<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" rightText="" @clickLeft="routeTo(1)">
			<block slot="right">
				<view class="" @click="openLanguage">
					{{$t('user.register.language')}}
				</view>
			</block>
		</uni-nav-bar>
		<view class="content">
			<uni-section :title="$t('user.register.emailLogin')" titleFontSize='32rpx' titleColor="#000">
				<view class="example">
					<!-- 基础表单校验 -->
					<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
						<uni-forms-item label="" name="email">
							<uni-easyinput v-model="valiFormData.email"
								:placeholder="$t('user.register.placeholderName')" />
						</uni-forms-item>
						<uni-forms-item label="" name="code" class="Codebox">
							<uni-easyinput class="inpCode" v-model="valiFormData.code"
								:placeholder="$t('user.register.placeholderCode')" />
							<button class="button imgCode"
								:disabled="$store.state.system.timeCode==null&&$store.state.system.timeStats?false:true"
								@click="oninpCode()">
								{{$store.state.system.timeStats?'发送中':timeNumtext}}</button>
						</uni-forms-item>
						<uni-forms-item label="" name="password">
							<uni-easyinput type="password" v-model="valiFormData.password"
								:placeholder="$t('user.register.placeholderPassword')" />
						</uni-forms-item>
						<uni-forms-item label="" name="okPassword">
							<uni-easyinput type="password" v-model="valiFormData.okPassword"
								:placeholder="$t('user.register.placeholderokPassword')" />
						</uni-forms-item>
						<uni-forms-item label="" name="invitationCode">
							<uni-easyinput type="password" v-model="valiFormData.invitationCode"
								:placeholder="$t('user.register.placeholderinvitationCode')" />
						</uni-forms-item>
					</uni-forms>
					<view class="flex_start m-b-40 m-t-40 ">

						<checkbox-group @change="checkboxChange">
							<label>
								<checkbox color="#1abb97" value="agree" :checked="agree" style="transform:scale(0.7)" />
								{{$t('user.register.agree')}}
							</label>
						</checkbox-group>
						<text class="c1abb97">{{$t('user.register.userAgreement')}}</text>
						<text> {{$t('user.register.and')}} </text>
						<text class="c1abb97">{{$t('user.register.privacyPolicy')}}</text>
					</view>
					<button class="button" @click="submit('valiForm')">{{$t('user.register.register')}}</button>
				</view>
			</uni-section>

			<uni-icons type="headphones" size="30" color="rgb(26, 187, 151)" class="headphones"></uni-icons>

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
				agree: false, //是否同意隐私政策
				// 校验表单数据
				valiFormData: {
					email: '', //	是	string	用户邮箱
					code: '', //	是	string	验证码
					realRegionCode: '', //	否	string	地区编码
					password: '', //	是	string	密码
					okPassword: '', //是	string	确认密码
					equipmentName: 'asd123', //	是	string	设备名称
					equipmentId: '123asd', //	是	string	设备id
					invitationCode: '', //	否	string	邀请码
				},
				// 校验规则
				rules: {
					email: {
						rules: [{
							required: true,
							errorMessage: this.$t("user.register.errorMessageUserName")
						}]
					},
					code: {
						rules: [{
							required: true,
							errorMessage: this.$t("user.register.errorMessageCode")
						}]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: this.$t("user.register.errorMessagePassword")
						}, {
							format: 'number',
							errorMessage: this.$t("user.register.errorMessageNumber")
						}]
					},
					okPassword: {
						rules: [{
							required: true,
							errorMessage: this.$t("user.register.errorMessageokPassword")
						}, {
							format: 'number',
							errorMessage: this.$t("user.register.errorMessageNumber")
						}]
					}
				},
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
				if (!this.agree) {
					uni.showToast({
						icon: 'none',
						title: this.$t('user.register.pleaseCheck')
					})
				} else {

					this.$refs[ref].validate().then(() => {
						this.$api.register.addTBUsers(this.deleteInvalidParam(this.valiFormData)).then(res => {
							console.log('res', res);
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
