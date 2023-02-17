<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" rightText="" @clickLeft="routeTo(1)">
			<block slot="right">
				<view class="" @click="openLanguage">
					{{$t('user.login.language')}}
				</view>
			</block>
		</uni-nav-bar>
		<view class="content">

			<view class="logo flex_center m-b-40">
				<image class="logoimg" src="@/static/r9eeka5.png" mode="widthFix"></image>
			</view>
			<uni-section :title="$t('user.login.emailLogin')" titleFontSize='32rpx' titleColor="#000">
				<view class="example">
					<!-- 基础表单校验 -->
					<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
						<uni-forms-item label="" name="username">
							<uni-easyinput v-model="valiFormData.username"
								:placeholder="$t('user.login.placeholderName')" />
						</uni-forms-item>
						<uni-forms-item label="" name="password">
							<uni-easyinput type="password" v-model="valiFormData.password"
								:placeholder="$t('user.login.placeholderPassword')" />
						</uni-forms-item>
						<uni-forms-item label="" name="referrer">
							<uni-easyinput v-model="valiFormData.referrer"
								:placeholder="$t('user.login.placeholderReferrer')" />
						</uni-forms-item>
					</uni-forms>
					<button class="button" @click="submit('valiForm')">{{$t('user.login.login')}}</button>
				</view>
			</uni-section>
			<view class="isHave">
				<text>{{$t('user.login.noHave')}}</text>
				<text class="c333"
					@click="routeTo('/pages/user/register/register')">{{$t('user.login.registerNow')}}</text>
			</view>
			<uni-icons type="headphones" size="30" color="rgb(26, 187, 151)" class="headphones"></uni-icons>
			<view class="c333 tac normal-intro-wrap" @click="routeTo('/pages/user/resetPassword/resetPassword')">
				{{$t('user.login.forgetPassword')}}
			</view>
		</view>
		<uni-popup ref="popup">
			<view class="popup-content">
				<view class="uni-list">
					<radio-group @change="radioChange">
						<label class="flex_start label" v-for="(item, index) in items" :key="item.value">
							<view>
								<radio :value="item.value" :checked="item.value === current"
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
				// 校验表单数据
				valiFormData: {
					username: '',
					password: '',
					referrer: '',
				},
				// 校验规则
				rules: {
					username: {
						rules: [{
							required: true,
							errorMessage: this.$t("user.login.errorMessageUserName")
						}]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: this.$t("user.login.errorMessagePassword")
						}, {
							format: 'number',
							errorMessage: this.$t("user.login.errorMessageNumber")
						}]
					}
				},
			}
		},



		onLoad() {

		},
		methods: {
			radioChange: function(evt) {
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

					this.$api.login.login(this.deleteInvalidParam(this.valiFormData)).then(res => {
						console.log('res', this.$store);
						this.$store.commit('USER_INFO', res)

						console.log('this.$store.state.user', this.$store.state.user);
						this.routeTo('/pages/tabbar/home/home')
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
	.logo {
		width: 100%;

		.logoimg {
			width: 200rpx;

		}
	}

	.isHave {
		margin-top: 30rpx;
		font-size: 24rpx;
		color: #aaa;
		line-height: 30rpx;


	}

	.normal-intro-wrap {
		position: fixed;
		bottom: 90rpx;
		width: 90%;
		font-size: 24rpx;
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
