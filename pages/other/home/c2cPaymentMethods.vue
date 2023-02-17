<template>
	<view class="page">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('collectionAccount')" rightText=""
			@clickLeft="routeTo(1)">

		</uni-nav-bar>
		<view class="content main">
			<view class="">
				<view class="" v-for="(item,index) in getUserBankCardData" :key="item.id">
					<uni-card class="bgfff m-b-20 card1  " margin='0px' padding="5px" :is-shadow="false"
						:border="false">

						<view class="flex_sp_be">
							{{item.bankName}}
							<uni-icons type="trash" size="20" @click="delBankCard(item)"></uni-icons>
						</view>
						<view class="">
							{{item.bankCardCode}}
						</view>
						<view class="flex_sp_be">
							<text>{{item.payeeName}}</text>
							<text class="green"
								@click="routeTo('/pages/other/assets/c2cTrade','?c2cTrade='+JSON.stringify(item) )">{{$t('sellCoins')}}
								<uni-icons color="#12b887" type="forward" size="15"></uni-icons>
							</text>

						</view>
					</uni-card>
				</view>
				<loadMore :total="getUserBankCardData.length" :nowPage="1" :pages="1" :loading="loading"></loadMore>
			</view>
			<button class="button footFixedButton" @click="noSetWithdrawalPassword">{{$t('addCollection')}}</button>
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
				loading: false,
				getUserBankCardData: '',
			}
		},
		computed: {

			//借助mapGetters生成计算属性：
			...mapGetters('user', ['getUser']),
		},

		onShow() {
			this.getUserBankCard()
		},

		onLoad() {

		},
		methods: {
			noSetWithdrawalPassword() {
				if (this.getUser.payPassword == "0") {
					this.$qxPop.show({
						message: this.$t('noSetWithdrawalPassword'),
						showTitle: false,
						showConfirmButton: true,
						confirmButtonText: this.$t('confirm'),
						duration: 0,
						success: () => {
							this.routeTo('/pages/other/me/setPayPassword')
						}
					})
				} else {
					this.routeTo('/pages/other/home/addC2CPayment')
				}
			},
			delBankCard(item) {
				uni.showModal({
					title: '',
					content: this.$t('showModal1'),
					cancelText: this.$t('cancelText'),
					confirmText: this.$t('confirm'),
					success: (res) => {
						if (res.confirm) {
							this.$api.addWallet.delBankCard({
								id: item.id
							}).then((res) => {
								this.getUserBankCard()
							})
						}
					}
				})
			},
			getUserBankCard() {
				let params = {
					type: 1, //是	in
				}
				this.loading = true
				this.$api.withdraw.getUserBankCard(this.deleteInvalidParam(params)).then(res => {
						this.loading = false
						console.log('res', res);
						this.getUserBankCardData = res
					})
					.catch(err => {
						this.loading = false
						console.log('err', err);
					})
			},

		}
	}
</script>

<style lang="scss" scoped>
	.main {
		padding-top: 50rpx;
	}
</style>
