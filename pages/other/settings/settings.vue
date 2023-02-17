<template>
	<view class="app ">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('setUp')" rightText="" @clickLeft="routeTo(1)">
		</uni-nav-bar>
		<view class=" main">
			<uni-card class="bgfff m-b-20 card1  " margin='10px 0px 10px 0px' padding="0px" :is-shadow="false"
				:border="false">
				<uni-list :border="false">
					<uni-list-item clickable showArrow :title="$t('changeLoginPassword')"
						@click="routeTo('/pages/other/me/updatePassword','?updatePWDType=1')" />
					<uni-list-item clickable showArrow :title="$t('setWithdrawalPassword')"
						@click="$store.state.user.payPassword == 0?routeTo('/pages/other/me/setPayPassword'):routeTo('/pages/other/me/updatePassword','?updatePWDType=2')" />

				</uni-list>
			</uni-card>
			<uni-card class="bgfff m-b-20 card1  " margin='0px 0px 10px 0px' padding="0px" :is-shadow="false"
				:border="false">
				<uni-list :border="false">

					<uni-list-item clickable showArrow :title="$t('language')" :rightText="language.name"
						@click="routeTo('/pages/other/me/changeLang')" />
					<uni-list-item clickable showArrow :title="$t('preference')" :rightText="changeColor.name"
						@click="routeTo('/pages/other/me/changeColor')" />
					<!-- <uni-list-item clickable showArrow title="主题切换" rightText="日间模式"
				@click="routeTo('/pages/other/me/changeTheme')" /> -->
					<uni-list-item clickable showArrow :title="$t('about')"
						@click="routeTo('/pages/other/me/aboutUs')" />
				</uni-list>
			</uni-card>

			<button class="button footFixedButton" @click="signOut()" v-if="token">{{$t('signOut')}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				changeColor: '',
			}
		},
		computed: {
			language() {
				return this.$store.state.user.languageInfo
			},
			token() {
				return this.$store.state.user.token
			}
		},
		onShow() {
			this.changeColor = uni.getStorageSync('changeColor')
		},

		onLoad() {

		},
		methods: {
			signOut() {
				this.$store.commit('user/LOGOUT')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.app {
		background-color: #eef1f5;
		min-height: 100vh;

		.button {
			left: 30rpx;
			right: 30rpx;
		}
	}
</style>
