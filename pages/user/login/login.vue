<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('login')" rightText=""
			@clickLeft="routeTo('/pages/tabbar/home/home', 'reLaunch')">
			<block slot="right">
				<view class="" @click="openLanguage">
					{{$t('language')}}
				</view>
			</block>
		</uni-nav-bar>
		<view class="content">

			<view class="logo flex_center m-b-40">
				<image class="logoimg" src="@/static/r9eeka5.png" mode="widthFix"></image>
			</view>
			<view class="example">
				<!-- 基础表单校验 -->
				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top"
					labelWidth="690rpx">
					<uni-forms-item :label="$t('mailbox')" name="username">
						<uni-easyinput class="input-box" :inputBorder="false" v-model="valiFormData.username"
							:placeholder="$t('placeholderName')" />
					</uni-forms-item>
					<uni-forms-item label="" name="password">
						<template slot="label">
							<view class="flex_sp_be forms-label">
								<view>{{$t('password')}}</view>
								<view class="danger" v-if="WEBINFO.emailValidationSwitch"
									@click="routeTo('/pages/user/resetPassword/resetPassword','?updatePWDType=1')">
									{{$t('forgetPassword')}}
								</view>
							</view>
						</template>
						<uni-easyinput class="input-box" :inputBorder="false" type="password"
							v-model="valiFormData.password" :placeholder="$t('placeholderPassword')" />
					</uni-forms-item>
				</uni-forms>
				<button class="button" @click="submit('valiForm')">{{$t('login')}}</button>
			</view>
			<view class="isHave">
				<text>{{$t('noHave')}}</text>
				<text class="c333" @click="routeTo('/pages/user/register/register')">{{$t('registerNow')}}</text>
			</view>


		</view>
		<uni-popup ref="popup">
			<view class="popup-select">
				<view class="">
					<radio-group @change="radioChange">
						<label class="flex_sp_be popuplabel" v-for="(item, index) in langList" :key="item.value">
							<view>{{item.name}}</view>
							<view>
								<radio :value="item.value" :checked="item.value === current"
									style="transform:scale(0.7)" />
							</view>
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
				current: uni.getLocale() || 'en',
				// 校验表单数据
				valiFormData: {
					username: '555555@qq.com',
					password: '123456',
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
							errorMessage: this.$t('errorEmpty')
						}, {
							pattern: /^[a-zA-Z0-9]{4,30}$/,
							errorMessage: this.$t('errorStandard') + this.$t('errorLength') + '[a-zA-Z0-9]'
						}]
					}
				},
			}
		},



		onLoad() {},
		methods: {
			radioChange: function(evt) {
				for (let i = 0; i < this.langList.length; i++) {
					if (this.langList[i].value === evt.detail.value) {
						this.current = this.langList[i].value;
						this.$refs.popup.close()

						this.$store.dispatch('user/SET_LANGUAGE', evt.detail.value)
						// this.seti18nLocale(evt.detail.value)
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
			getRegion() {
				let params = {
					type: 1, //	是	int	类型
					page: 1, //	是	int	页码
					pageSize: 1000, //	是	int	每页条数
				}
				return this.$api.changeValuation.getRegion(params).then(res => {

					uni.setStorageSync('getRegion', res.list)
					if (!uni.getStorageSync('currentRegion')) {

						res.list.map((item) => {
							if (item.regionCode == 'USD') {
								uni.setStorageSync('currentRegion', item)
								console.log("没有获取到currentRegion，将设置默认汇率USD");
								return
							}

						})
					} else {
						res.list.map((item) => {
							if (item.regionCode == uni.getStorageSync('currentRegion').regionCode) {
								uni.setStorageSync('currentRegion', item)
								return
							}

						})
					}
				})
			},
			submit(ref) {
				this.$refs[ref].validate().then(() => {
					~(async () => {
						await this.getRegion()
						await this.$api.login.login(this.deleteInvalidParam(this.valiFormData)).then(
							res => {

								this.$store.commit('user/USER_INFO', res)
								this.$store.dispatch('websocketInit', `ws://47.245.34.221:810/ws/market/${res.id}`)
								this.routeTo('/pages/tabbar/home/home', 'reLaunch')
							}).catch(err => {
							console.log('err', err);
						})
					})()


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

	.danger {
		font-size: 24rpx;
		color: #f56c6c;

		.primary {
			color: #1abb97;
		}
	}
</style>
