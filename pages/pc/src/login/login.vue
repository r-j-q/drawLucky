<template>
	<view class="page">
		<headtop type="single"></headtop>
		<view class="main">
			<view class="fund-box ">
				<h3 class="title m-b-40 p-t-40">{{$t('login')}}</h3>
				<uni-card class="bgfff m-b-20 card1   " margin='0px' padding="40px" :is-shadow="false" :border="false">
					<uni-section title='' titleFontSize='32rpx' titleColor="#000">
						<view class="example">
							<!-- 基础表单校验 -->
							<uni-forms ref="valiForm" :rules="rules" labelPosition="top" :modelValue="valiFormData">
								<uni-forms-item :label="$t('mailbox')" name="username">
									<uni-easyinput v-model="valiFormData.username"
										:placeholder="$t('placeholderName')" />
								</uni-forms-item>
								<uni-forms-item :label="$t('password')" name="password">
									<uni-easyinput type="password" v-model="valiFormData.password"
										:placeholder="$t('placeholderPassword')" />
								</uni-forms-item>

							</uni-forms>
							<button class="button" @click="submit('valiForm')">{{$t('login')}}</button>
						</view>
					</uni-section>

					<view class="isHave flex_sp_be m-t-20 ">
						<view class="flex_start">

							<text class=" m-l-20">{{$t('noHave')}}</text>
							<text class="green"
								@click="routeTo('/pages/pc/src/register/register')">{{$t('registerNow')}}</text>
						</view>
						<view class="green  normal-intro-wrap" v-if="WEBINFO.emailValidationSwitch"
							@click="routeTo('/pages/pc/src/resetPassword/resetPassword','?updatePWDType=1')">
							{{$t('forgetPassword')}}
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
				customerServiceLink: uni.getStorageSync('WEBINFO').customerServiceLink,
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



		onLoad() {

		},
		methods: {

			submit(ref) {
				this.$refs[ref].validate().then(() => {

					this.$api.login.login(this.deleteInvalidParam(this.valiFormData)).then(res => {

						this.$store.commit('user/USER_INFO', res)
						this.routeTo('/pages/pc/src/home/home', 'reLaunch')
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
		width: 500px;
		margin: 0 auto;
	}

	.isHave {
		margin-top: 30rpx;
		font-size: 24rpx;
		color: #aaa;
		line-height: 30rpx;


	}

	.normal-intro-wrap {
		font-size: 24rpx;
	}

	.headphones {}
</style>
